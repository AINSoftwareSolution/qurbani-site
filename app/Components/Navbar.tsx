"use client";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-2 py-4 lg:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="text-xl font-bold">Logo</span>
        </Link>

        {/* Navbar items on the right */}
        <div className="ml-auto w-full md:w-auto md:flex md:justify-end">
          <ul className="flex flex-row items-center space-x-6 font-medium">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 font-semibold md:hover:bg-transparent md:hover:text-blue-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 font-semibold md:hover:bg-transparent md:hover:text-blue-700"
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
                className="py-2 px-3 text-gray-800 dark:text-white hover:text-blue-500 font-semibold inline-flex items-center"
              >
                Services
                <MdKeyboardArrowDown className="ml-1" />
              </Link>
              <ul className="absolute left-0 hidden group-hover:block bg-white dark:bg-gray-800 text-gray-800 font-semibold dark:text-white shadow-lg mt-2 rounded-md w-48 z-10">
                <li>
                  <Link
                    href="/#Home"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Qurbani
                  </Link>
                </li>
                <li>
                  <Link
                    href="./services/aqeeqa"
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
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 font-semibold md:hover:bg-transparent md:hover:text-blue-700"
              >
                Contact
              </Link>
            </li>
            <li> 
              <button
                type="button"
                className="py-2 px-4 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-bold rounded-lg text-md text-center"
              >
                Donate Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
