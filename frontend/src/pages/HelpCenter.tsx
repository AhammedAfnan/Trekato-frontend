import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HelpCenter: React.FC = () => {
  const links = [
    { text: "Home", href: "/" },
    { text: "Help Center", href: "/help-center" },
    { text: "My Profile", href: "/profile" },
  ];

  // Array of button texts
  const buttonTexts = [
    "Can't Log in?",
    "Account Hacked?",
    "Cancel premium",
    "Privacy Concerns?",
    "Regarding Templates?",
    "Regarding Greenscore?",
    "Found a bug?",
    "Payment Problems?",
    "Share Feedback?",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar links={links} />
      <div className="flex-grow bg-black text-white flex flex-col items-center p-6">
        {/* Help Section */}
        <div className="flex items-center space-x-4 mb-8 mt-5">
          <div className="text-lg font-semibold whitespace-nowrap">
            How can we help?
          </div>
          <div className="relative w-full max-w-xs">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 py-2 bg-gray-100 rounded-sm border border-gray-300 placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* 3x3 Buttons Grid */}
        <div className="grid grid-cols-3 gap-2 w-full max-w-4xl mt-10 px-44">
          {buttonTexts.map((text, index) => (
            <button
              key={index}
              className="bg-gray-800 text-white h-44 w-44 rounded-lg hover:bg-gray-700 transition"
            >
              {text}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center mt-16 p-6 bg-black mb-10">
          <h2 className="text-2xl font-bold mb-2">Need more help?</h2>
          <p className="text-center mb-4">
            Visit our Trekato Community to get answers from expert users
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
            Search or ask in Community
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;
