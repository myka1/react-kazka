import { useState } from "react";
import { User } from "../App";

const DeleteByName = ({
  removeUserByName,
  users,
  nameError,
}: {
  removeUserByName: (nameToDelete: string) => void;
  users: User[];
  nameError: string;
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
          <option value={user.name}>{user.name}</option>
        ))}
      </datalist>
      <button>Delete Users By Name</button>
      <p className="deleteByNameError">{nameError}</p>
    </form>
  );
};

export default DeleteByName;
