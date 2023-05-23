import React from "react";

interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  size = "medium",
  backgroundColor = "orange",
  label,
  ...props
}) => {
  const sizeClasses = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };

  return (
    <button
      type="button"
      className={`text-white font-semibold rounded ${sizeClasses[size]} bg-${backgroundColor}-500 w-48 h-full`}
      {...props}
    >
      {label}
    </button>
  );
};
