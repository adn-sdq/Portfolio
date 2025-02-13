"use client";
import { useState } from "react";
import "../app/globals.css"; // Ensure this file contains the styles below
// import Image from "next/image";
// import Logo from "../public/Logo-2.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="relative flex justify-between items-center  bg-transparent">
      {/* Left Section: Site Title */}
      <div className="text-white text-[20px] md:text-[20px] font-medium hoverable select-none tracking-[-0.01em]">
        Adnan Memos
      </div>

      {/* Navigation Links & Button for md and above */}
      <div className="hidden md:flex items-center space-x-5 md:space-x-80">
        <div className="flex items-center space-x-2 md:space-x-10">
          <a
            href="#articles"
            className="text-white text-xs md:text-lg font-normal tracking-[-0.01em] select-none hover-underline decoration-1 underline-offset-2 hoverable"
          >
            Articles
          </a>
          <a
            href="#archives"
            className="text-white text-xs md:text-lg font-normal tracking-[-0.01em] select-none hover-underline decoration-1 underline-offset-2 hoverable"
          >
            Archives
          </a>
        </div>
        <button className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hover:font-medium transition-colors duration-1000 hover:bg-white hover:text-[#224faa] hoverable">
          Reach Out
        </button>
      </div>

      {/* Dropdown Menu for small devices */}
      <div className="flex md:hidden items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-[10px] font-normal relative flex justify-center items-center h-[2rem] w-[2rem] border border-white tracking-[-0.01em] rounded-full hover:border-[#224faa] hover:font-medium transition"
        >
          {/* Previously existing content */}
          {/* <Image src={Logo} alt="Logo" className="w-[40%] h-[40%]" /> */}
          {/* Added circle centered in the button */}
          <span className="flex justify-center items-center w-full h-full">
            <div className="w-3 h-3 bg-white hover:bg-[#224faa] rounded-full"></div>
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute right-4 top-full bg-white shadow-md rounded mt-2 py-2 w-32">
          <a
            href="#articles"
            className="block px-4 py-2 text-sm text-[#224faa] hover:bg-gray-100"
          >
            Articles
          </a>
          <a
            href="#archives"
            className="block px-4 py-2 text-sm text-[#224faa] hover:bg-gray-100"
          >
            Archives
          </a>
        </div>
      )}
    </nav>
  );
}
