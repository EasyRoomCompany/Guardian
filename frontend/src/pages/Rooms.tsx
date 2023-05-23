import { Button } from "../components/Button";

export const Rooms = () => {
  const buttons = [
    { label: "Room Info", route: "roominfo" },
    { label: "Create Room", route: "createroom" },
    { label: "Update Room", route: "updateroom" },
    { label: "Delete Room", route: "deleteroom" },
    { label: "List Rooms", route: "listrooms" },
    { label: "Search Room", route: "searchroom" },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4 mt-8">
      {buttons.map((button) => (
        <div key={button.label}>
          <Button
            label={button.label}
            size="large"
            // onClick={() => buttonClickHandler(button.route)}
          />
        </div>
      ))}
    </div>
  );
};
