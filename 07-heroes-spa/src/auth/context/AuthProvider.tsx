import { ReactNode, useReducer } from "react";
import { initialState } from "../data/user";
import { AuthContext } from "./";
import { authReducer } from "./";

interface AuthProvider {
    children: ReactNode;
}

function AuthProvider({ children }: AuthProvider) {
    const [authState, dispatchAuth] = useReducer(authReducer, initialState);
    return (
        <AuthContext.Provider value={{ authState, dispatchAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };
