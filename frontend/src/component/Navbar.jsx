import React, { useState, useRef } from 'react';

export default function Navbar({ onSelect }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setProductDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProductDropdownOpen(false);
    }, 200); // slight delay to prevent early close
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-xl font-bold text-blue-600">BrandName</div>

          {/* Center navigation links */}
          <div className="hidden md:flex flex-1 justify-center relative">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="text-gray-700 font-medium"
                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
              >
                Product
              </button>
              {productDropdownOpen && (
                <div
                  className="absolute mt-2 flex flex-col bg-white shadow-md rounded-md py-2 w-40 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative group">
                    <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      MTO
                      <div className="absolute left-full top-0 hidden group-hover:flex flex-col bg-white shadow-md rounded-md py-2 w-40 z-50">
                         <a
      onClick={() => {
    onSelect("Thiner");
    setProductDropdownOpen(false);
  }}

    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
  >
    Thinner
  </a>
  <a
    onClick={() =>{ onSelect("Reducer"); setProductDropdownOpen(false);}}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
  >
    Reducers
  </a>
                      </div>
                    </div>
                  </div>
                  <a href="/base-oil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Base Oil</a>
                </div>
              )}
            </div>
          </div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="bg-white shadow rounded-md py-2">
            <div className="mb-2">
              <div className="font-medium text-gray-700">Product</div>
              <div className="ml-4 mt-1">
                <a href="/mto" className="block py-1 text-sm text-gray-700">MTO</a>
                <div className="ml-4">
                  <a href="/thinner" className="block py-1 text-sm text-gray-700">Thinner</a>
                  <a href="/reducers" className="block py-1 text-sm text-gray-700">Reducers</a>
                </div>
                <a href="/base-oil" className="block py-1 text-sm text-gray-700">Base Oil</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}