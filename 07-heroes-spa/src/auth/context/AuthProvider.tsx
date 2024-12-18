import { ReactNode, useReducer } from "react";
import { initialState } from "../data/user";
import { AuthContext } from "./";
import { authReducer } from "./";
import { ActionAuthReducer, Types } from "../types";

interface AuthProvider {
    children: ReactNode;
}

function AuthProvider({ children }: AuthProvider) {
    const [authState, dispatchAuth] = useReducer(authReducer, initialState);

    const login = async (name: string) => {
        const actions: ActionAuthReducer = {
            type: Types.login,
            payload: {
                id: "ABC",
                username: name,
            },
        };
        dispatchAuth(actions);
    };

    return (
        <AuthContext.Provider value={{ authState, login }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };
