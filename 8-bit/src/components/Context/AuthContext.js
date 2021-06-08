import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../../config/firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    // sign up functionality using firebase
    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    // login functionality using firebase
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut()
    }

    useEffect( () => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, [])      

    const value = {
        currentUser,
        login,
        signUp,
        logout
    }

    return (
        <AuthContext.Provider value={ value }>
            { !loading && children }
        </AuthContext.Provider>
    )
}