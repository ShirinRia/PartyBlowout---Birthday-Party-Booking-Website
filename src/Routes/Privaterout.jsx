import { useContext } from 'react';
import { Authcontext} from '../Provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user,loading}=useContext(Authcontext)
    const location=useLocation()
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    else{
    if(user){
        return children
    }
    else{
        return (
            <Navigate state={location.pathname} to={'/login'}></Navigate>
            );
    }
}
   
    
};

export default Privateroute;