import { useState } from "react";
// Import your components here
import { ThemeToggleButton } from "../components/ThemeToggleButton";
// import UserInfo from './UserInfo';
// import RoomsSection from './RoomsSection';
// import UsersSection from './UsersSection';
// import EventsSection from './EventsSection';
import { Statistics } from "../components/Statistics";
import { RecentActivities } from "../components/RecentActivities";

export const DashboardPage = () => {
  const [theme, setTheme] = useState<string>("light");
  // const [section, setSection] = useState("users"); // Default section

  const handleLogout = () => {
    // Add your logout functionality here
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
      <div className="top-bar flex justify-between items-center p-4 ">
        <div className="user-info flex items-center space-x-4">
          <span>Welcome, User Name</span>
          <button onClick={handleLogout} className="btn btn-red">
            Log Out
          </button>
        </div>
        <ThemeToggleButton theme={theme} setTheme={setTheme} />
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
          <div className="statistics flex space-x-4">
            {/* Replace the placeholders below with your actual components */}
            <Statistics title="Current Rooms in Use" value={42} />
            <Statistics title="Events Occurred" value={122} />
            <Statistics title="Number of Users" value={61} />
          </div>
          <RecentActivities activities={[]} />
        </div>
      </div>
    </div>
  );
};
