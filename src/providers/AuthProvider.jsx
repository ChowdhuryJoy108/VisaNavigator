import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";


const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
   


    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
     
    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    const updateProfileInfo = (updateInfo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, updateInfo);
    }

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const signInWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signInUser,
        updateProfileInfo,
        signOutUser,
        signInWithGoogle,
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(true)
            if(currentUser){
                setUser(currentUser)
            }else{
                setUser(null)
            }
            setLoading(false)
          });
          return ()=>unSubscribe()
        
      }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.object
}

export { AuthContext, AuthProvider};