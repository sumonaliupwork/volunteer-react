import { useState, useEffect } from "react"
import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // google sign-in button
    const googleSignIn = () => {
        setIsLogin(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLogin(false));

    }
    // current user observer
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            };
            setIsLogin(false)
        });
    }, [])

    // google sign-out button
    const logOut = () => {
        setIsLogin(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLogin(false));

    }

    return {
        user,
        setUser,
        googleSignIn,
        logOut,
        isLogin
    }
}
export default useFirebase;