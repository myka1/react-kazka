import { useState } from "react";

const AddUser = ({
  addUser,
}: {
  addUser: (name: string, lastName: string) => void;
}) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addUser(name, lastName);
        setName("");
        setLastName("");
      }}
    >
      <input
        required
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        required
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button>Add User</button>
    </form>
  );
};

export default AddUser;
