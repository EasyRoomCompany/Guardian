import { useState } from "react";
import { ThemeToggleButton } from "../components/ThemeToggleButton";
// import UserInfo from './UserInfo';
// import RoomsSection from './RoomsSection';
// import UsersSection from './UsersSection';
// import EventsSection from './EventsSection';
import { Statistics } from "../components/Statistics";
import { RecentActivities } from "../components/RecentActivities";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const DashboardPage = () => {
  const [theme, setTheme] = useState<string>("light");
  const navigate = useNavigate();
  // const [section, setSection] = useState("users"); // Default section

  const handleLogout = () => {
    navigate("/login");
  };

  // const handleSectionChange = (newSection) => {
  //   setSection(newSection);
  // };

  // Fictitious data for RecentActivities component
  const activities = [
    {
      user: "John Doe",
      room: "Conference Room",
      event: "Scheduled Meeting",
      date: new Date(2023, 4, 20, 10, 30),
    },
    {
      user: "Jane Smith",
      room: "Break Room",
      event: "Coffee Break",
      date: new Date(2023, 4, 20, 11, 0),
    },
    {
      user: "Bob Johnson",
      room: "Office #2",
      event: "Daily Work",
      date: new Date(2023, 4, 20, 9, 0),
    },
    // ... more activities ...
  ];

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
    <div className={`dashboard ${color}`}>
      <div className="top-bar flex justify-between items-center px-4 py-2">
        <div className="user-info flex items-center space-x-4">
          <h1 className="text-2xl font-semibold">EASYROOM</h1>
          <span>Welcome, User</span>
        </div>
        <div className="controls flex items-center space-x-4">
          <button onClick={handleLogout}>Log Out</button>
          <ThemeToggleButton theme={theme} setTheme={setTheme} />
        </div>
      </div>

      <div className="dashboard-body flex">
        <Navbar />
        <div className="dashboard-content flex-grow p-4">
          <div className="statistics flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 my-4">
            <Statistics title="Current Rooms in Use" value={42} />
            <Statistics title="Events Occurred" value={122} />
            <Statistics title="Number of Users" value={61} />
          </div>
          <div className="my-4">
            <RecentActivities activities={activities} />
          </div>
        </div>
      </div>
    </div>
  );
};
