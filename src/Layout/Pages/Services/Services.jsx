import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services,setservices]=useState([])

    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setservices(data))
    },[])

    return (
        <div className="grid grid-cols-3 gap-y-8 gap-x-4  max-w-7xl mx-auto">
           { services.map(service => <Service key={service.id}
           service={service}>

           </Service>) }
        </div>
    );
};

export default Services;