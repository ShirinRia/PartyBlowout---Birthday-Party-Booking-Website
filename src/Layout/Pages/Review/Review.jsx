import Marquee from "react-fast-marquee";

const Review = ({reviewdata}) => {
    const {review,reviewer_name} =reviewdata
    return (

<div className="border-2 border-red-400 mr-6">
          <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{reviewer_name}</h2>
    <p className="text-justify">{review}</p> 
    
   
  </div>
</div>

       
       
        </div>

        

        
    );
};

export default Review;
