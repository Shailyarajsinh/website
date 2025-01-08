import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from './logo.png';


export default function Example() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);




  return (
    <header className="sticky z-50 top-0 bg-[#17181D] text-white">
    <nav className="max-w-screen-xl mx-auto">
      {/* Desktop and Logo */}
      <div className="flex justify-between items-center px-4 py-3 lg:py-4 lg:px-8">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2 animate-bounce" />
          <span className="font-mono text-base">COMPANY NAME</span>
        </div>

        {/* Hamburger for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:gap-4 w-full justify-center">
          {['Home', 'About Us', 'Projects', 'Blog', 'Careers', 'Contact Us'].map(
            (item, index) => (
              <li key={index} className="flex-1 text-center">
                <NavLink
                  to={`/${item.replace(' ', '-').toLowerCase()}`}
                  className={({ isActive }) =>
                    `block py-3 px-4 font-mono text-base uppercase transition-all ${
                      isActive
                        ? 'text-blue-500 bg-white'
                        : 'text-white hover:text-blue-500 hover:bg-gray-700'
                    }`
                  }>
                  {item}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="lg:hidden flex flex-col items-center bg-[#17181D]">
          {['Home', 'About Us', 'Projects', 'Blog', 'Careers', 'Contact Us'].map(
            (item, index) => (
              <li key={index} className="w-full text-center border-b border-gray-700">
                <NavLink
                  to={`/${item.replace(' ', '-').toLowerCase()}`}
                  onClick={toggleMobileMenu}
                  className={({ isActive }) =>
                    `block py-3 font-mono text-base uppercase transition-all ${
                      isActive
                        ? 'text-blue-500 bg-white'
                        : 'text-white hover:text-blue-500'
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  </header>
  
  )
}
