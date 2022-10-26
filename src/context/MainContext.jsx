import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.confiq';
import toast from 'react-hot-toast';
export const mainContext = createContext();
const auth = getAuth(app)



const MainContext = ({children}) => {
    const [dark,setDark] = useState(false)
    const [courses,setCourses] = useState([]);
    const [loading,setLoading] = useState(true)


    const gProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const [user,setUser] = useState(null);
    useEffect(()=>{
        fetch('https://b610-lerning-platform-server-side-ismailhossend-ismailhossendev.vercel.app/all')
        .then(res => res.json())
        .then(data => {
            setCourses(data)
            setLoading(false)
        })
    },[])

    const withGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,gProvider)
    }
    
    const signWithEmail = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const profileUpdate = (photoURL,displayName) =>{
        setLoading(true)
       return updateProfile(auth.currentUser,{photoURL,displayName})
    }

    const withGithub = () =>{
        setLoading(true)
        return signInWithPopup(auth,gitProvider)
    }
    const signOutUser = () =>{
        signOut(auth).then(()=>{
        toast.success('Sign Out successfully')
        }).catch(()=>{})
    }
    useEffect(()=>{
        const unlink = onAuthStateChanged(auth,(result)=>{
            setUser(result)
        })
        return () => unlink();
    },[])


    const value = {dark,setDark,courses,loading,withGoogle,signWithEmail,profileUpdate,withGithub,user,createUser,signOutUser}
    return (
        <div>
            <mainContext.Provider value={value}>
                {children}
            </mainContext.Provider>
        </div>
    );
};

export default MainContext;