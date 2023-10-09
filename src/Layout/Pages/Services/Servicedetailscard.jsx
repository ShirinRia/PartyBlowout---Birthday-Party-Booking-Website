
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FcCheckmark} from 'react-icons/fc'

const Servicedetailscard = ({category}) => {
    const {title,price,features}=category
    return (
       

<div className="card card-side bg-base-200 mb-8 w-full" >
<figure><img className="w-[150px] md:w-[220px] h-full" src="{image}" alt="Movie"/></figure>
    <div className="card-body w-max">
   <div className='flex flex-col md:flex-row items-center relative mb-8'>
   <h2 className="card-title text-2xl font-semibold"> {title}
    </h2>
    <p className="text-2xl font-bold text-[#abce4e] absolute top-10 right-0">
        {price}
    </p>
   </div>
       
            <ul>
               {features.map((feature,idx)=><li key={idx} className='flex items-center gap-1'> <FcCheckmark className='font-bold'></FcCheckmark> {feature}</li>)}
            </ul>
        <div className="card-actions w-full" >
        <button onClick={()=>toast(`"You have booked" ${title}`)} className="btn bg-[#abce4e]  w-full text-white border-none hover:text-[#abce4e] hover:bg-white hover:outline hover:outline-offset-0 hover:outline-[#abce4e]" >Book Now</button>
        <ToastContainer/>
    </div>
</div>
</div>
    );
};

export default Servicedetailscard;