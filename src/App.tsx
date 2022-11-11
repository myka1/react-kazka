import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";
import useKeydownListener from "./hooks/useKeydownListener";
// import useUsersListRefiller from "./hooks/useUsersListRefiller";
import DeleteByName from "./components/DeleteByName";

export type User = {
  name: string;
  lastName: string;
  id: number;
};

const mockUsers = [
  { id: 0, name: "kazkas", lastName: "last" },
  { id: 1, name: "odosdoao", lastName: "lasteris" },
  { id: 2, name: "trecias", lastName: "yoks" },
  { id: 3, name: "odosdoao", lastName: "lasteris" },
  { id: 4, name: "trecias", lastName: "yoks" },
  { id: 5, name: "odosdoao", lastName: "lasteris" },
  { id: 6, name: "trecias", lastName: "yoks" },
  { id: 7, name: "odosdoao", lastName: "lasteris" },
  { id: 8, name: "trecias", lastName: "yoks" },
];

const App = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nameToDelete, setNameToDelete] = useState("");

  // useKeydownListener(() => removeUser(users.length - 1));

  const useUsersListRefiller = () => {
    useEffect(() => {
      setUsers(mockUsers);
      return setUsers(mockUsers);
    }, [users.length === 0]);
  };

  useUsersListRefiller();

  const addUser = () => {
    const newUser = { id: users[users.length - 1].id + 1, name, lastName };
    setUsers((currentUsers) => [...currentUsers, newUser]);
    setName("");
    setLastName("");
  };

  const removeUser = (id: number) => {
    setUsers((currentUsers) =>
      currentUsers.filter((user) => {
        return id !== user.id;
      })
    );
  };

  const removeUserByName = (name: string) => {
    setUsers((currentUsers) =>
      currentUsers.filter((user) => {
        return name.toLowerCase() !== user.name.toLowerCase();
      })
    );
    setNameToDelete("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUser();
        }}
      >
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <button>Submit</button>
      </form>
      <UsersList users={users} onUserClick={removeUser} />
      <DeleteByName
        removeUserByName={removeUserByName}
        nameToDelete={nameToDelete}
        setNameToDelete={setNameToDelete}
      />
    </div>
  );
};

export default App;
