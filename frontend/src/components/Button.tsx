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
export const Button = ({
  size = "medium",
  backgroundColor = "bg-blue-500",
  label,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };

  return (
    <button
      type="button"
      className={`${backgroundColor} text-white font-semibold rounded ${sizeClasses[size]}`}
      {...props}
    >
      {label}
    </button>
  );
};
