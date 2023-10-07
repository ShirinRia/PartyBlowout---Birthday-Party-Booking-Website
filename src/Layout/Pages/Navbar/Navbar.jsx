import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links=<>
            <li className="mr-4"><NavLink to={'/'}>Home</NavLink></li>
            <li className="mr-4"><NavLink to={'/login'}>About Us</NavLink></li>
            <li className="mr-4"><NavLink to={'/register'}>Contact Us</NavLink></li>
   
    </>
    return (
        <div>
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
    <a className="btn btn-ghost normal-case text-xl">BirthdayBlowout</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu-horizontal px-1">
                        {links}
                        </ul>
                    </div>
                    {/* <div className="navbar-end">
                    {
                    user ?  
                    <div>
                        {user.email}
                        <a onClick={handlelogout} href="/" className="btn">Sign Out</a>
                    </div> 
                    :  <NavLink to={'/login'} className="btn btn-primary"> Login </NavLink>
    }
                    </div> */}
            </div>
        </div>
    );
};

export default Navbar;