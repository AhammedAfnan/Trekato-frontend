import React from "react";

const Footer = () => {
  const links = [
    "Legal",
    "Safety & Privacy Center",
    "Privacy Policy",
    "Cookies",
    "About Ads",
    "Accessibility",
  ];

  return (
    <footer className="bg-black text-white py-4 px-6 flex items-center justify-between">
      {/* Links */}
      <div className="flex space-x-4">
        {links.map((link, index) => (
          <a key={index} href="#" className="text-sm hover:underline">
            {link}
          </a>
        ))}
        <span className="text-sm">© 2024 Trekato Pvt. Ltd.</span>
      </div>

      {/* Language Option (English) */}
      <div className="ml-auto text-sm">
        <span>(English)</span>
      </div>
    </footer>
  );
};

export default Footer;
