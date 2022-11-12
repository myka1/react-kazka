import { useEffect } from "react";
import { User } from "../App";


const useUsersListRefiller = (users: User[], refillUserList: () => void) => {
    useEffect(() => {
      refillUserList();
    
    }, [users.length === 0]);
  };

export default useUsersListRefiller;
 
