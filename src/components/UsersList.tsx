import React, { useState } from "react";
import { User } from "../App";
import { Fragment } from "react";

const UsersList = ({
  users,
  onUserClick,
  removeUser,
  onChange,
  setName,
}: {
  users: User[];
  onUserClick: (user: User) => void;
  removeUser: (user: User) => void;
  onChange: (e: React.ChangeEvent) => void;
  setName: (value: string) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <main className="user-list-main">
      <ul className="users-list-ul">
        {users.map((user) => (
          <Fragment key={user.id}>
            <div className="user-list-div">
              {isEditing ? (
                <>
                  <div className="user-list-li-div">
                    <input
                      value={user.name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <button onClick={() => setIsEditing(false)}>Save</button>
                </>
              ) : (
                <>
                  <div className="user-list-li-div">
                    <li className="user-list-li-p">
                      {user.id}: {user.name} {user.lastName}
                    </li>
                  </div>
                  <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
              )}

              <div className="user-list-button-div">
                <button
                  className="user-list-doublicate-button"
                  onClick={() => onUserClick(user)}
                >
                  Doublicate
                </button>
                <button
                  className="user-list-delete-button"
                  onClick={() => removeUser(user)}
                >
                  Delete
                </button>
              </div>
            </div>
          </Fragment>
        ))}
      </ul>
    </main>
  );
};

export default UsersList;
