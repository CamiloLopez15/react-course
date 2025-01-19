import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

interface AuthError {
    code: string;
    message: string;
    email?: string;
}

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;

        return { ok: true, displayName, email, photoURL, uid };
    } catch (error) {
        const { message } = error as AuthError;
        console.error(error);
        return { ok: false, errorMessage: message };
    }
};
