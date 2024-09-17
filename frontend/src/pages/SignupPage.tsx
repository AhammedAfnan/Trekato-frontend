import React from "react";
import GoogleButton from "../components/GoogleButton";
import Button from "../components/Button";
import FormLayout from "../components/FormLayout";
import Divider from "../components/Divider";
import FormInput from "../components/FormInput";
import FooterLink from "../components/FooterLink";

const SignupPage: React.FC = () => {
  return (
    <FormLayout>
      <div className="w-full max-w-md">
        <h1 className="text-black text-2xl font-semibold mb-4 text-center">
          Create your Trekato account
        </h1>
        <p className="text-gray-500 mb-6 text-center">Let's get started</p>

        <GoogleButton />
        <Divider />

        <FormInput id="name" label="Name*" placeholder="Enter your name" />
        <FormInput
          id="email"
          label="Email*"
          placeholder="Enter your email"
          type="email"
        />

        <div className="mb-6 flex items-center space-x-2">
          <label htmlFor="otp" className="text-black font-semibold">
            OTP*
          </label>
          <div className="flex space-x-2">
            {Array(4)
              .fill("")
              .map((_, index) => (
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

        <FormInput
          id="password"
          label="Password*"
          placeholder="Enter your password"
          type="password"
        />
        <FormInput
          id="confirmPassword"
          label="Confirm Password*"
          placeholder="Confirm your password"
          type="password"
        />

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="agree"
            className="w-5 h-5 border-2 border-black rounded-sm checked:bg-black checked:border-black"
          />
          <label htmlFor="agree" className="ml-2 text-black">
            I agree to all{" "}
            <span className="text-red-500">Terms and privacy policy</span>
          </label>
        </div>

        <Button text="Create account" />

        <FooterLink
          question="Already have an account?"
          linkText="Log in"
          linkHref="/login"
        />
      </div>
    </FormLayout>
  );
};

export default SignupPage;
