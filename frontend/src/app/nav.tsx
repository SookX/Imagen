import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="#dashboard" className="px-3 py-2 text-sm font-medium">Dashboard</a>
                <a href="#about" className="px-3 py-2 text-sm font-medium">About us</a>
                <a href="#contact" className="px-3 py-2 text-sm font-medium">Contact us</a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="hidden sm:block px-4 py-2 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">Sign In</button>
            <button className="sm:hidden px-4 py-2 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">Menu</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
