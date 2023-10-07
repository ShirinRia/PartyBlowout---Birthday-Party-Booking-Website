import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase";
import PropTypes from 'prop-types';

export const Authcontext =createContext(null)

const auth=getAuth(app)
const Provider =  ({children}) => {
    const [user,setuser]=useState(null)

    const createuser=(email,password) => {
        console.log("dfhd")
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin=(email,password)=>{
       
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout=()=>{
      
        return signOut(auth)
        
    }
   
    const authinfo={
        user, 
        createuser,
        logout,
        signin
    }
    return (
       <Authcontext.Provider value={authinfo}>
             {children}
       </Authcontext.Provider>
    );
};
Provider.propTypes = {
    children:PropTypes.object,
};

export default Provider;