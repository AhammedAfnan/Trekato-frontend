import React from 'react'
import Navbar from '../components/Navbar';

const Home:React.FC = () => {
    const links = [
        { text: "Home", href: "/" },
        { text: "Help Center", href: "/help-center" },
        { text: "My Profile", href: "/profile" },
      ];

      const squares = Array(3).fill(null);

  return (
    <div className="bg-black min-h-screen text-white">
        <Navbar links={links} />
        <div className="bg-white mx-auto my-10 p-6 rounded-md" style={{ height: '500px', width: '1300px' }}>
        {/* Content inside the div */}
        <p className="text-black"></p>
      </div>

      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Straight from Trekato HQ</h1>
      </div>

      {/* Squares Section */}
      <div className="flex justify-center mt-8 space-x-52">
        {squares.map((_, index) => (
          <div key={index} className="bg-white h-52 w-72"></div>
        ))}
      </div>
      <div className="border-t border-gray-500 w-full max-w-7xl mx-auto my-6"></div>

      <div className="text-center">
        <h2 className="text-xl font-semibold">Next Section Content</h2>
        {/* Add the next section's content here */}
      </div>
    </div>
  )
}

export default Home;
