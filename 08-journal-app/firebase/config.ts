import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyDTNcQHFs-qa4bIfWNY_WTBO0AtraTw1c8",
    authDomain: "react-curso-c2c36.firebaseapp.com",
    projectId: "react-curso-c2c36",
    storageBucket: "react-curso-c2c36.firebasestorage.app",
    messagingSenderId: "253078302661",
    appId: "1:253078302661:web:163e327e11769d8330a5ac",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
