import React from 'react';

const Footer: React.FC = () => (
  <footer
    className="w-full h-12 md:h-12 bg-white border-t border-gray-100 flex items-center justify-center text-sm text-gray-500 px-4"
    role="contentinfo"
  >
    <span>
      &copy; {new Date().getFullYear()} HelloApp. All rights reserved.
    </span>
  </footer>
);

export default Footer;
