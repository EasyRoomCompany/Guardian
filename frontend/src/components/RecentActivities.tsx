import { List } from "./List";

interface Activity {
  user: string;
  room: string;
  event: string;
  date: Date;
}

interface RecentActivitiesProps {
  activities: Activity[];
}

export const RecentActivities = ({ activities }: RecentActivitiesProps) => {
  return (
    <div className="recent-activities-card p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl text-gray-900 font-bold mb-4">
        Recent Activities
      </h2>
      <List activities={activities} />
    </div>
  );
};
