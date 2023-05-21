interface InputProps {
  /**
   * The Tailwind classes to style the input
   */
  style?: string;
  /**
   * The type of input to render
   */
  type?: string;
  /**
   * The placeholder text for the input
   */
  placeholder?: string;
}

/**
 * UI component for rendering a standard input field of any type based on provided properties.
 */
export const Input = ({
  style = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
  type,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <input className={style} type={type} placeholder={placeholder} {...props} />
  );
};
