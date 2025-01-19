import { checkingCredentials } from ".";
import { AppDispatch } from "../..";

export const checkingAuthentication = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        console.log({ email, password });
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = () => {
    return async (dispatch: AppDispatch) => {
        console.log("Google Sign In");
        dispatch(checkingCredentials());
    };
};
