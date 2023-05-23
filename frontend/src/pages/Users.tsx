import { Button } from "../components/Button";

export const Users = () => {
  const buttons = [
    { label: "User Info", route: "userinfo" },
    { label: "Create User", route: "createuser" },
    { label: "Update User", route: "updateuser" },
    { label: "Delete User", route: "deleteuser" },
    { label: "List Users", route: "listuser" },
    { label: "Search User", route: "searchuser" },
    { label: "User Authorization", route: "userauth" },
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
