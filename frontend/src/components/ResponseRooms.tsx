import { FaTimes } from "react-icons/fa";

interface ResponseProps {
  message: string | null;
  data: any[] | null;
  show: boolean;
  onClose: () => void;
}

export const Response = ({ message, data, show, onClose }: ResponseProps) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-11/12 md:w-1/2 bg-orange-500 p-5 rounded-lg space-y-4">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-black"
        >
          <FaTimes size="2em" />
        </button>
        {message && <p className="text-white">{message}</p>}
        {data && data.length > 0 && (
          <table className="table-auto w-full">
            <thead>
              <tr className="text-gray-900">
                <th className="text-center">ID</th>
                <th className="text-center">Name</th>
                <th className="text-center">Description</th>
                <th className="text-center">Capacity</th>
                <th className="text-center">Price per hour</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="text-center">{row.id}</td>
                  <td className="text-center">{row.name}</td>
                  <td className="text-center">{row.description}</td>
                  <td className="text-center">{row.capacity}</td>
                  <td className="text-center">{row.price_hour}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
