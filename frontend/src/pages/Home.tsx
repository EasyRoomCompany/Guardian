import { Statistics } from "../components/Statistics";
import { RecentActivities } from "../components/RecentActivities";

export const Home = () => {
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
  return (
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
  );
};
