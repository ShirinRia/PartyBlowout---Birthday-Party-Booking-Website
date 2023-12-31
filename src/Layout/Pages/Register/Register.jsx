import { useContext, useState } from "react";
import { Authcontext } from "../../../Provider/Provider";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [regerror,setregerror]=useState('')
  const {createuser, signgoogle}=useContext(Authcontext)
  const navigate = useNavigate();
  const handleregister=(e)=>{
    e.preventDefault()
    const formreg=new FormData(e.currentTarget);
    const email=formreg.get('email')
    const password=formreg.get('password')
    const name=formreg.get('name')
    let photo=formreg.get('photo')
    if(!photo){
      photo="https://i.ibb.co/0jQwXPz/download.jpg"
    }
    // console.log(photo)
    setregerror('')

    if(password.length<6){
      setregerror("password length less then 6")
      return;
  }
  else if(!/[A-Z]/.test(password)){
    setregerror("Password should have a capital letter")
    return;
}
else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\|-]/.test(password)){
  setregerror("Password should have a Special Character")
  return;
}

    createuser(email,password)
    .then((userCredential) => {
      
      const currentuser = userCredential.user;
      console.log(currentuser)
      toast("Registered With Email")
     
      // updateprofile(name,photo)
      updateProfile(currentuser, {
        displayName: name,
        
        photoURL: photo
      })
      .then(() => {
        // Profile updated!
        setTimeout(() => {
          navigate("/");
        }, 4000);
        // ...
      }).catch((error) => {
       
        setregerror(error.message);
      });

    })
    .catch((error) => {
     const er=error.message;
     console.log(er)
     
    });
   
  }
  const handlegoogle=()=>{
    signgoogle()
    .then((result) => {
     
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      toast("Registered With Google")
      setTimeout(() => {
        navigate("/");
      }, 5000);
      
    }).catch((error) => {
     
      console.log(error.message);
     
    });
   
  }
 
    return (
      
        <div className="flex lg:flex-row-reverse  w-full items-center justify-between mb-8 pr-9 h-[80vh] gap-20">
    <div className="text-left lg:text-left  text-white h-full flex flex-col bg-[#abce4e] justify-center gap-5 px-8">
      <h1 className="text-5xl font-bold">Already part of us?</h1>
      <p className="py-6 text=2xl">Serving You Through Your Account <br></br>Your Trusty Companion.</p>
      
      <Link to={'/login'} className="btn bg-white text-[#04364A] font-bold text-xl">Log In</Link>
    </div>
    
    <div className="card bg-base-100 w-full text-center">
    {
      regerror && <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Error! {regerror}</span>
              </div>
            }
    <h3 className="text-[#04364A] text-5xl font-extrabold"> Join With Us</h3>
      <form className="card-body" onSubmit={handleregister}>
       
        <div className="form-control">
         
          <input type="text" placeholder="name" name="name" className="input input-bordered" />
        </div>
        <div className="form-control">
         
          <input type="url" placeholder="photo" name="photo" className="input input-bordered" />
        </div>
        <div className="form-control">
         
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
         
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
        <button type="submit" className="btn bg-[#abce4e] font-bold text-xl text-white text-register"  >
        Register 
        </button>
       
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

export default Register;