import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInGoogle = () =>{
        return signInWithPopup(auth, provider)
    }

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({});
            }
          });
    }, [])

    const logOut = () =>{
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            // An error happened.
          });
    }

    return {user, setUser, signInGoogle, logOut};
}

export default useFirebase;