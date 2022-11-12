import React from "react";
import { User } from "../App";

const UsersList = ({
  users,
  onUserClick,
}: {
  users: User[];
  onUserClick: (user: User) => void;
}) => {
  return (
    <div>
      <h2>Users</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {users.map((user) => (
          <button onClick={() => onUserClick(user)} key={user.id}>
            {user.id}: {user.name} {user.lastName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
