import { useState } from "react";
import { Button } from "../components/Button";
import { Request } from "../components/Request";
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
  { label: "List Users", icon: [<FaUsers size="2em" />], route: "listuser" },
  {
    label: "Search User",
    icon: [<FaUserCheck size="2em" />],
    route: "searchuser",
  },
  {
    label: "User Authorization",
    icon: [<FaUserShield size="2em" />],
    route: "userauth",
  },
];

type Route =
  | "userinfo"
  | "createuser"
  | "updateuser"
  | "deleteuser"
  | "listuser"
  | "searchuser"
  | "userauth";

type InputsForRoute = {
  [key in Route]?: { label: string; name: string; type: string }[];
};

const inputsForRoute: InputsForRoute = {
  userinfo: [{ label: "User ID", name: "userid", type: "text" }],
  createuser: [
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    // additional input fields as needed
  ],
  updateuser: [
    { label: "User ID", name: "userid", type: "text" },
    { label: "New Name", name: "newname", type: "text" },
    // additional input fields as needed
  ],
  deleteuser: [{ label: "User ID", name: "userid", type: "text" }],
  listuser: [],
  searchuser: [{ label: "Search Term", name: "search", type: "text" }],
  userauth: [{ label: "User ID", name: "userid", type: "text" }],
};

export const Users = () => {
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
    </div>
  );
};
