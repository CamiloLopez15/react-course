import { ActionAuthReducer, Types, User } from "../types";
import { ReactNode, useReducer } from "react";
import { initialState } from "../data/user";
import { AuthContext } from "./";
import { authReducer } from "./";

interface AuthProvider {
    children: ReactNode;
}

const initAuth = (initialState: User) => {
    const data = localStorage.getItem("user");
    if (data) {
        const user: User = JSON.parse(data);
        return user;
    }

    return initialState;
};

const setItem = (user: User) => {
    try {
        localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
        console.error(error);
    }
};

function AuthProvider({ children }: AuthProvider) {
    const [authState, dispatchAuth] = useReducer(
        authReducer,
        initialState,
        initAuth
    );

    const login = async (name: string) => {
        const newUser = {
            id: "ABC",
            username: name,
        };

        const actions: ActionAuthReducer = {
            type: Types.login,
            payload: newUser,
        };

        setItem(Object.assign(authState, actions.payload, { logged: true }));
        dispatchAuth(actions);
    };

    const logout = () => {
        localStorage.removeItem("user");
        dispatchAuth({
            type: Types.logout,
            payload: {},
        });
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };
