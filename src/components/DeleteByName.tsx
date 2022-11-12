import { useState } from "react";
import { User } from "../App";

const DeleteByName = ({
  removeUserByName,
}: {
  removeUserByName: (nameToDelete: string) => void;
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
        placeholder="Name"
        value={nameToDelete}
        onChange={(e) => setNameToDelete(e.target.value)}
      />
      <button>Delete Users By Name</button>
    </form>
  );
};

export default DeleteByName;
