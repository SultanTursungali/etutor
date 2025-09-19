"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ id, label }: { id: string; label: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="form-field">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={isVisible ? "text" : "password"}
          id={id}
          placeholder={label}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
        />
        <button
          type="button"
          onClick={() => setIsVisible(!isVisible)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
};

const PasswordSettings = () => {
  return (
    <form action="#" className="form max-w-lg">
      <div className="space-y-6">
        <PasswordInput id="currentPassword" label="Current Password" />
        <PasswordInput id="newPassword" label="New Password" />
        <PasswordInput id="confirmPassword" label="Confirm Password" />
        <div>
          <button type="submit" className="button orange-btn">
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
};

export default PasswordSettings;
