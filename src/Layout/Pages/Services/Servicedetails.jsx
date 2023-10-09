
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
        <div className="max-w-7xl mx-auto flex justify-between">
            <div className="w-2/3">
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