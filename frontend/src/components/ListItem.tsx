interface Activity {
  user: string;
  room: string;
  event: string;
  date: Date;
}

interface ListItemProps {
  activity: Activity;
}

export const ListItem = ({ activity }: ListItemProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
        <h3 className="text-lg font-semibold">{activity.user}</h3>
        <p className="text-gray-500">{activity.room}</p>
        <p className="text-gray-500">{activity.event}</p>
      </div>
      <p className="text-sm text-gray-500 mt-2 lg:mt-0">
        {activity.date.toLocaleString()}
      </p>
    </div>
  );
};
