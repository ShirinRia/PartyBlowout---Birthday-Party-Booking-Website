
import {FcCheckmark} from 'react-icons/fc'

const Servicedetailscard = ({category}) => {
    const {title,price,features}=category
    return (
       

<div className="card card-side bg-base-200 mb-8 w-full" >
<figure><img className="w-[150px] md:w-[220px] h-full" src="{image}" alt="Movie"/></figure>
    <div className="card-body w-max">
   <div className='flex items-center relative'>
   <h2 className="card-title text-2xl font-semibold"> {title}
    </h2>
    <p className="text-2xl font-bold text-[#abce4e] absolute right-0">
        {price}
    </p>
   </div>
       
            <ul>
               {features.map((feature,idx)=><li key={idx} className='flex items-center gap-1'> <FcCheckmark className='font-bold'></FcCheckmark> {feature}</li>)}
            </ul>
        <div className="card-actions w-full" >
        <button className="btn bg-[#abce4e]  w-full text-white border-none hover:text-[#abce4e] hover:bg-white hover:outline hover:outline-offset-0 hover:outline-[#abce4e]" >Book Now</button>
    </div>
</div>
</div>
    );
};

export default Servicedetailscard;