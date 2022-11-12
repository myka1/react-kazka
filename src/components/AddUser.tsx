import { useState } from "react";
import { User } from "../App";

const AddUser = ({
  index,
  setUsers
}: {
  index: number,
  setUsers: (currentUsers: User[]) => [...currentUsers, newUser] : [User[]]
}) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState(0);

  setId(index);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const newUser = {
            name, lastName, id}
        setUsers((currentUsers) => [...currentUsers, newUser]);
        setName("");
        setLastName("");
        index++;
      }}
    >
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />

      <button>Add User</button>
    </form>
  );
};

export default AddUser;
