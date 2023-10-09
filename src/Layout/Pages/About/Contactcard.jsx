import { BiPhoneCall } from 'react-icons/bi';
import {AiOutlineMail }  from 'react-icons/ai';
import {FaLocationDot} from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contactcard = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="card md:w-72 bg-orange-200 shadow-xl" data-aos="zoom-in">
  <figure className="px-10 pt-10">
  < BiPhoneCall className='text-7xl' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-2xl ">Call Us</h2>
    <p>Phone : +6221.2002.2012</p>
    <p>Fax: +6221.2002.2013</p>
  </div>
</div>

<div className="card md:w-72 shadow-xl bg-red-300" data-aos="zoom-in">
<figure className="px-10 pt-10">
  <AiOutlineMail className='text-7xl' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-2xl ">Email Us</h2>
    <p>support@gmail.com</p>
   
  </div>
</div>

<div className="card md:w-72 shadow-xl bg-amber-200" data-aos="zoom-in">
<figure className="px-10 pt-10">
  <FaLocationDot className='text-7xl' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-2xl ">Location</h2>
    <p>Jln Cempaka Wangi, Jakarta - Indonesia</p>
   
  </div>
</div>
        </div>
    );
};

export default Contactcard;