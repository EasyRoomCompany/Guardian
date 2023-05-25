import moment, { Moment } from "moment";

export interface Activity {
  user: User;
  room: Room;
  event_category: string;
  date: Date;
  start_time: string,
  end_time: string,
}

interface ListItemProps {
  activity: Activity;
}

interface User {
  id: number,
  username: string,
}

interface Room {
  id: number,
  name: string,
}

export const ListItem = ({ activity }: ListItemProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
        <h3 className="text-lg text-gray-900 font-semibold">User: <span className="text-sky-600">{activity.user.username}</span></h3>
        <p className="text-gray-500">Sala: <span className="text-green-600">{activity.room.name}</span></p>
        <p className="text-gray-500">Evento: <span className="text-sky-600">{activity.event_category}</span></p>
      </div>
      <p className="text-sm text-gray-500 mt-2 lg:mt-0">
        Dia: <span className="text-yellow-600">{moment(activity.date).format("DD/MM/YYYY")}</span> - <span className="text-green-800">{activity.start_time}</span> | <span className="text-red-800">{activity.end_time} </span>
      </p>
    </div>
  );
};
