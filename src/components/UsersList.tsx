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
    <main className="user-list-main">
      <ul className="users-list-ul">
        {users.map((user) => (
          <div className="user-list-div">
            <div className="user-list-li-div">
              <li className="user-list-li">
                <p className="user-list-li-p">
                  {user.id}: {user.name} {user.lastName}
                </p>
              </li>
            </div>

            <div className="user-list-button-div">
              <button
                className="user-list-doublicate-button"
                onClick={() => onUserClick(user)}
                key={user.id}
              >
                Doublicate
              </button>
              <button
                className="user-list-delete-button"
                onClick={() => removeUser(user)}
                key={user.id + 2}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </main>
  );
};

export default UsersList;
