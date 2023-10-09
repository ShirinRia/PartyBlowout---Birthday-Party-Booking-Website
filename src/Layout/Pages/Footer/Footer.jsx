import {FiTwitter} from 'react-icons/fi';
import {TiSocialFacebookCircular} from 'react-icons/ti';
import {BsInstagram,BsWhatsapp} from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import {FiTwitter,TiSocialFacebookCircular,BsInstagram,BsWhatsapp} from 'react-icons/fi';

const Footer = () => {
    return (
        <div className=" bg-[#abce4e] ">
                 
            <footer className="footer p-10 max-w-7xl mx-auto text-neutral-content">
                <nav className='text-center mx-auto'>
                    <header className="footer-title opacity-100 text-3xl mx-auto md:mx-0 text-center text-slate-900">Newsletter</header> 
                    <p className='text-xl text-slate-900 font-medium'>
                    Signup for our newsletter to get updated information, insight, or promotions.
                    </p>
                    <Link to={'/register'} className="mx-auto md:mx-0  btn bg-[#FEBF05] border-none w-72 text-white hover:text-[#FEBF05] hover:bg-white hover:outline hover:outline-offset-0 hover:outline-[#FEBF05]"> Sign Up </Link>
                </nav> 
                <nav className='flex flex-col items-center text-center mx-auto'>
                    <header className="footer-title text-3xl text-slate-900 opacity-100 mx-auto">PartyBlowout</header> 
                    <p className='text-xl text-slate-900'>
                    Let's celebrate together
                    </p>
                    <div className='flex gap-5 items-center'>
                        <TiSocialFacebookCircular className='text-6xl text-slate-900'>

                        </TiSocialFacebookCircular>

                        <BsInstagram  className='text-5xl text-slate-900'>

                        </BsInstagram>

                        <FiTwitter  className='text-5xl text-slate-900'>

                        </FiTwitter >

                        <BsWhatsapp  className='text-5xl text-slate-900'>

                        </BsWhatsapp>
                    </div>
                </nav> 
               
            </footer>
        </div>
       
      
    );
};

export default Footer;