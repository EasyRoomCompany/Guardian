import { useEffect, useState } from "react";
import { Statistics } from "../components/Statistics";
import { RecentActivities } from "../components/RecentActivities";
import axios from "axios";

export const Home = () => {
  const [roomsInUse, setRoomsInUse] = useState(0);
  const [eventsOccurred, setEventsOccurred] = useState(0);
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/statistics");
      const { roomsInUse, eventsOccurred, numberOfUsers, recentActivities } =
        response.data;
      setRoomsInUse(roomsInUse);
      setEventsOccurred(eventsOccurred);
      setNumberOfUsers(numberOfUsers);
      setActivities(recentActivities);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="dashboard-content flex-grow p-4">
      <div className="statistics flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 my-4">
        <Statistics title="Current Rooms in Use" value={roomsInUse} />
        <Statistics title="Events Occurred" value={eventsOccurred} />
        <Statistics title="Number of Users" value={numberOfUsers} />
      </div>
      <div className="my-4">
        <RecentActivities activities={activities} />
      </div>
    </div>
  );
};
