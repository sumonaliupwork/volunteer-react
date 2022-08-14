import { useState } from "react"
import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // google sign-in button
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
            });
    }

    // current user observer
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            };
        });
    }, [])

    // google sign-out button
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            });
    }

    return {
        user,
        setUser,
        googleSignIn,
        logOut
    }
}
export default useFirebase;