import React from 'react'

const LoginPage: React.FC = () => {
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
        <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center p-6 flex-1">
          <div className='w-full max-w-sm'>
            <h1 className='text-black text-xl font-semibold mb-2 text-center'>Log in to your account</h1>
            <p className="text-gray-500 mb-6 text-center">Welcome back to JiveJungle</p>

            <button className="w-full flex items-center justify-center py-2 border rounded-full mb-4">
            <img src="/images/Google__G__logo.svg" alt="Google logo" className="mr-2" />
              <span>Login with Google</span>
            </button>

            <div className="flex items-center mb-4">
              <div className="flex-grow border-t border-gray-300"></div>
                <span className='mx-4 text-gray-500'>or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <label htmlFor="email" className='block text-black font-semibold mb-2'>
                Email or Username*
              </label>
              <input 
              type="email"
              id='email'
              placeholder='Enter your email'
              className='w-full border rounded-full p-2 mb-4'
            />

            <label htmlFor="password" className='block text-black font-semibold mb-2'>
              Password*
            </label>
            <input 
            type="password"
            id='password'
            placeholder='Enter your password'
            className='w-full border rounded-full p-2 mb-4'
          />

          <button className='w-full bg-black text-white py-2 rounded-full'>
            Sign in
          </button>

          <p className='text-black-500 font-semibold text-sm mt-4'>
            Don't have an account? <a href="/signup" className='text-red-500 font-semibold'>Create account</a>
          </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-black flex items-center justify-center flex-1">
            <img 
            src="https://picsum.photos/800/600" 
            alt="Placeholder"
            className='w-full h-auto object-cover' />
        </div>
    </div>
  )
}

export default LoginPage
