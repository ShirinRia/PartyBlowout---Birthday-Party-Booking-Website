import { Link } from "react-router-dom";


const Login = () => {
    return (
       
            
  <div className="flex lg:flex-row  w-full items-center justify-between pr-9 h-[90vh] gap-20">
    <div className="text-left lg:text-left  text-white h-full flex flex-col bg-[#04364A] justify-center gap-5 px-8">
      <h1 className="text-5xl font-bold">New Here?</h1>
      <p className="py-6">Join the Celebration! Your Journey to Unforgettable Birthdays Begins Here.</p>
      <Link to={'/register'} className="btn bg-white text-[#04364A]">Sign Up</Link>
    </div>
    <div className="card flex-grow w-full  bg-base-100 text-center">
    <h3 className="text-[#04364A] text-5xl font-extrabold"> Login to Your Account</h3>
      <form className="card-body">
       
        <div className="form-control">
         
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
         
          <input type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
            
          <button className="btn bg-[#04364A]">Login</button>
        </div>
      </form>
    </div>
  </div>

       
    );
};

export default Login;