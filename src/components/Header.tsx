import React from 'react';

const Header: React.FC = () => (
  <header
    className="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-40 border-b border-gray-100 shadow-sm flex items-center px-6"
    role="banner"
    aria-label="Site header"
  >
    <span className="text-2xl font-bold text-gray-900 tracking-tight select-none" tabIndex={0}>
      HelloApp
    </span>
  </header>
);

export default Header;
