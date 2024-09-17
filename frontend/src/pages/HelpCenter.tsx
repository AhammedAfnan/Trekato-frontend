import React from "react";
import Navbar from "../components/Navbar";

const HelpCenter: React.FC = () => {
  const links = [
    { text: "Home", href: "/" },
    { text: "Help Center", href: "/help-center" },
    { text: "My Profile", href: "/profile" },
  ];

  return (
    <div className="bg-black h-screen text-white">
      {/* Navbar */}
      <Navbar links={links} />

      {/* <div className="flex justify-center pt-16 h-[calc(100vh-85px)]">
        <div className="w-full max-w-lg relative">
          <div className="relative flex items-center">
            <img
              src="/images/Searchlogo.png"
              alt="Search Icon"
              className="w-5 h-5 ml-3"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-8 py-2 bg-gray-100 rounded-sm border border-gray-300 placeholder-black"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HelpCenter;
