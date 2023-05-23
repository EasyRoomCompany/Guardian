import { Button } from "../components/Button";

export const Events = () => {
  const buttons = [
    { label: "Event Info", route: "eventinfo" },
    { label: "Create Event", route: "createevent" },
    { label: "Update Event", route: "updateevent" },
    { label: "Delete Event", route: "deleteevent" },
    { label: "List Events", route: "listevents" },
    { label: "Search Event", route: "searchevent" },
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
