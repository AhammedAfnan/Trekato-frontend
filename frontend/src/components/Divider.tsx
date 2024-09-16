import React from "react";

const Divider: React.FC = () => {
  return (
    <div className="flex items-center mb-6">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-gray-500">or</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default Divider
