"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import SocialAuthButtons from "./SocialAuthButtons";

const SignInForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <form action="#" className="form space-y-6">
      <div className="form-field">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <div className="field-wrapper relative">
          <input
            type="email"
            placeholder="Email address"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>
      </div>

      <div className="form-field">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <div className="field-wrapper relative">
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Enter Password"
            id="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox rounded text-orange focus:ring-orange/50"
          />
          <span className="text-sm text-secondary">Remember Me</span>
        </label>
        <Link href="#" className="text-sm text-orange hover:underline">
          Forgot Password?
        </Link>
      </div>

      <button type="submit" className="button orange-btn w-full !py-4">
        Sign In
      </button>

      <SocialAuthButtons />
    </form>
  );
};

export default SignInForm;
