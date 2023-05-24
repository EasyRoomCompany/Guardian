import React, { useState } from "react";
import { Input } from "../components/Input";
import { ThemeToggleButton } from "../components/ThemeToggleButton";
import { useNavigate } from "react-router-dom";

export const ForgotPasswordPage: React.FC = () => {
  const [theme, setTheme] = useState<string>("dark");
  const navigate = useNavigate();

  const handlePasswordReset = (event: React.FormEvent) => {
    event.preventDefault();
    // Here, you would typically send a password reset email to the user

    // Navigate back to the Login page after the form is submitted
    navigate("/login");
  };

  interface ThemeColors {
    [key: string]: string;
    light: string;
    dark: string;
  }

  const themeColors: ThemeColors = {
    light: "bg-white text-black",
    dark: "bg-gray-900 text-white",
  };

  const color = themeColors[theme];

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${color}`}
    >
      <div className="absolute top-4 left-4">
        <h1 className="text-2xl font-semibold">EASYROOM</h1>
      </div>
      <div className="absolute top-4 right-4">
        <ThemeToggleButton theme={theme} setTheme={setTheme} />
      </div>

      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={handlePasswordReset}
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                className="appearance-none rounded relative block w-full px-3 py-2 mb-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
