import { BiPhoneCall } from 'react-icons/bi';
import {AiOutlineMail }  from 'react-icons/ai';
import {FaLocationDot} from 'react-icons/fa6'
const Contactcard = () => {
    return (
        <div className="flex justify-between">
            <div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  < BiPhoneCall className='text-7xl' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Call Us</h2>
    <p>Phone : +6221.2002.2012</p>
    <p>Fax: +6221.2002.2013</p>
  </div>
</div>

<div className="card w-72 bg-base-100 shadow-xl">
<figure className="px-10 pt-10">
  <AiOutlineMail className='text-7xl' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Email Us</h2>
    <p>support@gmail.com</p>
   
  </div>
</div>

<div className="card w-72 bg-base-100 shadow-xl">
<figure className="px-10 pt-10">
  <FaLocationDot className='text-7xl' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Location</h2>
    <p>Jln Cempaka Wangi, Jakarta - Indonesia</p>
   
  </div>
</div>
        </div>
    );
};

export default Contactcard;