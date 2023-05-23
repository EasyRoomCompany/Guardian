import { useState } from "react";
import { Button } from "../components/Button";
import { Request } from "./Request";

const buttons = [
  { label: "Event Info", route: "eventinfo" },
  { label: "Create Event", route: "createevent" },
  { label: "Update Event", route: "updateevent" },
  { label: "Delete Event", route: "deleteevent" },
  { label: "List Events", route: "listevents" },
  { label: "Search Event", route: "searchevent" },
];

type Route =
  | "eventinfo"
  | "createevent"
  | "updateevent"
  | "deleteevent"
  | "listevents"
  | "searchevent";

type InputsForRoute = {
  [key in Route]?: { label: string; name: string; type: string }[];
};

const inputsForRoute: InputsForRoute = {
  eventinfo: [{ label: "Event ID", name: "eventid", type: "text" }],
  createevent: [
    { label: "Event Name", name: "name", type: "text" },
    // additional input fields as needed
  ],
  updateevent: [
    { label: "Event ID", name: "eventid", type: "text" },
    { label: "New Event Name", name: "newname", type: "text" },
    // additional input fields as needed
  ],
  deleteevent: [{ label: "Event ID", name: "eventid", type: "text" }],
  listevents: [],
  searchevent: [{ label: "Search Term", name: "search", type: "text" }],
};

export const Events = () => {
  const [route, setRoute] = useState<Route | null>(null);
  const [inputs, setInputs] = useState<
    { label: string; name: string; type: string }[]
  >([]);
  const [buttonLabel, setButtonLabel] = useState<string | null>(null);
  const [showRequest, setShowRequest] = useState(false);

  const handleClick = (route: Route, label: string) => {
    if (route in inputsForRoute) {
      setRoute(route);
      setButtonLabel(label);
      setInputs(inputsForRoute[route] || []);
      setShowRequest(true);
    } else {
      console.error(`Invalid route: ${route}`);
    }
  };

  const handleRequestSubmit = (data: { [key: string]: string }) => {
    // process form data
    console.log(data);
    // hide the modal after processing the form data
    setShowRequest(false);
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 mt-8">
      {buttons.map((button) => (
        <div key={button.label}>
          <Button
            label={button.label}
            size="large"
            onClick={() => handleClick(button.route as Route, button.label)}
          />
        </div>
      ))}
      {showRequest && route && (
        <Request
          title={buttonLabel || ""}
          inputs={inputs}
          onSubmit={handleRequestSubmit}
          show={showRequest}
          onClose={() => setShowRequest(false)}
        />
      )}
    </div>
  );
};