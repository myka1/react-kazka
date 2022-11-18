import { buttonBaseClasses } from "@mui/material";
import { useState } from "react";
import { User } from "../App";

const DeleteByName = ({
  removeUserByName,
  users,
  nameError,
  handleClick,
}: {
  removeUserByName: (nameToDelete: string) => void;
  users: User[];
  nameError: string;
  handleClick: () => void;
}) => {
  const [nameToDelete, setNameToDelete] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        removeUserByName(nameToDelete);
        setNameToDelete("");
      }}
    >
      <input
        list="users"
        placeholder="Name"
        value={nameToDelete}
        onChange={(e) => setNameToDelete(e.target.value)}
      />
      <datalist id="users">
        {users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </datalist>
      <button>Delete Users By Name</button>
      <p className="deleteByNameError">
        {nameError}{" "}
        {nameError !== "" && <button onClick={handleClick}>X</button>}
      </p>
    </form>
  );
};

export default DeleteByName;
