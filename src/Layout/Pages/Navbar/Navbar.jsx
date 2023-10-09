import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../../../Provider/Provider";
import './Navbar.css'
const Navbar = () => {
  const {user,logout}=useContext(Authcontext)
    const handlelogout=()=>{
      logout()
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
       console.log(error.message)
      });

    }
    const links=<>
            <li className="mr-4"><NavLink to={'/'}>Home</NavLink></li>
            <li className="mr-4"><NavLink to={'/about'}>About Us</NavLink></li>
            <li className="mr-4"><NavLink to={'/reviews'}>Reviews</NavLink></li>
          
            {
      user && 
      <>
        <li className="mr-4"><NavLink to={'/faq'}>Magic Walls</NavLink></li>
       <li><NavLink to={'/profile'}>Profile</NavLink></li>
       
      </>
    }
    </>
    return (
        <div  className="max-w-7xl mx-auto mb-8">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="normal-case text-5xl font-bold">Party<span className="text-[#abce4e]">Blowout</span></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu-horizontal px-1 text-xl font-medium">
                        {links}
                        </ul>
                    </div>
                     <div className="navbar-end">
                    {
                      
                        user ?  
                        <div className="flex items-center gap-3">
                            <div className="w-10 rounded-full">
              <img src={user.photoURL} className="w-full h-full rounded-full" />
            </div>
                            <a onClick={handlelogout} href="/login" className="btn hover:text-white hover:bg-[#abce4e] ">Sign Out</a>
                        </div> 

                        :  <Link to={'/login'} className="btn bg-[#abce4e] text-white hover:text-[#abce4e] hover:bg-white hover:outline hover:outline-offset-0 hover:outline-[#abce4e]"> Get Started </Link>
                   
                   
    }
                    </div> 
            </div>
        </div>
    );
};

export default Navbar;