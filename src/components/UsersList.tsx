import React from "react";
import { User } from "../App";

const UsersList = ({
  users,
  onUserClick,
  removeUser,
}: {
  users: User[];
  onUserClick: (user: User) => void;
  removeUser: (user: User) => void;
}) => {
  return (
    <div>
      <h2>Users</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "2rem",
        }}
      >
        {users.map((user) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
            key={user.id + 1}
          >
            <button
              style={{ flexGrow: "1" }}
              onClick={() => onUserClick(user)}
              key={user.id}
            >
              {user.id}: {user.name} {user.lastName}
            </button>
            <button onClick={() => removeUser(user)} key={user.id + 2}>
              del
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
