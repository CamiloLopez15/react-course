import { createContext } from "react";

interface UserContext {
    user: {
        id: number;
        name: string;
        email: string;
    };
}

export const UserContext = createContext<UserContext>({
    user: {
        id: 0,
        name: "",
        email: "",
    },
});
