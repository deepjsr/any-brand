import React, { createContext, useContext, useMemo, useRef, useState } from "react";

type ComboboxContextType = {
  items: string[];
  query: string;
  setQuery: (q: string) => void;
  filtered: string[];
  open: boolean;
  setOpen: (v: boolean) => void;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
};

const ComboboxContext = createContext<ComboboxContextType>({
  items: [],
  query: "",
  setQuery: () => {},
  filtered: [],
  open: false,
  setOpen: () => {},
  activeIndex: -1,
  setActiveIndex: () => {},
});

export function Combobox({ items = [], children }: { items?: string[]; children?: React.ReactNode }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const filtered = useMemo(() => {
    if (!query) return items;
    return items.filter((i) => i.toLowerCase().includes(query.toLowerCase()));
  }, [items, query]);

  return (
    <ComboboxContext.Provider value={{ items, query, setQuery, filtered, open, setOpen, activeIndex, setActiveIndex }}>
      <div className="relative">{children}</div>
    </ComboboxContext.Provider>
  );
}

export function ComboboxInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { query, setQuery, filtered, open, setOpen, activeIndex, setActiveIndex } = useContext(ComboboxContext);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((idx) => Math.min(idx + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((idx) => Math.max(idx - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && filtered[activeIndex]) {
        setQuery(filtered[activeIndex]);
        setOpen(false);
        inputRef.current?.blur();
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
    if (props.onKeyDown) props.onKeyDown(e as any);
  }

  return (
    <input
      {...props}
      ref={inputRef}
      value={(props.value as string) ?? query}
      onChange={(e) => {
        setQuery(e.target.value);
        setOpen(true);
        setActiveIndex(-1);
        if (props.onChange) props.onChange(e as any);
      }}
      onFocus={(e) => {
        setOpen(true);
        if (props.onFocus) props.onFocus(e as any);
      }}
      onBlur={(e) => {
        // small timeout to allow click selection
        setTimeout(() => setOpen(false), 150);
        if (props.onBlur) props.onBlur(e as any);
      }}
      onKeyDown={onKeyDown}
      className={props.className ?? "h-10 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500"}
    />
  );
}

export function ComboboxContent({ children }: { children?: React.ReactNode }) {
  const { open, filtered } = useContext(ComboboxContext);
  if (!open) return null;
  if (filtered.length === 0) return <div className="absolute z-50 mt-1 w-full bg-white border rounded-md shadow-lg">{children}</div>;
  return <div className="absolute z-50 mt-1 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-auto">{children}</div>;
}

export function ComboboxEmpty({ children }: { children?: React.ReactNode }) {
  const { filtered } = useContext(ComboboxContext);
  if (filtered.length === 0) return <div className="p-2 text-sm text-gray-500">{children}</div>;
  return null;
}

export function ComboboxList({ children }: { children: ((item: string) => React.ReactNode) | React.ReactNode }) {
  const { filtered } = useContext(ComboboxContext);
  if (typeof children === "function") {
    return <div>{filtered.map((item) => (children as (s: string) => React.ReactNode)(item))}</div>;
  }
  return <div>{children}</div>;
}

export function ComboboxItem({ value, children }: { value: string; children?: React.ReactNode }) {
  const { setQuery, filtered, activeIndex, setActiveIndex, setOpen } = useContext(ComboboxContext);
  const index = filtered.indexOf(value);
  const isActive = index === activeIndex;

  return (
    <div
      onMouseEnter={() => setActiveIndex(index)}
      onClick={() => {
        setQuery(value);
        setOpen(false);
      }}
      className={
        "px-3 py-2 text-sm cursor-pointer select-none " + (isActive ? "bg-sky-100" : "hover:bg-gray-50")
      }
    >
      {children}
    </div>
  );
}

export default Combobox;
