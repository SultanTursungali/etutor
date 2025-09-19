"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import SocialAuthButtons from "./SocialAuthButtons";

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!agreed) {
      alert("You must agree to the Terms of Service and Privacy Policy.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const formData = {
      fullName,
      email,
      password,
    };

    console.log("Registration data submitted:", formData);
    alert("Check the browser console (F12) to see the submitted data!");
  };

  return (
    <form onSubmit={handleSubmit} className="form space-y-6">
      <div className="form-field">
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="Enter your full name"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          value={fullName} // 5. Привязываем значение к состоянию
          onChange={(e) => setFullName(e.target.value)} // 6. Обновляем состояние при вводе
          required // Делаем поле обязательным
        />
      </div>
      <div className="form-field">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>
      <div className="form-field">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Confirm Password
        </label>
        <div className="field-wrapper relative">
          <input
            type={isConfirmPasswordVisible ? "text" : "password"}
            placeholder="Confirm Password"
            id="confirmPassword"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() =>
              setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {isConfirmPasswordVisible ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
      </div>

      <label className="flex items-start space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox rounded text-orange focus:ring-orange/50 mt-1"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <span className="text-sm text-secondary">
          I agree to the{" "}
          <Link href="#" className="text-orange hover:underline">
            Terms of Service
          </Link>{" "}
          &{" "}
          <Link href="#" className="text-orange hover:underline">
            Privacy Policy.
          </Link>
        </span>
      </label>

      <button type="submit" className="button orange-btn w-full !py-4">
        Create Account
      </button>

      <SocialAuthButtons />
    </form>
  );
};

export default SignUpForm;
