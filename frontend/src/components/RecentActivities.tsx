import { List } from "./List";
import { Activity } from "./ListItem";

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
