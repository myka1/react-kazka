import { User } from "../App";
import { Fragment } from "react";
import { useState } from "react";

const UsersList = ({
  users,
  onUserClick,
  removeUser,
  setUsers,
}: {
  users: User[];
  onUserClick: (user: User) => void;
  removeUser: (user: User) => void;
  setUsers: (user: User) => void;
}) => {
  return (
    <main className="user-list-main">
      <ul className="users-list-ul">
        {users.map((user) => (
          <Fragment key={user.id}>
            <div className="user-list-div">
              <Editing user={user} setUsers={setUsers} />

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

const Editing = ({
  user,
  setUsers,
}: {
  user: User;
  setUsers: (user: User) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  if (isEditing) {
    return (
      <>
        <div className="user-list-li-div">
          <li className="user-list-li-p">
            <input
              style={{ maxWidth: "100px" }}
              type="text"
              value={user.name}
              onChange={(e) => {
                setUsers({
                  ...user,
                  name: e.target.value,
                });
              }}
            />
            <input
              style={{ maxWidth: "100px" }}
              type="text"
              value={user.lastName}
              onChange={(e) => {
                setUsers({
                  ...user,
                  lastName: e.target.value,
                });
              }}
            />
          </li>
        </div>
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    return (
      <>
        <div className="user-list-li-div">
          <li className="user-list-li-p">
            {user.id}: {user.name} {user.lastName}
          </li>
        </div>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
};
