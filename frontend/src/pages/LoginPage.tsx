import React, { useState } from "react";
import { Input } from "../components/Input";
import { ThemeToggleButton } from "../components/ThemeToggleButton";
import { useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const [theme, setTheme] = useState<string>("dark");
  const navigate = useNavigate();

  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();
    // Here, you would usually authenticate the user

    // If the authentication is successful, navigate to the Dashboard page
    navigate("/dashboard");
  };

  const handleSignUp = () => {
    // Navigate to the Register page
    navigate("/register");
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
            Sign in to your account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSignIn}
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                className="appearance-none rounded relative block w-full px-3 py-2 mb-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className={`ml-2 block text-sm ${themeColors[theme]}`}
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-orange-500 hover:text-orange-400"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Sign In
            </button>
            <button
              onClick={handleSignUp}
              className={`mt-4 w-full p-2 rounded-lg text-sm focus:outline-none border border-orange-500 ${themeColors[theme]}`}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
