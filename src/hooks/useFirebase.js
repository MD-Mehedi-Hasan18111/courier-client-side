import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth, provider)
    }

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
            setIsLoading(false);
            // else {
            //   setUser({});
            // }
          });
    }, [])

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false))
    }

    return {user, setUser, signInGoogle, logOut, isLoading, setIsLoading};
}

export default useFirebase;