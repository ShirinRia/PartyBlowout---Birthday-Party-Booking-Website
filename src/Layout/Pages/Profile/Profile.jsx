import './profile.css'
import { useContext } from "react";
import { Authcontext } from "../../../Provider/Provider";

const Profile = () => {
    const {user}=useContext(Authcontext)
    console.log(user)
    return (
        <div className="flex flex-col md:flex-row justify-between h-[68vh] max-w-5xl mx-4 md:mx-auto gap-11">
            <div >
                <img src={user.photoURL} alt="" className="h-1/2 w-full " />
            </div>
            <div className="  flex-grow ">
                {/* uid */}

<div className="w-full max-w-xl">
  <label className="label">
    <span>UID</span>
  </label>
  <input type="url" placeholder="Type here" className="input input-bordered w-full max-w-3xl" value={user.uid} />
 
</div>
            <div className="w-full max-w-xl">
            <label className="label">
                <span >Name</span>
                
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl" value={user.displayName} />
            
            </div>

            {/* email */}
            <div className=" w-full max-w-xl">
  <label className="label">
    <span >Email</span>
   
  </label>
  <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xl" value={user.email} />
  
</div>



{/* photo */}
<div className=" w-full max-w-xl">
  <label className="label">
    <span >Photo</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl" value={user.photoURL} />
  
</div>
            </div>
        </div>
    );
};

export default Profile;