import React from 'react';
import { Button } from "@/Components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Footer content */}
        <div className="flex  md:flex-row justify-center items-center">
          <p className="text-sm mr-4">The website uses cookies to improve your experience.</p>
          <Button className="px-6 bg-blue-900">
            Got it</Button>

        </div>
      </div>
    </footer>
  );
}
