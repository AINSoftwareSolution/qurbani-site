'use client';
import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto px-2 py-8 lg:px-12 lg:py-5 flex items-center justify-between">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <Image src={LogoImg} className="w-28 h-auto object-contain" alt="Daulat Cars Logo" /> */}
          <span className="text-xl font-bold">Logo</span>
        </Link>

        {/* Navbar items on the right */}
        <div className="ml-auto w-full md:w-auto md:flex md:justify-end">
          <ul
            className="flex flex-col md:flex-row p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 
            md:space-x-8 md:mt-0 md:border-0 md:bg-transparent"
          >
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  font-semibold md:hover:bg-transparent 
                md:hover:text-blue-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 font-semibold  md:hover:bg-transparent 
                md:hover:text-blue-700"
              >
                About
              </Link>
            </li>
            

<li className="relative group" id="mega-menu-item-185">
    <Link 
        href="/" 
        aria-haspopup="true" 
        aria-expanded="true" 
        tabIndex={0}
        className=" block py-2 px-3 text-gray-800 dark:text-white hover:text-blue-500 font-semibold inline-flex items-center"
    >
        Services
        <MdKeyboardArrowDown className="ml-1" />
    </Link>
    <ul className="absolute left-0 hidden group-hover:block bg-white dark:bg-gray-800 text-gray-800 font-semibold dark:text-white shadow-lg mt-2 rounded-md w-48 z-10">
        <li>
            <Link 
                href="/" 
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                Qurbani
            </Link>
        </li>
        <li>
            <Link 
                href="/" 
                className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-red-500 text-black"
            >
                Aqeeqa
            </Link>
        </li>
    </ul>
</li>


            
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 font-semibold md:hover:bg-transparent 
                md:hover:text-blue-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
