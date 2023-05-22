import { useState } from "react";
import { ThemeToggleButton } from "../components/ThemeToggleButton";
// import UserInfo from './UserInfo';
// import RoomsSection from './RoomsSection';
// import UsersSection from './UsersSection';
// import EventsSection from './EventsSection';
import { Statistics } from "../components/Statistics";
import { RecentActivities } from "../components/RecentActivities";
import { useNavigate } from "react-router-dom";

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
          <span>Welcome, User Name</span>
        </div>
        <div className="controls flex items-center space-x-4">
          <button onClick={handleLogout}>Log Out</button>
          <ThemeToggleButton theme={theme} setTheme={setTheme} />
        </div>
      </div>

      <div className="dashboard-body flex">
        <nav className="sidebar w-64 text-white p-4">
          {/* <button
            onClick={() => handleSectionChange("users")}
            className="btn btn-blue"
          >
            Users
          </button>
          */}
          {/* <button
            onClick={() => handleSectionChange("rooms")}
            className="btn btn-blue"
          >
            Rooms
          </button>
          */}
          {/* <button
            onClick={() => handleSectionChange("events")}
            className="btn btn-blue"
          >
            Events
          </button>
          */}
        </nav>
        <div className="dashboard-content flex-grow p-4">
          {/* {section === "users" && <UsersSection />} */}
          {/* {section === "rooms" && <RoomsSection />} */}
          {/* {section === "events" && <EventsSection />} */}
          <div className="statistics flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 my-4">
            {/* Replace the placeholders below with your actual components */}
            <Statistics title="Current Rooms in Use" value={42} />
            <Statistics title="Events Occurred" value={122} />
            <Statistics title="Number of Users" value={61} />
          </div>
          <div className="my-4">
            <RecentActivities activities={[]} />
          </div>
        </div>
      </div>
    </div>
  );
};
