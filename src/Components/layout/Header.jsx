import { Search } from 'lucide-react';
import React from 'react';
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { Combobox, ComboboxInput, ComboboxContent, ComboboxEmpty, ComboboxList, ComboboxItem } from "@/Components/ui/combobox";
import { BiCartAdd, BiSolidHeart } from 'react-icons/bi';


function Header() {

  const catagories = ["All Categories", "Men's Fashion", "Laptops", "Mobiles", "Consumer Electronics", "Televisions", "Watches", "Fashion", "Home Appliances", "Backpacks", "Tablets", "Headphones"];

  return (
    <div>
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6">

          {/* Logo */}
          <div className="text-xl font-bold whitespace-nowrap">
            BrandName
            67
          </div>

          {/* Search Bar */}
          <div className="flex flex-1 items-center border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 px-4 py-2 text-sm outline-none"
            />

            <Combobox items={catagories}>
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

            {/* <select title="Select Category" className="px-3 py-2 text-sm border-l outline-none bg-white">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Men's Fashion</option>
              <option>Laptops</option>
              <option>Mobiles</option>
              <option>Consumer Electronics</option>
              <option>Televisions</option>
              <option>Watches</option>
              <option>Fashion</option>
              <option>Backpacks</option>
              <option>Tablets</option>
              <option>Headphones</option>
            </select> */}
            <Button className="px-4 py-2 bg-blue-600 text-white text-sm hover:bg-blue-700">
              <Search size={20} />
            </Button>
          </div>

          {/* Right Actions */}
          <div className="flex items-end gap-4 text-sm whitespace-nowrap">
            <Button variant="outline" className="flex items-center gap-1 px-2">
              <BiSolidHeart className="w-5 h-5 text-red-600" />
              Favorites
              <Badge className="absolute top-16 right-55 bg-red-500 rounded-full">
                9</Badge>
            </Button>
            <Button variant="outline" className="px-2">
              <Badge className="absolute top-16 right-32 bg-red-500 rounded-full">
                9</Badge>
              <BiCartAdd className="w-5 h-5" />
              $0.00</Button>
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