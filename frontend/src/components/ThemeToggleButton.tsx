interface ThemeToggleButtonProps {
  /**
   * Current theme of the application
   */
  theme: string;
  /**
   * Function to set the current theme
   */
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * A button component that allows users to toggle between light and dark themes.
 */
export const ThemeToggleButton = ({
  theme,
  setTheme,
}: ThemeToggleButtonProps) => {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 bg-orange-500 text-white rounded-lg focus:outline-none"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};
