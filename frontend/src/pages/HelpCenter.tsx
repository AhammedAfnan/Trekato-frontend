import React from "react";
import Navbar from "../components/Navbar";

const HelpCenter: React.FC = () => {
  const links = [
    { text: "Home", href: "/" },
    { text: "Help Center", href: "/help-center" },
    { text: "My Profile", href: "/profile" },
  ];

  return (
    <div className="bg-blue-950 min-h-screen text-white">
      {/* Navbar */}
      <Navbar links={links} />

      <div className="flex flex-col items-center pt-16">
        {/* Search Bar */}
        <div className="relative w-full max-w-2xl mb-6">
          <div className="relative flex items-center">
            {/* Search Logo */}
            <img
              src="/images/Searchlogo.png"
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
            {/* Input Field */}
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 py-2 bg-gray-100 rounded-sm border border-gray-300 placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-gray-700 p-6 rounded-lg w-full max-w-2xl mx-4 relative">
          {/* Text Section */}
          <div className="flex flex-col items-start mb-6">
            <h2 className="text-lg font-semibold mb-2">
              Manage your Trekato account easily
            </h2>
            <p className="mb-4">
              Your info, payment, and privacy all in one place.
            </p>
          </div>

          {/* Button Section */}
          <button className="bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md absolute right-6 bottom-1/2 transform translate-y-1/2 whitespace-nowrap">
            Go to your Trekato App
          </button>
        </div>

        {/* Contact Us Section */}
        <div className="bg-gray-700 p-6 rounded-lg w-full max-w-2xl mx-4 mt-6 min-h-fit">
          <h1 className="text-xl font-bold mb-4">Contact Us</h1>
          <p className="mb-4">
            Can't find the solution you're looking for? Here's how to get help
            from our experts.
          </p>
          <p className="mb-4">
            Note: We currently don't offer support by phone.
          </p>
          <h1 className="text-xl font-bold mb-4">Send us a message</h1>
          <p className="mb-4">
            Message us and one of our customer service experts will help you
            out.
          </p>
          <h1 className="text-xl font-bold mb-4">The Trekato Community</h1>
          <p className="mb-4">
            Post or search on our Trekato Community, where listeners help out
            and share ideas and solutions.
          </p>
          <p>
            Tip: The most knowledgeable Community members are called Stars. You
            can also tweet them @AskSpotifyStars.
          </p>
        </div>

        {/* Related Articles Section */}
        <div className="bg-gray-700 p-6 rounded-lg w-full max-w-2xl mx-4 mt-6">
          <h1 className="text-xl font-bold mb-4">Related Articles</h1>
          <div className="space-y-2">
            <a href="#" className="text-green-400 underline">
              Cancel Premium plans
            </a>
            <br />
            <a href="#" className="text-green-400 underline">
              Username and display name
            </a>
            <br />
            <a href="#" className="text-green-400 underline">
              Can't log in
            </a>
            <br />
            <a href="#" className="text-green-400 underline">
              Think your account's been hacked?
            </a>
            <br />
            <a href="#" className="text-green-400 underline">
              Charged too much
            </a>
            <br />
            <a href="#" className="text-green-400 underline">
              Refund policy
            </a>
            <br />
            <a href="#" className="text-green-400 underline">
              How to get started?
            </a>
          </div>
        </div>

        <div className="bg-black text-white p-6 w-full max-w-2xl mx-4 mt-6 rounded-lg flex flex-col">
          <h1 className="text-xl font-bold mb-4">Was this article helpful?</h1>
          <div className="flex space-x-4">
            <button className="text-white px-4 py-2 rounded-full border border-blue-800">
              Yes
            </button>
            <button className="text-white px-4 py-2 rounded-full border border-blue-800">
              No
            </button>
          </div>
        </div>

        <div className="p-6 rounded-lg w-full max-w-2xl mx-4 mt-6 flex flex-col items-center">
          <h1 className="text-xl font-bold mb-4">Need more help?</h1>
          <p className="mb-4 text-center">
            Visit our help community to get answers from expert fans!
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Search or Ask in Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
