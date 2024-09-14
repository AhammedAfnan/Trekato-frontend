import React from 'react';

const SignupPage: React.FC = () => {
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      {/* Form Container */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center p-6 lg:p-12">
        <div className='w-full max-w-md'>
          <h1 className='text-black text-2xl font-semibold mb-4 text-center'>Create your Trekato account</h1>
          <p className="text-gray-500 mb-6 text-center">Let's get started</p>

          <button className="w-full flex items-center justify-center py-2 border rounded-full mb-6">
            <img src="/images/Google__G__logo.svg" alt="Google logo" className='mr-2' />
            <span>Sign up with Google</span>
          </button>

          <div className="flex items-center mb-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className='mx-4 text-gray-500'>or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <label htmlFor="name" className='block text-black font-semibold mb-2'>
            Name*
          </label>
          <input 
            type="text"
            id='name'
            placeholder='Enter your name'
            className='w-full border rounded-full p-2 mb-4'
          />

          <label htmlFor="email" className='block text-black font-semibold mb-2'>
            Email*
          </label>
          <input 
            type="email"
            id='email'
            placeholder='Enter your email'
            className='w-full border rounded-full p-2 mb-4'
          />

          <div className="mb-6 flex items-center space-x-2">
            <label htmlFor="otp" className="text-black font-semibold">
              OTP*
            </label>
            <div className="flex space-x-2">
              {Array(4).fill('').map((_, index) => (
                <input
                  key={index}
                  type="text"
                  id={`otp${index}`}
                  maxLength={1}
                  className="w-12 h-12 border rounded-lg text-center text-2xl font-bold"
                  placeholder=""
                />
              ))}
            </div>
          </div>

          <label htmlFor="password" className="block text-black font-semibold mb-2">
            Password*
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full border rounded-full p-2 mb-4"
          />

          <label htmlFor="confirmPassword" className="block text-black font-semibold mb-2">
            Confirm Password*
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            className="w-full border rounded-full p-2 mb-4"
          />

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="agree"
              className="w-5 h-5 border-2 border-black rounded-sm checked:bg-black checked:border-black"
            />
            <label htmlFor="agree" className="ml-2 text-black">
              I agree to all <span className="text-red-500">Terms and privacy policy</span>
            </label>
          </div>

          <button className='w-full bg-black text-white py-2 rounded-full'>
            Create account
          </button>

          <p className='text-gray-500 text-sm mt-4'>
            Already have an account? <a href="/login" className='text-red-500'>Log in</a>
          </p>
        </div>
      </div>

      {/* Image Container */}
      <div className="w-full lg:w-1/2 bg-black flex items-center justify-center">
        <img 
          src="https://picsum.photos/800/600" 
          alt="Placeholder"
          className='w-full h-auto object-cover' />
      </div>
    </div>
  );
}

export default SignupPage;
