import { FaUser, FaDoorOpen, FaCalendar, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", icon: <FaHome size="2em" />, route: "home" },
  { name: "Users", icon: <FaUser size="2em" />, route: "users" },
  { name: "Rooms", icon: <FaDoorOpen size="2em" />, route: "rooms" },
  { name: "Events", icon: <FaCalendar size="2em" />, route: "events" },
];

export const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (route: string) => {
    navigate(route);
  };

  return (
    <nav className="h-screen w-16 md:w-64 flex flex-col items-center py-4">
      {navigation.map((item) => (
        <button
          key={item.name}
          className="flex items-center justify-center w-full h-16 text-center md:text-left md:hover:border-orange-500 p-4"
          onClick={() => handleClick(item.route)}
        >
          <span className="md:mr-4">{item.icon}</span>
          <span className="hidden md:block">{item.name}</span>
        </button>
      ))}
    </nav>
  );
};
