import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const mainContext = createContext();

const MainContext = ({children}) => {
    const [dark,setDark] = useState(false)
    const [courses,setCourses] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://b610-lerning-platform-server-side-ismailhossend-ismailhossendev.vercel.app/all')
        .then(res => res.json())
        .then(data => {
            setCourses(data)
            setLoading(false)
        })
    },[])
    const value = {dark,setDark,courses,loading}
    return (
        <div>
            <mainContext.Provider value={value}>
                {children}
            </mainContext.Provider>
        </div>
    );
};

export default MainContext;