import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

const Service = ({service}) => {
    const {id,title,details,cover,PriceRange} = service
   
    return (
      <div>
        
            <div className="card bg-base-100 shadow-xl">
<figure><img src={cover} alt={title} className="h-[277px] w-full" /></figure>
<div className="card-body">
  <div className="flex justify-between">
  <h2 className="card-title">{title}</h2>
  <h2 className="card-title text-slate-900">{PriceRange}</h2>
  </div>
<p>{details}</p>

</div>
<Link to={`/servicedetails/${id}`}>
  <div className="card-actions pb-8 px-8">
      <button className="btn bg-[#abce4e] text-white text-xl font-semibold w-full">Details</button>
    </div>
    </Link>
</div>
            
      </div>
      
       
      
    );
};
Service.propTypes = {
  service:PropTypes.object,
};
export default Service;