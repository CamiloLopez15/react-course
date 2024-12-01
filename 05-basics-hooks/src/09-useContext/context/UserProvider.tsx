import React from "react";
import { initialUser, User, UserContext } from "./UserContext";
import { useState } from "react";

interface UserProviderProps {
    children?: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User>(initialUser);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
