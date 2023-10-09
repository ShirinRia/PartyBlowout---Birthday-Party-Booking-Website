
import { useLoaderData, useParams } from "react-router-dom";
import Servicedetailscard from "./Servicedetailscard";
import Rightsidenav from "./Rightsidenav/Rightsidenav";

const Servicedetails = () => {
    const alldetails = useLoaderData()
    const {serviceid}=useParams();
    // console.log(serviceid)
    const servicedetails = alldetails.find(details => details.id===serviceid);
  
    const {categories}=servicedetails
    return (
        <div className="max-w-7xl mx-4  md:mx-auto flex flex-col-reverse md:flex-row justify-between gap-12">
            <div className="w-full md:w-2/3">
             {
                categories.map((category,idx)=><Servicedetailscard key={idx}
                category={category}>

                </Servicedetailscard>)
             }
            
        </div>
        <div>
            {
                <Rightsidenav titles={alldetails}>

                </Rightsidenav>
            }
        </div>
    
    </div>
    );
};

export default Servicedetails;