import React from 'react'
import Header from '../Components/layout/Header'
import Footer from '../Components/layout/Footer'
import Navbar from '../Components/layout/Navbar'
import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { MoreHorizontalIcon } from 'lucide-react';
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { ButtonGroup } from '@/Components/ui/button-group';

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      {/* Main content */}
      <div className="max-w-7xl mx-auto flex px-4 justify-between border">
        <ButtonGroup>
          <Button variant="outline">Snooze</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="More Options">
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  {/* <MailCheckIcon /> */}
                  Mark as Read
                </DropdownMenuItem>

              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>


        {/* <Button className="px-6 bg-blue-600 text-white" aria-label="All Categories">
        <select title="Select Category" className="px-3 py-2 text-sm border-l outline-none bg-blue-600 text-white">

          {["All Categories", "Men's Fashion", "Laptops", "Mobiles", "Consumer Electronics", "Televisions", "Watches", "Fashion", "Home Appliances", "Backpacks", "Tablets"].map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
       </Button> */}
        <ul className="flex gap-6 text-sm ml-2 mt-2">
          <li>Shope</li>
          <li>Brands</li>
          <li>About Us</li>
          <li>TOS</li>
          <li>FAQ</li>
          <li>Buy Theme</li>
        </ul>
        <p className="ml-4 text-sm text-orange-500 mt-2">Free Shipping over $100+</p>
      </div >

      <Footer />
    </>
  )
}

export default Home