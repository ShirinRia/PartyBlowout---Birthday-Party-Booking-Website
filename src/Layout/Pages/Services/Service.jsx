import { Link } from "react-router-dom";


const Service = ({service}) => {
    const {id,title,details} = service
    const shortdetails=details.split(".")
    return (
      
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    {details.length>200 ? <p> {details.slice(0,50)} <Link > Read more</Link> </p>
                : <p>{details}</p> }
                    <div className="card-actions">
                    <button className="btn bg-[#abce4e] text-white">Book Now</button>
                    </div>
                </div>
                </div>
      
    );
};

export default Service;