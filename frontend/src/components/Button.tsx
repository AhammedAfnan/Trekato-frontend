import React from 'react';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
            { text }
        </button>
    )
}

export default Button;