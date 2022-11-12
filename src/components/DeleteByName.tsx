import { useState } from "react";

const DeleteByName = ({
  removeUserByName,
}: {
  removeUserByName: (nameToDelete: string) => void;
}) => {
  const [nameToDelete, setNameToDelete] = useState("");

  return (
    <form
      style={{ marginTop: "3rem" }}
      onSubmit={(e) => {
        e.preventDefault();
        removeUserByName(nameToDelete);
        setNameToDelete("");
      }}
    >
      <input
        value={nameToDelete}
        onChange={(e) => setNameToDelete(e.target.value)}
      />
      <button>Delete Users By Name</button>
    </form>
  );
};

export default DeleteByName;
