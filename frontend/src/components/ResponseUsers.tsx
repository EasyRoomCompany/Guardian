import { FaTimes } from "react-icons/fa";

interface ResponseUsersProps {
  message: string | null;
  data: any[] | null;
  show: boolean;
  onClose: () => void;
}

export const ResponseUsers = ({
  message,
  data,
  show,
  onClose,
}: ResponseUsersProps) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-11/12 md:w-1/2 bg-orange-500 p-5 rounded-lg space-y-4 overflow-auto max-h-screen">
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
                <th className="text-center">Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index}>
                  <td className="text-center">{user.id}</td>
                  <td className="text-center">{user.name}</td>
                  <td className="text-center">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
