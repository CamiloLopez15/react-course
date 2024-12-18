import { createContext } from "react";
import { initialState } from "../data/user";
import { User } from "../types";

interface AuthContext {
    authState: User;
    login: (name: string) => void;
}

export const AuthContext = createContext<AuthContext>({
    authState: initialState,
    login: () => {},
});
