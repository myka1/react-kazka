import { useEffect } from "react";
import { User } from "../App";

const useUsersListRefiller = (action: (value: any) => User, user: boolean, value: User[]) => {
    useEffect(() => {
        action(value)
        return 
    }, [user])
    
}

export default useUsersListRefiller;
 
// Nesigauna padaryt kad taip veiktu