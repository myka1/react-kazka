import { useState } from "react";
import { User } from "../App";

const DeleteByName = ({
  removeUserByName,
  users,
}: {
  removeUserByName: (nameToDelete: string) => void;
  users: User[];
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
    </form>
  );
};

export default DeleteByName;
