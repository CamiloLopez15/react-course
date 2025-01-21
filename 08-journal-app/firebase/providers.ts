import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    User,
} from "firebase/auth";
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

export const registerWithEmailPassword = async ({
    email,
    password,
    displayName,
}: {
    email: string;
    password: string;
    displayName: string;
}) => {
    try {
        const {
            user: { uid, photoURL },
        } = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

        await updateProfile(FirebaseAuth.currentUser as User, {
            displayName,
        })

        return { ok: true, uid, displayName, email, photoURL };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return { ok: false, errorMessage: error.message };
    }
};
