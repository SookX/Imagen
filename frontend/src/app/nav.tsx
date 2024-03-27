"use client";

import React, { useState } from 'react';
import Link from 'next/link';


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black text-white z-10">
      <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link href="/dashboard">
                <p className="px-3 py-2 text-sm font-medium">Dashboard</p>
                </Link>
                <Link href="/#about">
                  <p  className="px-3 py-2 text-sm font-medium">About us</p>
                </Link>
                <Link href="/#contact">
                <p  className="px-3 py-2 text-sm font-medium">Contact us</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/login">
            <button className="hidden sm:block px-4 py-2 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">Sign In</button>
            </Link>
            <button className="sm:hidden px-4 py-2 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black-800">
            <a href="#dashboard" className="block px-3 py-2 text-base font-medium">Dashboard</a>
            <a href="#about" className="block px-3 py-2 text-base font-medium">About us</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium">Contact us</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
