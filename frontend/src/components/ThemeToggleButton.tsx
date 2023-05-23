import { FaLightbulb } from "react-icons/fa";

interface ThemeToggleButtonProps {
  /**
   * Current theme of the application
   */
  theme: string;
  /**
   * Function to set the current theme
   */
  setTheme: (value: string) => void;
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
  setTheme,
}: ThemeToggleButtonProps) => {
  const isDark = theme === "dark";

  const handleClick = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={handleClick}
      className="focus:outline-none bg-transparent border-none"
      aria-label="Toggle Theme"
    >
      <FaLightbulb
        className={`text-orange-500 ${isDark ? "fill-current" : ""}`}
        size={24}
      />
    </button>
  );
};
