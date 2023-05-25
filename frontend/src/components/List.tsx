import { ListItem } from "./ListItem";
import { Activity } from "./ListItem";

interface ListProps {
  activities: Activity[];
}

export const List = ({ activities }: ListProps) => {
  return (
    <ul className="divide-y divide-gray-200">
      {activities.map((activity, index) => (
        <li key={index} className="py-4">
          <ListItem activity={activity} />
        </li>
      ))}
    </ul>
  );
};
