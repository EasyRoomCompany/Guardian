import React, { useState } from "react";
import { Input } from "../components/Input";
import { ThemeToggleButton } from "../components/ThemeToggleButton"; // Import the theme toggle button

export const LoginPage: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");

  interface ThemeColors {
    [key: string]: string; // This is an index signature
    light: string;
    dark: string;
  }

  const themeColors: ThemeColors = {
    light: "bg-white text-black",
    dark: "bg-gray-900 text-white",
  };

  // Then you can use a string as a key to get values from themeColors
  const color = themeColors[theme]; // theme is a string

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${color}`}
    >
      <div className="absolute top-4 right-4">
        <ThemeToggleButton theme={theme} setTheme={setTheme} />
      </div>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Input
                type="email"
                placeholder="Email address"
                style="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                style="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
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
              className={`mt-4 w-full p-2 rounded-lg focus:outline-none border border-orange-500 ${themeColors[theme]}`}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
