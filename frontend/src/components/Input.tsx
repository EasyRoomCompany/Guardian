interface InputProps {
  /**
   * The id of the input
   */
  id: string;
  /**
   * The Tailwind classes to style the input
   */
  className?: string;
  /**
   * The type of input to render
   */
  type?: string;
  /**
   * Render a label element before the input
   */
  label?: string;
  /**
   * The placeholder text for the input
   */
  placeholder?: string;
}

/**
 * UI component for rendering a standard input field of any type based on provided properties.
 */
export const Input = ({
  id,
  className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
  type,
  label,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        className={className}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
