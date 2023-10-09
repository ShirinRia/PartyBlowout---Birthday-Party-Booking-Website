import { useContext } from 'react';
import { Authcontext} from '../Provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types'; // ES6
const PrivateRoute2 = ({children}) => {
    const {user}=useContext(Authcontext)
    const location=useLocation()
  
    if(user){
        return children
    }
    else{
        return (
            <Navigate state={location.pathname} to={'/login'}></Navigate>
            );
    }

};
PrivateRoute2.propTypes = {
    children:PropTypes.node,
};
export default PrivateRoute2;