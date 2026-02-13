import React from "react";
import { useTranslation } from "react-i18next";
import {
  BiGlobe,
  BiLogIn,
  BiShuffle,
  BiSolidDollarCircle,
  BiSolidPhone,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/Components/ui/dropdown-menu";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [selectedCurrency, setSelectedCurrency] = React.useState("USD");

  const languages = [
    { label: "English", value: "en" },
    { label: "हिन्दी", value: "hi" },
  ];

  const currencies = ["USD", "INR", "EUR"];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left */}
        <div className="text-sm font-medium flex items-center gap-2">
          {t("Welcome to our Store!")}
          <a
            href="tel:+1800123456"
            className="flex items-center gap-1 text-gray-500 hover:text-indigo-600"
          >
            <BiSolidPhone className="text-red-600 w-4 h-4" />
            {t("Need Help?")} +1-800-123-456
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 text-sm text-gray-700">
          <Link to="leads" className="flex items-center gap-1 hover:text-indigo-600">
            <BiSolidPhone />
            {t("Contact Us")}
          </Link>

          <Link to="/compare" className="flex items-center gap-1 hover:text-indigo-600">
            <BiShuffle />
            {t("Compare")}
          </Link>

          {/* Language */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 px-2">
                <BiGlobe />
                {languages.find(l => l.value === i18n.language)?.label}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                {languages.map(lang => (
                  <DropdownMenuItem
                    key={lang.value}
                    onClick={() => i18n.changeLanguage(lang.value)}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Currency */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 px-2">
                <BiSolidDollarCircle />
                {selectedCurrency}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                {currencies.map(cur => (
                  <DropdownMenuItem
                    key={cur}
                    onClick={() => setSelectedCurrency(cur)}
                  >
                    {cur}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Account */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 px-2">
                <BiLogIn />
                {t("Account")}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>{t("Profile")}</DropdownMenuItem>
              <DropdownMenuItem>{t("Logout")}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav >
  );
}