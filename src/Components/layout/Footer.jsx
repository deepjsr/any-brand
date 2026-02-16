import React from 'react';
import { Button } from "@/Components/ui/button";
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedin, BiLogoMailchimp, BiLogoTwitter, BiMailSend, BiMap, BiPhoneCall } from 'react-icons/bi';

export default function Footer() {
  return (
    <>
      <div className="">
        {/* Footer content */}
        <div className="bg-blue-500 py-9 mb-10 text-white flex md:flex-row px-10 justify-between items-center">
          <div className="flex flex-col ml-30 ">
            <p className='font-extrabold text-2xl'>Subscribe to Our Newslette</p>
            <p className='font-light'>Subscribe to Our Newsletter & get notifiaction about discounts</p>
          </div>
          <div className="flex border justify-center items-center rounded-md mr-30 bg-white overflow-hidden">
            <input type="email" placeholder="Enter your email address" className="px-4 py-2 text-black border rounded-md" >
            </input>
            <Button variant="default" className='bg-blue-500 hover:bg-blue-700 mr-0.5'>SUBSCRIBE</Button>
          </div>
        </div>
        <div className="flex  gap-9  md:mt-0">
          <div className='py-0 md:py-3 ml-13 flex flex-col gap-2'>
            {/* Contact us */}
            <h1 className="text-xl my-5 whitespace-nowrap font-semibold">Contact Us</h1>
            <a href='tel:9985744569' aria-label='tel' className='gap-2 mt-2 flex text-sm text-gray-600 hover:text-gray-800'> <BiPhoneCall className='mt-0.5' /> +998 57 445 69 69</a>
            <a href='mailto:info@company.com' aria-label='email' className='gap-2 mt-2 flex text-sm text-gray-600 hover:text-gray-800'> <BiMailSend className='mt-0.5' /> info@company.com</a>
            <a href='https://maps.app.goo.gl/J19JoWzkNwhZGtBW9' aria-label='email' className='gap-2 mt-2 flex text-sm text-gray-600 hover:text-gray-800'> <BiMap className='mt-0.5' /> Muhammad Pur Dhaka</a>

            {/* Socials */}
            <div className='flex gap-5 mt-4'>
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-800"><BiLogoFacebookCircle /></a>
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-800"><BiLogoTwitter /></a>
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-800"><BiLogoInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-800"><BiLogoLinkedin /></a>
            </div>

          </div>
          <div className="py-0 md:py-3 ml-43 flex flex-col whitespace-nowrap gap-2">
            <h1 className="text-xl my-5 font-semibold">My Account</h1>
            <a href="#">Dashboard</a>
            <a href="#">My Orders</a>
            <a href="#">My Reviews</a>
            <a href="#">My Profile</a>

          </div>
          <div className="py-0 md:py-3 ml-13 flex flex-col whitespace-nowrap gap-2">
            <h1 className="text-xl my-5 font-semibold">Our Services</h1>
            <a href="#">About Us</a>
            <a href="#">Return Policy</a>
            <a href="#">FAQ</a>
            <a href="#">Privacy & Policy</a>
            <a href="#">Terms & Conditions</a>
          </ div>
          <div className="py-0 md:py-3 ml-13 flex flex-col gap-2">
            <h1 className="text-xl my-5  font-semibold">Information</h1>
            <a href="#">New Arrivals</a>
            <a href="#">Specials</a>
            <a href="#">Hot Deals</a>
            <a href="#">Backpacks</a>
            <a href="#">Men's Fassion</a>
          </div>
          <div className="py-0 md:py-3 ml-13 flex flex-col gap-2">
            <h1 className="text-lg my-5  font-semibold">Tags</h1>
            <div className="flex flex-wrap gap-2">
              <a href="#" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">Laptops</a>
              <a href="#" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">Mobiles</a>
              <a href="#" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">Consumer Electronics</a>
              <a href="#" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">Televisions</a>
              <a href="#" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">Watches</a>
              <a href="#" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">Fashion</a>
              <a href="#" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">Home Appliances</a>
              <a href="#" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">Backpacks</a>
              <a href="#" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">Tablets</a>
            </div>
          </div>

        </div>
        {/* Cookie banner */}
        <div className="mt-8 lg:py-3 bg-gray-800 flex justify-center items-center gap-2 ">
          <p className="text-sm  text-white ">The website uses cookies to improve your experience.
          </p>
          <Button className="px-6 bg-blue-900">
            Got it
          </Button>
        </div>
      </div>
    </>
  );
}
