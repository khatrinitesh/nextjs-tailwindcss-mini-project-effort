"use client";
import Link from "next/link";
import { useState } from 'react';

const CustomApp = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  

  return (
    <>
      <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        {/* Your logo or site name */}
        <Link href="/" className="text-white text-lg font-semibold">My Next.js App
        </Link>

        {/* Hamburger icon for mobile */}
        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Responsive menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          {/* Your navigation links go here */}
          <Link href="/" className="text-white block mb-2">Home
          </Link>
          <Link href="/about" className="text-white block">About
          </Link>
        </div>
      )}
    </nav>
    </>
  );
};

export default CustomApp;
