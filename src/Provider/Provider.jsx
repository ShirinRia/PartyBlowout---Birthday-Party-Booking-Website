import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import PropTypes from 'prop-types';

export const Authcontext =createContext(null)

const auth=getAuth(app)
const Provider =  ({children}) => {
    const [user,setuser]=useState(null)

    const createuser=(email,password) => {
      
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin=(email,password)=>{
       
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout=()=>{
      
        return signOut(auth)
        
    }
    
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentuser) => {
            if (currentuser) {
              const uid = currentuser.uid;
              setuser(currentuser)
              console.log('user',uid)
             
            } 
            else {
              console.log("User is signed out")
            }
          });
          return ()=> unsubscribe()
    },[])
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