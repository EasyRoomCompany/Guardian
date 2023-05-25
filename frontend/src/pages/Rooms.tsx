import { useState } from "react";
import { Button } from "../components/Button";
import { Request } from "../components/Request";
import { Response } from "../components/Response";
import {
  FaCheck,
  FaDoorOpen,
  FaEdit,
  FaMinus,
  FaPlus,
  FaTag,
} from "react-icons/fa";
import axios from "axios";

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
    { label: "Capacity", name: "capacity", type: "number" },
    { label: "Description", name: "description", type: "text" },
    { label: "Price per Hour", name: "price_hour", type: "number" },
  ],
  updateroom: [
    { label: "Room ID", name: "roomid", type: "text" },
    { label: "New Room Name", name: "newname", type: "text" },
    { label: "New Capacity", name: "newcapacity", type: "number" },
    { label: "New Description", name: "newdescription", type: "text" },
    { label: "New Price per Hour", name: "newprice_hour", type: "number" },
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
    switch (route) {
      case "createroom":
        axios
          .post("http://localhost:3333/rooms", data)
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
      case "updateroom":
        axios
          .put(`http://localhost:3333/rooms/${data.roomid}`, data)
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
      case "deleteroom":
        axios
          .delete(`http://localhost:3333/rooms/${data.roomid}`)
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
      case "roominfo":
        axios
          .get(`http://localhost:3333/rooms/${data.roomid}`)
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
      case "listrooms":
        axios
          .get("http://localhost:3333/rooms")
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
      case "searchroom":
        axios
          .get(`http://localhost:3333/rooms/search?term=${data.search}`)
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
      <Response
        message={responseMessage}
        data={responseData}
        show={showResponse}
        onClose={handleCloseResponse}
      />
    </div>
  );
};
