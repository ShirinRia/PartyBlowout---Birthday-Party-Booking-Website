import Marquee from "react-fast-marquee";
import slide1 from '../../../assets/slider1.jpg'
import slide2 from '../../../assets/slider2.jpg'
import slide3 from '../../../assets/slider3.jpg'
import slide4 from '../../../assets/slider4.jpg'
import slide5 from '../../../assets/slider5.jpg'
import slide6 from '../../../assets/slider6.jpg'

const Banner = () => {
    return (
        <div  className="h-[80vh] max-w-7xl mx-auto">
             <Marquee>
                <img className="h-[80vh] w-[1280px] mr-7" src={slide1} alt=""/>
                <img className="h-[80vh] w-[1280px] mr-7" src={slide2} alt="" />
                <img className="h-[80vh] w-[1280px] mr-7" src={slide3} alt="" />
                <img className="h-[80vh] w-[1280px] mr-7" src={slide4} alt=""/>
                <img className="h-[80vh] w-[1280px] mr-7" src={slide5} alt="" />
                <img className="h-[80vh] w-[1280px] mr-7" src={slide6} alt="" />
  </Marquee>
        </div>
    );
};

export default Banner;