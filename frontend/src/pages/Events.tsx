import { useState } from "react";
import { Button } from "../components/Button";
import { Request } from "../components/Request";
import { ResponseEvents } from "../components/ResponseEvents";
import {
  FaCalendar,
  FaCheck,
  FaEdit,
  FaMinus,
  FaPlus,
  FaTag,
} from "react-icons/fa";
import axios from "axios";

const buttons = [
  {
    label: "Event Info",
    icons: [<FaCalendar size="2em" />, <FaTag />],
    route: "eventinfo",
  },
  {
    label: "Create Event",
    icons: [<FaCalendar size="2em" />, <FaPlus />],
    route: "createevent",
  },
  {
    label: "Update Event",
    icons: [<FaCalendar size="2em" />, <FaEdit />],
    route: "updateevent",
  },
  {
    label: "Delete Event",
    icons: [<FaCalendar size="2em" />, <FaMinus />],
    route: "deleteevent",
  },
  {
    label: "List Events",
    icons: [<FaCalendar size="2em" />],
    route: "listevents",
  },
  {
    label: "Search Event",
    icons: [<FaCalendar size="2em" />, <FaCheck />],
    route: "searchevent",
  },
];

type Route =
  | "eventinfo"
  | "createevent"
  | "updateevent"
  | "deleteevent"
  | "listevents"
  | "searchevent";

type InputField = { label: string; name: string; type: string };
type InputsForRoute = { [key in Route]?: InputField[] };

const inputsForRoute: InputsForRoute = {
  eventinfo: [{ label: "Event ID", name: "id", type: "text" }],
  createevent: [
    { label: "Event Category", name: "event_category", type: "text" },
    { label: "Date", name: "date", type: "date" },
    { label: "Start Time", name: "start_time", type: "time" },
    { label: "Room ID", name: "rooms_id", type: "text" },
    { label: "User ID", name: "users_id", type: "text" },
  ],
  updateevent: [
    { label: "Event ID", name: "id", type: "text" },
    { label: "Event Category", name: "event_category", type: "text" },
    { label: "Date", name: "date", type: "date" },
    { label: "Start Time", name: "start_time", type: "time" },
    { label: "Room ID", name: "rooms_id", type: "text" },
  ],
  deleteevent: [{ label: "Event ID", name: "id", type: "text" }],
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
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [showResponse, setShowResponse] = useState(false);
  const [responseData, setResponseData] = useState<any[] | null>(null);

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

  const handleRequestSubmit = async (data: { [key: string]: string }) => {
    const id =
      route !== "createevent" &&
      route !== "listevents" &&
      route !== "searchevent"
        ? parseInt(data.id)
        : null;
    if (
      route !== "createevent" &&
      route !== "listevents" &&
      route !== "searchevent" &&
      Number.isNaN(id)
    ) {
      setResponseMessage(`Error: Invalid ID. Please enter a valid number.`);
      setShowResponse(true);
      return;
    }
    switch (route) {
      case "eventinfo":
        axios
          .get(`http://localhost:3333/reservations/${id}`)
          .then((response) => {
            setResponseMessage("Search results:");
            setResponseData(response.data);
            setShowResponse(true);
          })
          .catch((error) => {
            setResponseMessage(`Error: ${error.message}`);
            setShowResponse(true);
          });
        break;
      case "createevent":
        axios
          .post("http://localhost:3333/reservations", data)
          .then((response) => {
            setResponseMessage(response.data.message);
            setShowResponse(true);
            setResponseData([]);
          })
          .catch((error) => {
            setResponseMessage(`Error: ${error.message}`);
            setShowResponse(true);
          });
        break;
      case "updateevent":
        axios
          .put(`http://localhost:3333/reservations/${id}`, data)
          .then((response) => {
            setResponseMessage(response.data.message);
            setShowResponse(true);
            setResponseData([]);
          })
          .catch((error) => {
            setResponseMessage(`Error: ${error.message}`);
            setShowResponse(true);
          });
        break;
      case "deleteevent":
        axios
          .delete(`http://localhost:3333/reservations/${id}`)
          .then((response) => {
            setResponseMessage(response.data.message);
            setShowResponse(true);
            setResponseData([]);
          })
          .catch((error) => {
            setResponseMessage(`Error: ${error.message}`);
            setShowResponse(true);
          });
        break;
      case "listevents":
        axios
          .get("http://localhost:3333/reservations")
          .then((response) => {
            setResponseMessage("Search results:");
            setResponseData(response.data);
            setShowResponse(true);
          })
          .catch((error) => {
            setResponseMessage(`Error: ${error.message}`);
            setShowResponse(true);
          });
        break;
      case "searchevent":
        axios
          .get(`http://localhost:3333/reservations/search?term=${data.search}`)
          .then((response) => {
            setResponseMessage("Search results:");
            setResponseData(response.data);
            setShowResponse(true);
          })
          .catch((error) => {
            setResponseMessage(`Error: ${error.message}`);
            setShowResponse(true);
          });
        break;
      default:
        console.error(`Invalid route: ${route}`);
        break;
    }

    // process form data
    console.log(data);

    // hide the modal after processing the form data
    setShowRequest(false);
  };

  const handleCloseResponse = () => {
    setShowResponse(false);
    setResponseMessage(null);
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
      <ResponseEvents
        message={responseMessage}
        data={responseData}
        show={showResponse}
        onClose={handleCloseResponse}
      />
    </div>
  );
};
