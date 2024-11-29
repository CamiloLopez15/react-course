import React from "react";
import { UserContext } from "./UserContext";

interface UserProviderProps {
    children?: React.ReactNode;
}

const user = {
    id: 123,
    name: "Camilo",
    email: "camilolopez1506@gmail.com",
};

const UserProvider = ({ children }: UserProviderProps) => {
    return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>;
};

export default UserProvider;
