import React, { useState } from "react";
import { Input } from "../components/Input";
import { ThemeToggleButton } from "../components/ThemeToggleButton";
import { useNavigate } from "react-router-dom";

export const RegisterPage: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");
  const navigate = useNavigate();

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    // Here, you would usually register the user

    // If the registration is successful, navigate to the Dashboard page
    navigate("/dashboard");
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
            Create your account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={handleRegister}
        >
          <Input type="text" label="First Name" id="firstName" />
          <Input type="text" label="Last Name" id="lastName" />
          <Input type="email" label="Email Address" id="email" />
          <Input type="password" label="Password" id="password" />
          <Input
            type="password"
            label="Confirm Password"
            id="confirmPassword"
          />
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
