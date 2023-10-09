import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../../Provider/Provider";
import { useContext, useState } from "react";
import {FcGoogle} from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [logerror,setlogerror]=useState('')
  const {signin, signgoogle}=useContext(Authcontext)
  const navigate=useNavigate()
  const location=useLocation()
  const handlelogin=e=>{
    e.preventDefault();
    const logform=new FormData(e.currentTarget)
    console.log(logform.get('password'))
    const email=logform.get('email')
    const password=logform.get('password')
    signin(email,password)
    .then((userCredential) => {
      // Signed in 
      const currentuser = userCredential.user;
      console.log(currentuser)
      toast("Successfully Login")
      setTimeout(() => {
        navigate(location?.state ? location.state : '/')
      }, 6000);
     
    })
    .catch((error) => {
      console.log(error);
      // console.log(error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      // if (errorCode === 'auth/wrong-password') {
      //   // Handle password mismatch error here
      //   console.log('Password doesn\'t match.');
      // } else {
      //   // Handle other errors (e.g., user not found, network issues, etc.) here
      //   console.error(errorMessage);
      // }
      setlogerror(errorMessage);
    });

  }
  const handlegoogle=()=>{
    signgoogle()
    .then((result) => {
    
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      toast("Login With Google")
      setTimeout(() => {
        navigate(location?.state ? location.state : '/')
      }, 4000);
      
    }).catch((error) => {
     
      console.log(error.message);
     
    });
   
  }
    return (
       
            
  <div className="flex lg:flex-row  w-full items-center justify-between pr-9 h-[65vh] mb-5 gap-20 max-w-6xl mx-auto">
    <div className="text-left lg:text-left  text-white h-full flex flex-col bg-[#abce4e] justify-center gap-5 px-8">
      <h1 className="text-5xl font-bold">New Here?</h1>
      <p className="py-6">Join the Celebration! Your Journey to Unforgettable Birthdays Begins Here.</p>
      <Link to={'/register'} className="btn bg-white text-[#04364A] text-xl">Sign Up</Link>
    </div>
    <div className="card flex-grow w-full  bg-base-100 text-center">
    {
      logerror && <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Error! {logerror}</span>
              </div>
            }
    <h3 className="text-[#04364A] text-5xl font-extrabold"> Login to Your Account</h3>
      <form className="card-body" onSubmit={handlelogin}>
       
        <div className="form-control">
         
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
         
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <input className="btn text-white bg-[#abce4e] font-bold text-xl" type="submit" value="Login" />
         
        </div>
       
      </form>
      <div className="mx-8">
      <button onClick={handlegoogle} className="btn text-[#04364A] bg-white outline outline-[#abce4e] hover:bg-[#abce4e] hover:text-white hover:outline-0 w-full"><FcGoogle className="text-2xl"> </FcGoogle>Log In With Google</button>
        <ToastContainer />
      </div>
    </div>
  </div>
    );
};

export default Login;