import React, { ReactElement } from "react";

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
   * Icon to show on thop of the label
   */
  icons?: ReactElement[];
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
  icons,
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
      className={`text-white font-semibold rounded ${sizeClasses[size]} bg-${backgroundColor}-500 w-48 h-full flex flex-col items-center justify-center`}
      {...props}
    >
      <div className="flex items-center">
        {icons &&
          icons.map((icon, index) => (
            <div key={index} className="mx-1">
              {icon}
            </div>
          ))}
      </div>
      <div>{label}</div>
    </button>
  );
};
