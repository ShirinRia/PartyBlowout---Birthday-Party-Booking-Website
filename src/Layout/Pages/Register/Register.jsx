import { useContext } from "react";
import { Authcontext } from "../../../Provider/Provider";


const Register = () => {
  const {createuser}=useContext(Authcontext)
  const handleregister=(e)=>{
    e.preventDefault()
    const formreg=new FormData(e.currentTarget);
    const email=formreg.get('email')
    const password=formreg.get('password')
    console.log(email,password)
    createuser(email,password)
    .then((userCredential) => {
      
      const currentuser = userCredential.user;
      console.log(currentuser)
    })
    .catch((error) => {
     const er=error.message;
     console.log(er)
     
    });
  }
    return (
        <div className="flex lg:flex-row-reverse  w-full items-center justify-between pr-9 h-[90vh] gap-20">
    <div className="text-left lg:text-left  text-white h-full flex flex-col bg-[#04364A] justify-center gap-5 px-8">
      <h1 className="text-5xl font-bold">New Here?</h1>
      <p className="py-6">Join the Celebration! Your Journey to Unforgettable Birthdays Begins Here.</p>
      <button className="btn bg-white text-[#04364A]">Sign Up</button>
    </div>
    <div className="card flex-grow w-full  bg-base-100 text-center">
    <h3 className="text-[#04364A] text-5xl font-extrabold"> Login to Your Account</h3>
      <form className="card-body" onSubmit={handleregister}>
       
        <div className="form-control">
         
          <input type="text" placeholder="name" name="name" className="input input-bordered" />
        </div>
        <div className="form-control">
         
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
         
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary text-register" value="Register" />
        </div>
      </form>
    </div>
  </div>

    );
};

export default Register;