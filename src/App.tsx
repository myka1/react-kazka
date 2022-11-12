import { useEffect, useId, useState } from "react";
import UsersList from "./components/UsersList";
// import useKeydownListener from "./hooks/useKeydownListener";
import useUsersListRefiller from "./hooks/useUsersListRefiller";
import DeleteByName from "./components/DeleteByName";
import SearchBar from "./components/SearchBar";
import { useSearch } from "./hooks/useSearch";
import { getFilteredUsers } from "./utils";

export type User = {
  name: string;
  lastName: string;
  id: number;
};

const mockUsers = [
  { id: 0, name: "Bert", lastName: "Brown" },
  { id: 1, name: "Michael", lastName: "Taylor" },
  { id: 2, name: "Lee", lastName: "Barrett" },
  { id: 3, name: "Dolores", lastName: "Wheeler" },
  { id: 4, name: "Ernest", lastName: "Reed" },
  { id: 5, name: "Nettie", lastName: "Walters" },
  { id: 6, name: "NetNathan", lastName: "Howelltie" },
  { id: 7, name: "NetNatTonya", lastName: "Douglashan" },
  { id: 8, name: "Antonia", lastName: "Myers" },
  { id: 9, name: "AntoJanis", lastName: "Bridgesnia" },
];

let index = mockUsers.length;

const App = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const { SearchBarElement, searchQuery } = useSearch();
  // const [nameToDelete, setNameToDelete] = useState("");

  // useKeydownListener(() => removeUser(users.length - 1));

  useUsersListRefiller(users, () => setUsers(mockUsers));

  const addUser = () => {
    const newUser = { id: index, name, lastName };
    setUsers((currentUsers) => [...currentUsers, newUser]);
    index++;
    setName("");
    setLastName("");
  };

  const removeUser = (user: User) => {
    setUsers((currentUsers) =>
      currentUsers.filter((currentUser) => {
        return user.id !== currentUser.id;
      })
    );
  };

  const duplicateUser = (user: User) => {
    const newUser: User = {
      name: user.name,
      lastName: user.lastName,
      id: index,
    };
    index++;
    const freshUsers = JSON.parse(JSON.stringify(users));
    freshUsers.splice(users.indexOf(user) + 1, 0, newUser);

    setUsers(freshUsers);
    console.log(freshUsers);
  };

  const removeUserByName = (name: string) => {
    if (!users.some((user) => user.name.toLowerCase() === name.toLowerCase())) {
      return alert("nera tokio vardo");
    }
    setUsers((currentUsers) =>
      currentUsers.filter((user) => {
        return name.toLowerCase() !== user.name.toLowerCase();
      })
    );
  };

  const filteredUsers = getFilteredUsers(users, searchQuery);
  for (let charUp of filteredUsers) {
    charUp.name = charUp.name.charAt(0).toUpperCase() + charUp.name.slice(1);
    charUp.lastName =
      charUp.lastName.charAt(0).toUpperCase() + charUp.lastName.slice(1);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addUser();
          }}
        >
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <button>Add User</button>
        </form>
        <DeleteByName removeUserByName={removeUserByName} />
        <SearchBarElement />
      </div>
      <div className="users-div">
        <h2>Users</h2>

        <UsersList
          users={filteredUsers}
          onUserClick={duplicateUser}
          removeUser={removeUser}
        />
      </div>
    </div>
  );
};

export default App;
