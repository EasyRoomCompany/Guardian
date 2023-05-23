import { FaUser, FaDoorOpen, FaCalendar, FaHome } from "react-icons/fa";

const navigation = [
  { name: "Home", icon: <FaHome size="2em" />, href: "#" },
  { name: "Users", icon: <FaUser size="2em" />, href: "#" },
  { name: "Rooms", icon: <FaDoorOpen size="2em" />, href: "#" },
  { name: "Events", icon: <FaCalendar size="2em" />, href: "#" },
];

export const Navbar = () => {
  return (
    <nav className="h-screen w-16 md:w-64 flex flex-col items-center py-4">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="flex items-center justify-center w-full h-16 text-center md:text-left md:hover:border-orange-500 p-4"
        >
          <span className="md:mr-4">{item.icon}</span>
          <span className="hidden md:block">{item.name}</span>
        </a>
      ))}
    </nav>
  );
};
