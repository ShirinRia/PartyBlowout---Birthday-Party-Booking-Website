import { useLoaderData } from "react-router-dom";
import About from "./About";
import one from '../../../assets/1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Aboutmain = () => {
    const teamData=useLoaderData();
    return (
        <div>
            <div className="h-[100vh] w-full bg-[#abce4e] bg-cover" style={{backgroundImage: 'url(https://point.moxcreative.com/beeparty/wp-content/uploads/sites/10/2022/05/bg_header_.png)'}}>
            eeyyuef
        </div>
             <div className="space-y-9 max-w-7xl mx-auto">
            <div>
            <h2 className="text-3xl font-bold text-center">
            Your Celebration, Our Expertise
            </h2>
            <div className="flex justify-between">
                <div className="text-center lg:text-justify w-1/2" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <p className="py-6">Welcome to PartyPerfect Pro, where celebrations become unforgettable memories! Our mission is to transform your dreams into reality by crafting exceptional and immersive event experiences that leave you and your guests in awe.At PartyPerfect Pro, we believe that every event is a unique story waiting to be told. Our vision is to be the go-to party event management company that not only meets but exceeds your expectations, creating moments of pure joy and delight. From birthday parties to weddings events and everything in between, PartyPerfect Pro is your partner in celebration. We invite you to explore our world of creativity, precision, and dedication to create the perfect event that you and your guests will cherish forever. Join us in making memories that will last a lifetime!
                    </p>
                </div>
                <div className="" data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <img src={one} alt="" />
                </div>
            </div>
            </div>
           
           

            <div>
            <div className="text-center space-y-4"> 
            <h2 className="text-3xl font-bold">
            OUR TEAM
            </h2>
            <p>
            our team combines creativity, organization, and attention to detail to bring your party visions to life. From experienced event planners and decorators to tech-savvy designers and customer support specialists, we work seamlessly together to ensure every aspect of your event is meticulously planned and executed. Our goal is to make your party planning experience smooth and stress-free, allowing you to enjoy the festivities while we handle all the behind-the-scenes magic.
            </p>
            </div>
            
            <div className="grid grid-cols-4 gap-5">
                {
                    teamData.map(team=><About key={team.id}
                    team={team}>

                    </About>)
                }
            </div>
            
            </div>
           
        </div>
        </div>
       
    );
};

export default Aboutmain;