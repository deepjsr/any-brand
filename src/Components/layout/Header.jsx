import { Search } from 'lucide-react';
import React from 'react';
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { BiCartAdd, BiSolidHeart } from 'react-icons/bi';
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from '../ui/combobox';


function Header() {

  const catagories = ["All Categories", "Men's Fashion", "Laptops", "Mobiles", "Consumer Electronics", "Televisions", "Watches", "Fashion", "Home Appliances", "Backpacks", "Tablets", "Headphones"];

  return (
    <div>
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6">

          {/* Logo */}
          <div className="text-xl font-bold whitespace-nowrap">BrandName</div>

          {/* Search Bar */}
          <div className="flex flex-1 items-center  border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 px-4 py-2 text-sm outline-none mx-1"
            />
            <Combobox items={catagories} className="border-none">
              <ComboboxInput placeholder="Select a category" />
              <ComboboxContent>
                <ComboboxEmpty>No items found.</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>

            <Button className="px-4 py-2 bg-blue-600 text-white text-sm hover:bg-blue-700">
              <Search size={20} />
            </Button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 text-sm whitespace-nowrap">
            <Button variant="outline" className="relative flex items-center gap-1 px-2">
              <BiSolidHeart className="w-5 h-5 text-red-600" />
              <span className="hidden sm:inline">Favorites</span>
              <Badge className="absolute -top-2 -right-2 inline-flex items-center justify-center h-5 w-5 text-[10px] bg-red-500 text-white rounded-full">9</Badge>
            </Button>
            <Button variant="outline" className="relative flex items-center gap-1 px-2">
              <BiCartAdd className="w-5 h-5" />
              <span className="hidden sm:inline">$0.00</span>
              <Badge className="absolute -top-2 -right-2 inline-flex items-center justify-center h-5 w-5 text-[10px] bg-red-500 text-white rounded-full">9</Badge>
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4  flex justify-center items-center gap-4 text-sm">
        <p className="text-blue-600">Most Searched:</p>
        <p className="text-gray-600">Watch |</p>
        <p className="text-gray-600">apple</p>
      </div>
    </div>
  );
};

export default Header;