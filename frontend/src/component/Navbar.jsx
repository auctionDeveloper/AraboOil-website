import React, { useState, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import AraboLogo from '../assets/AraboLogo.png'
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';



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
    }, 200);
  };
  

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 text-xl font-bold text-[#333333] ">
  <Link to='/'><img src={AraboLogo} alt="Arabo Oil Logo" className="h-12 w-10 inset" /></Link>
  
</div>


          {/* Center navigation links */}
         <div className="hidden md:flex flex-1 justify-center relative space-x-8">
             <Link to="/" className="relative cursor-pointer hover:text-gray-900 font-medium">Home</Link>
             <Link to="/aboutus" className="relative cursor-pointer hover:text-gray-900 font-medium">About Us</Link>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="text-gray-700 font-medium flex items-center gap-1"
                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
              >
                <Link to='/product'>Product</Link> <FaChevronDown className="text-xs" />
              </button>
              {productDropdownOpen && (
                <div
                  className="absolute mt-2 flex flex-col bg-white shadow-md rounded-md py-2 w-40 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative group">
                    <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                     <Link to="/product/mto"> MTO </Link><FaChevronDown className="text-xs ml-2" />
                      <div className="absolute left-full top-0 hidden group-hover:flex flex-col bg-white shadow-md rounded-md py-2 w-60 z-50">
                        {[
                          "Thiner",
                          "Reducer",
                          "Mineral Turpentine Oil",
                          "Paint Thiner",
                          "Industrial Turpentine Oil"
                        ].map((product) => (
                         <Link
  key={product}
  to={`/product/mto/${product.toLowerCase().replace(/\s+/g, '-')}`}
  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
  onClick={() => setProductDropdownOpen(false)}
>
  {product}
</Link>

                        ))}
                      </div>
                    </div>
                  </div>
                   {/* Base Oil section */}
    <div className="relative group mt-1">
      <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
        <Link to="/product/base-oil">Base Oil</Link> <FaChevronDown className="text-xs ml-2" />
        <div className="absolute left-full top-0 hidden group-hover:flex flex-col bg-white shadow-md rounded-md py-2 w-60 z-50">
          {[
            "Base Oil Type 1",
            "Base Oil Type 2",
            "Base Oil Type 3",
            "Base Oil Type 4"
          ].map((product) => (
            <Link
              key={product}
              to={`/product/base-oil/${product.toLowerCase().replace(/\s+/g, '-')}`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => setProductDropdownOpen(false)}
            >
              {product}
            </Link>
          ))}
        </div>
      </div>
    </div>
                </div>
              )}
            </div>
            <Link to="/contactus" className="relative cursor-pointer hover:text-gray-900 font-medium">Contact Us</Link>
          </div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none" aria-label="Toggle menu"
            >
               {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
  <div className="md:hidden px-4 pb-4">
    <div className="bg-white shadow rounded-md py-2">
      <div className="mb-2"  onClick={() => setMobileMenuOpen(false)}>
              <Link to="/" className="block py-1 text-sm text-gray-700">Home</Link>
      <Link to="/aboutus" className="block py-1 text-sm text-gray-700">About Us</Link>
        <div className="font-medium text-gray-700"><Link to="/product">Product</Link></div>
        <div className="ml-4 mt-1">
          {/* Link to MTO main category page (optional) */}
          <Link to="/product/mto" className="block py-1 text-sm text-gray-700">
            MTO
          </Link>

          <div className="ml-4" >
            {/* Individual MTO products */}
            <Link to="/product/mto/thiner" className="block py-1 text-sm text-gray-700">
              Thiner
            </Link>
            <Link to="/product/mto/reducer" className="block py-1 text-sm text-gray-700">
              Reducer
            </Link>
            <Link to="/product/mto/mineral-turpentine-oil" className="block py-1 text-sm text-gray-700">
              Mineral Turpentine Oil
            </Link>
            <Link to="/product/mto/paint-thiner" className="block py-1 text-sm text-gray-700">
              Paint Thiner
            </Link>
            <Link to="/product/mto/industrial-turpentine-oil" className="block py-1 text-sm text-gray-700">
              Industrial Turpentine Oil
            </Link>
          </div>

          {/* Base Oil */}

          <Link to="/product/base-oil" className="block py-1 text-sm text-gray-700">
            Base Oil
          </Link>
           <div className="ml-4" >
  <Link to="/product/base-oil/base-oil-type-1" className="block py-1 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>Base Oil Type 1</Link>
  <Link to="/product/base-oil/base-oil-type-2" className="block py-1 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>Base Oil Type 2</Link>
  <Link to="/product/base-oil/base-oil-type-3" className="block py-1 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>Base Oil Type 3</Link>
  <Link to="/product/base-oil/base-oil-type-4" className="block py-1 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>Base Oil Type 4</Link>
       </div> </div>
      </div>

      {/* Other mobile nav links if needed */}
      <Link to="/contactus" className="block py-1 text-sm text-gray-700">Contact Us</Link>
    </div>
  </div>
)}

    </nav>
  );
}
