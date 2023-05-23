import { useState } from "react";
import { Button } from "../components/Button";
import { Request } from "./Request";

const buttons = [
  { label: "User Info", route: "userinfo" },
  { label: "Create User", route: "createuser" },
  { label: "Update User", route: "updateuser" },
  { label: "Delete User", route: "deleteuser" },
  { label: "List Users", route: "listuser" },
  { label: "Search User", route: "searchuser" },
  { label: "User Authorization", route: "userauth" },
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
