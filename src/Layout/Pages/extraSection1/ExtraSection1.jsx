import { useEffect, useState } from "react";
import VendorCard from "./VendorCard";


const ExtraSection1 = () => {
    const [vendorlist,setvendorlist]=useState([])
    useEffect(() =>{
        fetch('/vendor.json')
        .then(res=>res.json())
        .then(data=>setvendorlist(data))
    },[])

    return (
        <div className=" w-full px-  bg-[#abce4e] bg-cover max-w-7xl mx-4 md:mx-auto rounded-lg" style={{backgroundImage: 'url(https://point.moxcreative.com/beeparty/wp-content/uploads/sites/10/2022/05/bg_doodle.png)'}}>
             <h2 className="text-5xl font-bold text-center py-8">
             Vendor List
            </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4
            md:px-12 py-8">
                {
                    vendorlist.map(vendor=><VendorCard key={vendor.id}
                    vendor={vendor}>

                    </VendorCard>)
                }
           </div>
        </div>
    );
};

export default ExtraSection1;