import { useState } from "react";
import { Button } from "../components/Button";
import { Request } from "../components/Request";
import {
  FaCheck,
  FaDoorOpen,
  FaEdit,
  FaMinus,
  FaPlus,
  FaTag,
} from "react-icons/fa";

const buttons = [
  {
    label: "Room Info",
    icons: [<FaDoorOpen size="2em" />, <FaTag />],
    route: "roominfo",
  },
  {
    label: "Create Room",
    icons: [<FaDoorOpen size="2em" />, <FaPlus />],
    route: "createroom",
  },
  {
    label: "Update Room",
    icons: [<FaDoorOpen size="2em" />, <FaEdit />],
    route: "updateroom",
  },
  {
    label: "Delete Room",
    icons: [<FaDoorOpen size="2em" />, <FaMinus />],
    route: "deleteroom",
  },
  {
    label: "List Rooms",
    icons: [<FaDoorOpen size="2em" />],
    route: "listrooms",
  },
  {
    label: "Search Room",
    icons: [<FaDoorOpen size="2em" />, <FaCheck />],
    route: "searchroom",
  },
];

type Route =
  | "roominfo"
  | "createroom"
  | "updateroom"
  | "deleteroom"
  | "listrooms"
  | "searchroom";

type InputsForRoute = {
  [key in Route]?: { label: string; name: string; type: string }[];
};

const inputsForRoute: InputsForRoute = {
  roominfo: [{ label: "Room ID", name: "roomid", type: "text" }],
  createroom: [
    { label: "Room Name", name: "name", type: "text" },
    // additional input fields as needed
  ],
  updateroom: [
    { label: "Room ID", name: "roomid", type: "text" },
    { label: "New Room Name", name: "newname", type: "text" },
    // additional input fields as needed
  ],
  deleteroom: [{ label: "Room ID", name: "roomid", type: "text" }],
  listrooms: [],
  searchroom: [{ label: "Search Term", name: "search", type: "text" }],
};

export const Rooms = () => {
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
            icons={button.icons}
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
