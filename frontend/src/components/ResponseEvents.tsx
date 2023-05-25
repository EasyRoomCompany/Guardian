import { FaTimes } from "react-icons/fa";

interface ResponseEventsProps {
  message: string | null;
  data: any[] | null;
  show: boolean;
  onClose: () => void;
}

export const ResponseEvents = ({
  message,
  data,
  show,
  onClose,
}: ResponseEventsProps) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const formatTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(":");
    const endHours = (parseInt(hours, 10) + 1).toString().padStart(2, "0");
    return `${hours}:${minutes} - ${endHours}:${minutes}`;
  };

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
                <th className="text-center">Event Category</th>
                <th className="text-center">Date</th>
                <th className="text-center">Time</th>
                <th className="text-center">Room ID</th>
                <th className="text-center">User ID</th>
                <th className="text-center">Access Key</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="text-center">{row.id}</td>
                  <td className="text-center">{row.event_category}</td>
                  <td className="text-center">{formatDate(row.date)}</td>
                  <td className="text-center">{formatTime(row.start_time)}</td>
                  <td className="text-center">{row.rooms_id}</td>
                  <td className="text-center">{row.users_id}</td>
                  <td className="text-center">{row.access_key}</td>
                  <td className="text-center">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
