import { useState } from "react";
import { ThemeToggleButton } from "../components/ThemeToggleButton";
// import UserInfo from './UserInfo';
// import RoomsSection from './RoomsSection';
// import UsersSection from './UsersSection';
// import EventsSection from './EventsSection';
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const DashboardPage = () => {
  const [theme, setTheme] = useState<string>("dark");
  const navigate = useNavigate();
  // const [section, setSection] = useState("users"); // Default section

  const handleLogout = () => {
    navigate("/login");
  };

  // const handleSectionChange = (newSection) => {
  //   setSection(newSection);
  // };

  interface ThemeColors {
    [key: string]: string;
    light: string;
    dark: string;
  }

  const themeColors: ThemeColors = {
    light: "bg-white text-black",
    dark: "bg-gray-900 text-white",
  };

  const color = themeColors[theme];

  return (
    <div
      className={`relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${color}`}
    >
      <div className="mb-12">
        <div className="absolute top-4 left-4 flex items-center space-x-4">
          <h1 className="text-2xl font-semibold">EASYROOM</h1>
          <span>Welcome, User</span>
        </div>
        <div className="absolute top-4 right-4 flex items-center space-x-4">
          <button onClick={handleLogout}>Log Out</button>
          <ThemeToggleButton theme={theme} setTheme={setTheme} />
        </div>
      </div>

      <div className="dashboard-body flex">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
