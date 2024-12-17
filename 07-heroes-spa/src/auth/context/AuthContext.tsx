import { ActionAuthReducer, User } from "../types";
import { createContext, Dispatch } from "react";
import { initialState } from "../data/user";

interface AuthContext {
    authState: User;
    dispatchAuth: Dispatch<ActionAuthReducer>;
}

export const AuthContext = createContext<AuthContext>({
    authState: initialState,
    dispatchAuth: () => {},
});
