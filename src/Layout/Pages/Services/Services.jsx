import { useEffect, useState } from "react";


const Services = () => {
    const [services,setservices]=useState([])

    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setservices(data))
    },[])

    return (
        <div>
           { services.map(service => console.log(service.title)) }
        </div>
    );
};

export default Services;