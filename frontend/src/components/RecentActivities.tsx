interface Activity {
  id: number;
  description: string;
  timestamp: Date;
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
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="mb-2">
            <p className="text-sm">{activity.description}</p>
            <p className="text-xs text-gray-900">
              {activity.timestamp.toLocaleTimeString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
