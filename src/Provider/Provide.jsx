import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const Authcontext =createContext(null)

const auth=getAuth(app)
const Provider = ({children}) => {
    
   
    const authinfo={
        // user, createuser,logout,signin
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