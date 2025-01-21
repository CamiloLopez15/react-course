import { checkingCredentials, login, logout } from ".";
import {
    registerWithEmailPassword,
    signInWithGoogle,
} from "../../../../firebase/providers";
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

export const startCreatingUserWithEmailPassword = ({
    email,
    password,
    displayName,
}: {
    email: string;
    password: string;
    displayName: string;
}) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const result = await registerWithEmailPassword({
            email,
            password,
            displayName,
        });

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
