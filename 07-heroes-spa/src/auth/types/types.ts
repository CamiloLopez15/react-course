export enum Types {
    login = "[Auth] Login",
    logout = "[Auth] Logout",
}

export interface User {
    logged: boolean;
    id: string;
    username: string;
}

export interface ActionAuthReducer {
    type: Types;
    payload: Partial<User>;
}