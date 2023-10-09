import { useLoaderData } from "react-router-dom";
import Review from "./Review";
import Marquee from "react-fast-marquee";

const Reviews = () => {
    const reviews=useLoaderData();
    const wedding=reviews.filter(wed => wed.category==='Wedding Reception')
    const birthday=reviews.filter(bd => bd.category==='Birthday Party')
    const Anniversary =reviews.filter(av => av.category==='Anniversary Celebration')
    const Retro=reviews.filter(ret => ret.category==='80s Retro Party')
    const Karaoke=reviews.filter(kara => kara.category==='Karaoke Night')
    const Engagement=reviews.filter(eng => eng.category==='Engagement Party')
    return (
        <div className="my-12 max-w-7xl mx-auto">
           
           <div className="mt-16">
           <h3 className="text-5xl font-bold text-[#abce4e] text-center mb-8">
           Wedding Reception
            </h3>

           <div className="flex gap-6">
           <Marquee pauseOnHover="true">
           {
                    wedding.map((review)=>
                       
                    <Review key={review.id}
                    reviewdata={review}>

                    </Review>
                    )
                }
                </Marquee>
               
            </div>
           </div>
           <div className="mt-16">
           <h3 className="text-5xl font-bold text-[#abce4e] text-center mb-8">
           Birthday Party
            </h3>
           <div className="flex gap-6">
           <Marquee pauseOnHover="true" direction="right">
           {
                birthday.map(review=><Review key={review.id}
                reviewdata={review}>

                </Review>)
            }
                </Marquee>
               
            </div>
           </div>

            <div className="mt-16">
            <h3 className="text-5xl font-bold text-[#abce4e] text-center mb-8">
           Karaoke Night
            </h3>
            <div className="flex gap-6">
            <Marquee pauseOnHover="true">
            {
                    Karaoke.map(review=><Review key={review.id}
                    reviewdata={review}>

                    </Review>)
                }
                </Marquee>
               
            </div>
            </div>
           <div className="mt-16">
           <h3 className="text-5xl font-bold text-[#abce4e] text-center mb-8">
           80s Retro Party
            </h3>
           <div className="flex gap-6">
           <Marquee pauseOnHover="true" direction="right">
           {
                    Retro.map(review=><Review key={review.id}
                    reviewdata={review}>

                    </Review>)
                }
                </Marquee>
                
            </div>
           </div>
           
                <div className="mt-16">
                <h3 className="text-5xl font-bold text-[#abce4e] text-center mb-8">
                Engagement Party
            </h3>
                <div className="flex gap-6">
                <Marquee pauseOnHover="true">
                {
                    Engagement.map(review=><Review key={review.id}
                    reviewdata={review}>

                    </Review>)
                }
                </Marquee>
               
            </div>
                </div>
           
            <div className="mt-16">
            <h3 className="text-5xl font-bold text-[#abce4e] text-center mb-8">
            Anniversary Celebration
            </h3>
            <div className="flex gap-6">
            <Marquee pauseOnHover="true" direction="right">
            {
                    Anniversary.map(review=><Review key={review.id}
                    reviewdata={review}>

                    </Review>)
                }
                </Marquee>
               
            </div>
            </div>
           
        </div>
    );
};

export default Reviews;