import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

interface NavbarProps {
  links: { text: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white flex items-center p-4 w-full h-[85px] border-b border-gray-800 relative">
      {/* Left Section */}
      <div className="absolute left-4 flex items-center space-x-2">
        <img
          src="/images/Vector.png"
          alt="Trekato Logo"
          className="w-[23px] h-[30px]"
        />
        <span className="font-poppins font-semibold text-[14px] md:text-[18px] leading-[20px] md:leading-[27px]">
          Trekato Community
        </span>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center ml-auto">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Middle Section */}
      <div className="flex-grow hidden md:flex items-center justify-center">
        <div
          className="flex items-center space-x-4 md:space-x-6 mx-4"
          style={{ width: "auto" }} // Adjust width to fit content
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white text-sm md:text-base"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-2 bg-white text-black rounded-full py-1 px-2 md:py-2 md:px-3 absolute right-4">
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-violet-500 flex items-center justify-center">
          <span className="text-white text-xs md:text-sm">s</span>
        </div>
        <span className="text-xs md:text-sm text-black"> @elonmusk</span>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center space-y-6 transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map((link, index) => (
          <a key={index} href={link.href} className="text-white text-xl">
            {link.text}
          </a>
        ))}
        <div className="flex items-center space-x-2 mt-4">
          {/* <img
            src="/images/Union.png"
            alt="Bell Icon"
            className="w-20 h-20"
          /> */}
          <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center">
            <span className="text-white text-sm">s</span>
          </div>
          <span className="text-sm text-white"> @elonmusk</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
