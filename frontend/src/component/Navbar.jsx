import React, { useState, useRef } from 'react';
import { FaChevronDown, FaPhoneAlt } from 'react-icons/fa'
import AraboLogo from '../assets/AraboLogo.png';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';

const BASE_URL = 'https://raw.githubusercontent.com/auctionDeveloper/Fueloil-json-data/main/api/product.json';


function toUrlSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function Navbar({ onSelect }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  
const PHONE = '+91 9044446327';

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setProductDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProductDropdownOpen(false);
    }, 200);
  };

  const [productData, setProductData] = useState(null);
const products = productData ? Object.keys(productData.product) : [];
useEffect(() => {
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => setProductData(data))
    .catch((err) => console.error("Failed to load product.json", err));
}, []);

useEffect(() => {
  if (mobileMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [mobileMenuOpen]);

  return (
    <nav className="top-0 sticky bg-white shadow-md overflow-visible z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 text-xl font-bold text-[#333333]">
            <Link to="/">
              <img src={AraboLogo} alt="Arabo Oil Logo" className="h-12 w-10 inset" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <Link to="/" className="cursor-pointer hover:text-gray-900 font-medium">Home</Link>
            <Link to="/aboutus" className="cursor-pointer hover:text-gray-900 font-medium">About Us</Link>

            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link
                to="/product"
                className="text-gray-700 font-medium flex items-center gap-1"
              >
                Product <FaChevronDown className="text-xs" />
              </Link>

              {productDropdownOpen && (
                <div
                  className="absolute mt-2 flex flex-col bg-white shadow-md rounded-md py-2 w-40 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                {productData && products.map((productKey) => {
  const product = productData.product[productKey];

                    return (
                      <div key={productKey} className="group">
                        <div className="px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                          <Link
                            to={`/product/${toUrlSlug(productKey)}`}
                            onClick={() => setProductDropdownOpen(false)}
                          >
                            {product.title}
                          </Link>
                          <FaChevronDown className="text-xs ml-2" />

                          {/* Subproduct Dropdown */}
                          <div onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} className="absolute left-full top-5 hidden group-hover:flex flex-col bg-white shadow-md rounded-md py-2 w-60 z-50">
                            {product.subproducts.map((subprod) => (
                              <Link
                                key={subprod.name}
                                to={`/product/${toUrlSlug(productKey)}/${toUrlSlug(subprod.name)}`}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setProductDropdownOpen(false)}
                              >
                                {subprod.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <Link to="/contactus" className="cursor-pointer hover:text-gray-900 font-medium">Contact Us</Link>
          </div>

          {/* Mobile Hamburger */}
         {/* Mobile phone + hamburger */}
<div className="md:hidden flex items-center gap-2">
  <a
    href={`tel:${PHONE.replace(/\s+/g, '')}`}
    className="bg-[#980000] text-white px-2 py-2 rounded-full text-xs font-medium flex items-center gap-1"
  >
    <FaPhoneAlt className="text-[10px]" />
    {PHONE}
  </a>

  <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="text-gray-700 focus:outline-none"
    aria-label="Toggle menu"
  >
    {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
  </button>
</div>

        {/* Phone – desktop */}
<a
  href={`tel:${PHONE.replace(/\s+/g, '')}`}
  className="hidden md:flex items-center gap-1 bg-[#980000] text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-[#980000] ml-4"
>
  <FaPhoneAlt className="text-xs" />
  {PHONE}
</a>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
          <div className="md:hidden max-h-[80vh] overflow-y-auto px-4 pb-4">
    <div className="bg-white shadow rounded-md py-2">
            <div className="mb-2" onClick={() => setMobileMenuOpen(false)}>
              <Link to="/" className="block py-1 text-sm text-gray-700">Home</Link>
              <Link to="/aboutus" className="block py-1 text-sm text-gray-700">About Us</Link>
              <Link to="/contactus" className="block py-1 text-sm text-gray-700">Contact Us</Link>

              {products.map((productKey) => {
                const product = productData.product[productKey];
                return (
                  <div key={productKey} className="mt-2">
                    <Link
                      to={`/product/${toUrlSlug(productKey)}`}
                      className="block font-medium text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {product.title}
                    </Link>

                    <div className="ml-4 mt-1">
                      {product.subproducts.map((subprod) => (
                        <Link
                          key={subprod.name}
                          to={`/product/${toUrlSlug(productKey)}/${toUrlSlug(subprod.name)}`}
                          className="block py-1 text-sm text-gray-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subprod.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 