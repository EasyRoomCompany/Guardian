import { useState } from "react";
import axios from "axios";
import { Button } from "../components/Button";
import { Request } from "../components/Request";
import { ResponseUsers } from "../components/ResponseUsers";
import {
  FaUserMinus,
  FaUserPlus,
  FaUserTag,
  FaUserEdit,
  FaUsers,
  FaUserCheck,
  FaUserShield,
} from "react-icons/fa";

const buttons = [
  { label: "User Info", icon: [<FaUserTag size="2em" />], route: "userinfo" },
  {
    label: "Create User",
    icon: [<FaUserPlus size="2em" />],
    route: "createuser",
  },
  {
    label: "Update User",
    icon: [<FaUserEdit size="2em" />],
    route: "updateuser",
  },
  {
    label: "Delete User",
    icon: [<FaUserMinus size="2em" />],
    route: "deleteuser",
  },
  { label: "List Users", icon: [<FaUsers size="2em" />], route: "listusers" },
  {
    label: "Search User",
    icon: [<FaUserCheck size="2em" />],
    route: "searchuser",
  },
];

type Route =
  | "userinfo"
  | "createuser"
  | "updateuser"
  | "deleteuser"
  | "listusers"
  | "searchuser";

type InputsForRoute = {
  [key in Route]?: { label: string; name: string; type: string }[];
};

const inputsForRoute: InputsForRoute = {
  userinfo: [{ label: "User ID", name: "userid", type: "text" }],
  createuser: [
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
  ],
  updateuser: [
    { label: "User ID", name: "userid", type: "text" },
    { label: "New Name", name: "newname", type: "text" },
  ],
  deleteuser: [{ label: "User ID", name: "userid", type: "text" }],
  listusers: [],
  searchuser: [{ label: "Search Term", name: "search", type: "text" }],
};

export const Users = () => {
  const [route, setRoute] = useState<Route | null>(null);
  const [inputs, setInputs] = useState<
    { label: string; name: string; type: string }[]
  >([]);
  const [buttonLabel, setButtonLabel] = useState<string | null>(null);
  const [showRequest, setShowRequest] = useState(false);
  const [usersData, setUsersData] = useState<any[]>([]);
  const [responseMessage, setResponseMessage] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [responseData, setResponseData] = useState([]);

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
      case "createuser":
        axios
          .post("http://localhost:3333/users", data)
          .then((response) => {
            setResponseMessage(response.data.message);
            setShowResponse(true);
            setResponseData([]);
            setUsersData([response.data.user]); // Update usersData with the created user
          })
          .catch((error) => {
            setResponseMessage(`Error: ${error.message}`);
            setShowResponse(true);
          });
        break;
      case "updateuser":
        axios
          .put(`http://localhost:3333/users/${data.userid}`, data)
          .then((response) => {
            setResponseMessage(response.data.message);
            setShowResponse(true);
            setResponseData([]);
            setUsersData([response.data.user]); // Update usersData with the updated user
          })
          .catch((error) => {
            setResponseMessage(`Error: ${error.message}`);
            setShowResponse(true);
          });
        break;
      case "deleteuser":
        axios
          .delete(`http://localhost:3333/users/${data.userid}`)
          .then((response) => {
            setResponseMessage(response.data.message);
            setShowResponse(true);
            setResponseData([]);
            setUsersData([]); // Clear usersData after deleting the user
          })
          .catch((error) => {
            setResponseMessage(`Error: ${error.message}`);
            setShowResponse(true);
          });
        break;
      case "userinfo":
        axios
          .get(`http://localhost:3333/users/${data.userid}`)
          .then((response) => {
            setResponseMessage("Search results:");
            setResponseData(response.data);
            setShowResponse(true);
            setUsersData([response.data]); // Update usersData with the retrieved user
          })
          .catch((error) => {
            setResponseMessage(`Error: ${error.message}`);
            setShowResponse(true);
          });
        break;
      case "listusers":
        axios
          .get("http://localhost:3333/users")
          .then((response) => {
            setResponseMessage("Search results:");
            setResponseData(response.data);
            setShowResponse(true);
            setUsersData(
              response.data.map((user: any) => ({
                id: user.id,
                email: user.email,
                name: user.name, // Include the name field
              }))
            );
          })
          .catch((error) => {
            setResponseMessage(`Error: ${error.message}`);
            setShowResponse(true);
          });
        break;
      case "searchuser":
        axios
          .get(`http://localhost:3333/users/search?term=${data.search}`)
          .then((response) => {
            setResponseMessage("Search results:");
            setResponseData(response.data);
            setShowResponse(true);
            setUsersData(response.data); // Update usersData with the search results
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

  return (
    <div className="flex flex-wrap gap-4 p-4 mt-8">
      {buttons.map((button) => (
        <div key={button.label}>
          <Button
            icons={button.icon}
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
      {usersData.length > 0 && (
        <ResponseUsers
          message="User data:"
          data={usersData}
          show={true}
          onClose={() => setUsersData([])}
        />
      )}
    </div>
  );
};
