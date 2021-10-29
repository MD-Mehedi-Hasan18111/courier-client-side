import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const Context = createContext();

const AuthProvider = ({children}) => {

    const {user, setUser, signInGoogle, logOut} = useFirebase();

    return (
        <Context.Provider value={{user, setUser, signInGoogle, logOut}}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;