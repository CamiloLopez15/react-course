import { createContext, Dispatch, SetStateAction } from "react";

interface UserContext {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export const initialUser: User = {
    id: 0,
    name: "",
    email: "",
};

export const UserContext = createContext<UserContext>({
    user: initialUser,
    setUser: () => {},
});
