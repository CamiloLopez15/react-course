export enum Types {
    login = "[Auth] Login",
    logout = "[Auth] Logout",
}

export interface User {
    logged: boolean;
    username: string;
}

export interface ActionAuthReducer {
    type: Types;
    payload: User | string;
}
