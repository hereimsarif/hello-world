import React from "react";
import { Button } from "@/components/ui/button"; // if you're using shadcn/ui, else replace with a normal button

const Header: React.FC = () => (
  <header
    className="fixed top-0 left-0 w-full h-16 bg-gradient-to-r from-white/70 to-white/40 backdrop-blur-md supports-[backdrop-filter]:bg-white/40 z-40 border-b border-gray-200 shadow-sm flex items-center justify-between px-6"
    role="banner"
    aria-label="Site header"
  >
    {/* Logo / Brand */}
    <span
      className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight select-none"
      tabIndex={0}
    >
      HelloApp new
    </span>

    {/* Navigation */}
    <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
      <a href="#features" className="hover:text-indigo-600 transition-colors">
        Features
      </a>
      <a href="#pricing" className="hover:text-indigo-600 transition-colors">
        Pricing
      </a>
      <a href="#about" className="hover:text-indigo-600 transition-colors">
        About
      </a>
    </nav>

    {/* CTA Button */}
    <div className="flex items-center space-x-4">
      <Button variant="outline" className="hidden sm:inline-flex">
        Sign In
      </Button>
      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md">
        Get Started
      </Button>
    </div>
  </header>
);

export default Header;
