import Marquee from "react-fast-marquee";
import slide1 from '../../../assets/2.png'
import slide2 from '../../../assets/3.png'
import slide3 from '../../../assets/editorsInsight1.png'
const Banner = () => {
    return (
        <div  className="h-[80vh] border-2 border-red-300">
             <Marquee>
                <img className="h-[80vh] w-full" src={slide1} alt=""/>
                <img className="h-[80vh] w-full" src={slide2} alt="" />
                <img className="h-[80vh] w-full" src={slide3} alt="" />
  </Marquee>
        </div>
    );
};

export default Banner;