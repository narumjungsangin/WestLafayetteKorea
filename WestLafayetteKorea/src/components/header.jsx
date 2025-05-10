import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center h-16 px-4">
        <span className="text-teal-600 font-bold text-xl">로고</span>
        <nav className="flex gap-4 text-sm">
          <a href="#" className="text-gray-700 hover:text-teal-600">About</a>
          <a href="#" className="text-gray-700 hover:text-teal-600">Careers</a>
          <a href="#" className="text-gray-700 hover:text-teal-600">Projects</a>
          <a href="#" className="bg-teal-600 text-white px-3 py-1 rounded">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;