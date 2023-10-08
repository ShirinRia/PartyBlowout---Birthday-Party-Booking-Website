import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
const Faqcard = ({faq}) => {
     const {tag,question,answer}=faq
    return (
        <div>
        <div className="space-y-5">
 
  <div >
    <h3 className='text-2xl font-medium italic font-bold'>
    {question}
    </h3>
   
  </div>
  <div className="bg-base-200 border-l-8 border-[#abce4e] rounded-lg px-2 py-5 font-medium text-base-400"> 
    <p>{answer}</p>
  </div>
</div>


</div>
        
    );
};

export default Faqcard;