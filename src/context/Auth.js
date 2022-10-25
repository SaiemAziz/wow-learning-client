import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase.init';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth';

export const AuthContext = createContext('');
const Auth = ({children}) => {

    let auth = getAuth(app)
    let [user, setUser] = useState(null)
    let googleProvider = new GoogleAuthProvider()
    let githubProvider = new GithubAuthProvider()
    let [loading, setLoading] = useState(true)
    let [redirect, setRedirect] = useState(null);

    // fetch user if logged in from server
    useEffect(() => {
        let subscribe = onAuthStateChanged(auth, currentUser=>{
                    setUser(currentUser);
                    setLoading(false);
        })

        return () => {
            subscribe()
        }
    },[])

    // // send verification
    // let sendVerification = () => {
    //     setLoading(true);
    //     return sendEmailVerification(auth.currentUser)
    // }

    // password reset
    let resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }

    // update user info
    let updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    // create new user by email and password
    let createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in and out by email and password
    let logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    let logOut = () => {
        setLoading(false);
        return signOut(auth);
    }


    // sign in by google 
    let googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // sign in by github 
    let githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    let authInfo = {
        createUser,
        loading,
        logIn, 
        logOut, 
        user, 
        setUser, 
        googleLogin,
        githubLogin,
        redirect, 
        setRedirect,
        resetPassword,
        updateUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;