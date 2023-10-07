import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const About = ({team}) => {
    const {name,designation,image}=team

    useEffect(() => {
        AOS.init();
      }, [])
    return (

            <div data-aos="fade-right" data-aos-duration="4000" data-aos-easing="ease-in-sine" data-aos-delay="100"  className="hero h-[400px]" id="one" style={{backgroundImage: `url(${image})`}}>
               
                <div className="hero-overlay bg-opacity-60 text-center "  data-aos="fade-right" data-aos-duration="3100" data-aos-easing="ease-in-sine" data-aos-delay="100" data-aos-anchor="#one">
                <div className="flex justify-center items-center mt-32"  >
                        <div className="max-w-md mt-28" >
                            <h1 className="mb-5 text-2xl font-bold text-[#abce4e]">{name}</h1>
                            <p className='text-white'>{designation}</p>
        
                        </div>
                </div>
                    
                    
            </div>
  
</div>
    );
};

export default About;