import React from 'react'
import GoogleButton from '../components/GoogleButton'
import Button from '../components/Button'
import FormLayout from '../components/FormLayout'
import Divider from '../components/Divider'
import FormInput from '../components/FormInput'
import FooterLink from '../components/FooterLink'

const LoginPage: React.FC = () => {
  return (
    <FormLayout>
          <div className='w-full max-w-sm'>
            <h1 className='text-black text-xl font-semibold mb-2 text-center'>Log in to your account</h1>
            <p className="text-gray-500 mb-6 text-center">Welcome back to JiveJungle</p>

            <GoogleButton />
            <Divider />

            <FormInput id='email' label='Email or Username*' placeholder='Enter your email' type='email' />
            <FormInput id='password' label='Password*' placeholder='Enter your password' type='password' />

          <Button text='Sign in' />

          <FooterLink question="Don't have an account?" linkText='Create account' linkHref='/signup' />
          </div>
          
        </FormLayout>
  )
}

export default LoginPage
