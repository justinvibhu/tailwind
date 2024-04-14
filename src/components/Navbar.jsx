import React from 'react';
import logo from '../assets/LOGO.png'; 
// Import the logo image

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-black to-indigo-500 py-4 border-red-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center rounded-full overflow-hidden"> {/* Circular container */}
            <a href="#" className=" h-10 w-10"><img src={logo} alt="React Logo" className="h-full" /></a> {/* Use the imported logo */}
          </div>
          
          {/* Mobile Menu Button (Hidden by Default) */}
          <div className="block lg:hidden">
            <button className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <div className="hidden lg:flex lg:items-center lg:justify-between space-x-4">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Services</a>
            <a href="#" className="text-white">Contact</a>
          </div>
          
          {/* Auth Links */}
          <div className="hidden lg:flex">
            <a href="#" className="text-white">Login</a>
            <a href="#" className="text-white ml-4">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
