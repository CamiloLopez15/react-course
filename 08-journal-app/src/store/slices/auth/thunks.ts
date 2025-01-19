import { checkingCredentials, login, logout } from ".";
import { signInWithGoogle } from "../../../../firebase/providers";
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

        const result = await signInWithGoogle();

        if (result.ok) {
            dispatch(
                login({
                    displayName: result.displayName as string,
                    email: result.email as string,
                    photoURL: result.photoURL as string,
                })
            );
        } else {
            dispatch(logout(result.errorMessage as string));
        }

        return;
    };
};
