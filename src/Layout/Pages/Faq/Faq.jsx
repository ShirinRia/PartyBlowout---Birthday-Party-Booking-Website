import { useLoaderData } from "react-router-dom";
import Faqcard from "./Faqcard";


const Faq = () => {
    const faqs=useLoaderData()
    const popular=faqs.filter(popfaq => popfaq.tag==='popular')
    console.log(popular)
    const common=faqs.filter(popfaq => popfaq.tag==='common')
    console.log(common)
    return (
        <div className="my-14 space-y-14">
            <div className="">
            <h3 className="mb-5 text-5xl font-bold text-[#abce4e] text-center mb-8">
            Most Popular Questions
            </h3>
            <div className="max-w-6xl mx-auto space-y-9">
            {popular.map(faq => <Faqcard key={faq.id} 
                 faq={faq}></Faqcard>)}
            </div>
            </div>
            
            <div className="">
                <h3 className="mb-5 text-5xl font-bold text-[#abce4e] text-center mb-8">
                Important Questions
                </h3>
                <div className="max-w-6xl mx-auto space-y-9">
            {common.map(faq => <Faqcard key={faq.id} 
                 faq={faq}></Faqcard>)}
            </div>
            </div> 
        
        </div>
    );
};

export default Faq;