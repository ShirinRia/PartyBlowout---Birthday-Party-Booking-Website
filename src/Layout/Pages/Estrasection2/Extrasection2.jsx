import { useEffect, useState } from "react";
import Info from "./Info";

const Extrasection2 = () => {
    const [information,setinformation]=useState([])
    useEffect(() =>{
        fetch('/info.json')
        .then(res=>res.json())
        .then(data=>setinformation(data))
    },[])
    return (
        <div className=" w-full  bg-[#FFECC6] bg-center bg-auto bg-no-repeat max-w-7xl mx-4 md:mx-auto rounded-lg" style={{backgroundImage: 'url(https://point.moxcreative.com/beeparty/wp-content/uploads/sites/10/2022/05/split_3.png)'}}>
       
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 
       px-8 py-8">
          {
            information.map(info=><Info key={info.id}
            information={info}></Info>)
          }
      </div>
   </div>
    );
};

export default Extrasection2;