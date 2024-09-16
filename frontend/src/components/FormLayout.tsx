import React from 'react';

interface FormLayoutProps {
    children: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center p-6 lg:p-12">
        { children }
      </div>

      <div className="w-full lg:w-1/2 h-full bg-black flex items-center justify-center">
        <img src="https://picsum.photos/800/600" alt="Placeholder" className='w-full h-full object-cover'/>
      </div>
    </div>
  );
}

export default FormLayout
