import { User } from "./App";

export const getFilteredUsers = (users: User[], searchQuery: string) => {
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return filteredUsers;
}