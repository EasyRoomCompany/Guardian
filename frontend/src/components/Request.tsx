import { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface RequestProps {
  title: string;
  inputs: { label: string; name: string; type: string }[];
  onSubmit: (data: { [key: string]: string }) => void;
  show: boolean;
  onClose: () => void;
}

export const Request = ({
  title,
  inputs,
  onSubmit,
  show,
  onClose,
}: RequestProps) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className="relative w-11/12 md:w-1/2 bg-orange-500 p-5 rounded-lg space-y-4"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-black"
        >
          <FaTimes size="2em" />
        </button>
        <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
        {inputs.map((input) => (
          <div key={input.name} className="flex flex-col">
            <label htmlFor={input.name} className="mb-2 text-white">
              {input.label}
            </label>
            <input
              type={input.type}
              id={input.name}
              name={input.name}
              className="p-2 border rounded text-gray-900"
              required
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="p-2 bg-white text-orange-500 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};
