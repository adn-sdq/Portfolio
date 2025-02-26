"use client";
import { useState } from "react";
import "../app/globals.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="relative flex items-center justify-between py-4 md:py-2">
        {/* Site Title */}
        <div className="text-white text-[20px] font-medium hoverable select-none tracking-[-0.01em]">
          Adnan Memos
        </div>

        {/* Center navigation links */}
        <div className="hidden md:flex flex-1 items-center justify-end pr-[20vw]">
          <div className="flex items-center space-x-5 md:space-x-10">
            <a
              href="#articles"
              className="text-white text-xs md:text-lg font-normal tracking-[-0.01em] select-none hover-underline underline-offset-2 hoverable"
            >
              Articles
            </a>
            <a
              href="#archives"
              className="text-white text-xs md:text-lg font-normal tracking-[-0.01em] select-none hover-underline underline-offset-2 hoverable"
            >
              Archives
            </a>
          </div>
        </div>

        {/* Right side: Reach Out button */}
        <div className="hidden md:flex items-center">
          <a
            href="mailto:adn.memos@gmail.com?subject=Project%20Collaboration%20Inquiry&body=Hi%20Adnan%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I'd%20love%20to%20discuss%20a%20potential%20project%20collaboration.%0A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] transition duration-300 hover:font-medium hover:bg-white hover:text-[#224faa] hoverable"
          >
            Reach Out
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="relative flex justify-center items-center h-[2rem] w-[2rem]"
          >
            {/* Plus Icon (Transforms into Cross) */}
            <span
              className={`absolute block h-[2px] w-[16px] bg-white transition-transform duration-700 ${
                menuOpen ? "rotate-45" : ""
              }`}
            ></span>
            <span
              className={`absolute block h-[2px] w-[16px] bg-white transition-transform duration-700 ${
                menuOpen ? "-rotate-45" : "rotate-90"
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-4 top-full bg-[#224faa] rounded shadow-lg mt-3 py-2 w-[150px]">
            <a
              href="#articles"
              className="block px-4 py-2 text-sm text-white hover:bg-[#1b3b7e]"
              onClick={() => setMenuOpen(false)}
            >
              Articles
            </a>
            <a
              href="#archives"
              className="block px-4 py-2 text-sm text-white hover:bg-[#1b3b7e]"
              onClick={() => setMenuOpen(false)}
            >
              Archives
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
