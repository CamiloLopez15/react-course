import { initialState } from "../data/user";
import { ActionAuthReducer, Types, User } from "../types";

export const authReducer = (
    state: User = initialState,
    action: ActionAuthReducer
): User => {
    switch (action.type) {
        case Types.login:
            return {
                ...state,
                ...(action.payload as User),
                logged: true,
            };

        case Types.logout:
            return {
                ...state,
                logged: false,
                username: "",
            };

        default:
            return state;
    }
};
