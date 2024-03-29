"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isImageOn, setIsImageOn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const logged = localStorage.getItem("loggedIn");
    if (logged === "true") {
      setIsLoggedIn(true);
    }
  }, []); 
  
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
    router.push("/login"); 
  };

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
                  <p className="px-3 py-2 text-sm font-medium">About us</p>
                </Link>
                <Link href="/#contact">
                  <p className="px-3 py-2 text-sm font-medium">Contact us</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {isLoggedIn ? (
              <div>
                <img id="avatarButton" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer" onClick={() => setIsImageOn(!isImageOn)} src="https://img.icons8.com/?size=256&id=108296&format=png"  />
                {isImageOn && (

              <div id="userDropdown" className="z-10 absolute  bg-black divide-y divide-gray-100 rounded-lg w-44 right-4">
  <div className="px-4 py-3 text-sm text-white ">
    <div>Bonnie Green</div>
    <div className="font-medium truncate">name@flowbite.com</div>
  </div>
  <ul className="py-2 text-sm text-white dark:text-white" aria-labelledby="avatarButton">
    <li>
    <a href="#" className="block px-4 py-2 hover:bg-white hover:text-gray-700">API Keys</a>
    </li>
    <li>
      <a href="#" className="block px-4 py-2 hover:bg-white hover:text-gray-700">Settings</a>
    </li>

  </ul>
  <div className="py-1">
    <a href="#" className="block px-4 py-2 text-sm text-white hover:text-gray-700 hover:bg-white dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-black" onClick={handleLogout}>Sign out</a>
  </div>
              </div>
                              )}
              </div>
                          ) : (
                            <Link href="/login">
                              <button className="hidden sm:block px-4 py-2 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">Sign In</button>
                            </Link>
                          )}
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
