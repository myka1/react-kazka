import { useState } from "react";
import UsersList from "./components/UsersList";
import useUsersListRefiller from "./hooks/useUsersListRefiller";
import DeleteByName from "./components/DeleteByName";
import { useSearch } from "./hooks/useSearch";
import { getFilteredUsers } from "./utils";
import SortAtoZ from "./components/SortAtoZ";
import AddUser from "./components/AddUser";

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
  const { SearchBarElement, searchQuery } = useSearch();
  const [nameError, setNameError] = useState("");

  useUsersListRefiller(users, () => setUsers(mockUsers));

  const addUser = (name: string, lastName: string) => {
    const newUser: User = {
      name: name,
      lastName: lastName,
      id: index,
    };
    setUsers((currentUsers) => [...currentUsers, newUser]);
    index++;
  };

  const handleEdit = (editedUser: User) => {
    setUsers(
      users.map((user) => {
        if (user.id === editedUser.id) {
          return editedUser;
        } else {
          return user;
        }
      })
    );
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
  };

  const removeUserByName = (name: string) => {
    if (!users.some((user) => user.name.toLowerCase() === name.toLowerCase())) {
      setNameError("nera tokio vardo");
    } else {
      setUsers((currentUsers) =>
        currentUsers.filter((user) => {
          setNameError("");
          return name.toLowerCase() !== user.name.toLowerCase();
        })
      );
    }
  };

  const handleClick = () => {
    setNameError("");
  };

  const filteredUsers = getFilteredUsers(users, searchQuery);
  for (let charUp of filteredUsers) {
    charUp.name = charUp.name.charAt(0).toUpperCase() + charUp.name.slice(1);
    charUp.lastName =
      charUp.lastName.charAt(0).toUpperCase() + charUp.lastName.slice(1);
  }

  const sortAtoZ = () => {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      const lastNameA = a.lastName.toUpperCase();
      const lastNameB = b.lastName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      if (nameA === nameB) {
        if (lastNameA < lastNameB) {
          return -1;
        }
        if (lastNameA > lastNameB) {
          return 1;
        }
      }
      return 0;
    });

    setUsers(sortedUsers);
  };

  const sortZtoA = () => {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      const lastNameA = a.lastName.toUpperCase();
      const lastNameB = b.lastName.toUpperCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      if (nameA === nameB) {
        if (lastNameA > lastNameB) {
          return -1;
        }
        if (lastNameA < lastNameB) {
          return 1;
        }
      }

      return 0;
    });

    setUsers(sortedUsers);
  };

  const sortById = () => {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => a.id - b.id);
    setUsers(sortedUsers);
  };

  const sortByIdReverse = () => {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => b.id - a.id);
    setUsers(sortedUsers);
  };

  return (
    <div>
      <nav className="nav">
        <AddUser addUser={addUser} />
        <DeleteByName
          removeUserByName={removeUserByName}
          users={filteredUsers}
          nameError={nameError}
          handleClick={handleClick}
        />
        <SearchBarElement />
      </nav>
      <UsersList
        users={filteredUsers}
        onUserClick={duplicateUser}
        removeUser={removeUser}
        setUsers={handleEdit}
      />
      <SortAtoZ
        sortAtoZ={sortAtoZ}
        sortZtoA={sortZtoA}
        sortById={sortById}
        sortByIdReverse={sortByIdReverse}
      />
    </div>
  );
};

export default App;
