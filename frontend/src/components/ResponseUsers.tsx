import React from "react";

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  address: string | null;
  city: string | null;
  state: string | null;
}

interface ResponseUsersProps {
  users: User[];
}

export const ResponseUsers: React.FC<ResponseUsersProps> = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.address || "N/A"}</td>
            <td>{user.city || "N/A"}</td>
            <td>{user.state || "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
