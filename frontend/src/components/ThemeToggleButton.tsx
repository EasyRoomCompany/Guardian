import React, { useState } from "react";

interface ThemeToggleButtonProps {
  /**
   * Current theme of the application
   */
  theme: string;
  /**
   * Function to set the current theme
   */
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  /**
   * State of the button
   */
  stateBtn?: boolean;
  /**
   * Click handler for the button
   */
  onClick?: (isActive: boolean) => void;
}

/**
 * A button component that allows users to toggle between light and dark themes.
 */
export const ThemeToggleButton = ({
  theme,
  stateBtn,
  onClick,
  setTheme
}: ThemeToggleButtonProps) => {
  const [clicked, setClicked] = useState(stateBtn);

  const handleClick = () => {
    setClicked(!clicked);
    if (onClick) {
      onClick(!clicked);
    }
    setThemeClick();
  };

  const setThemeClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 bg-orange-500 text-white rounded-lg focus:outline-none"
    >
      {clicked ? "Dark Mode" : "Light Mode"}
    </button>
  );
};
