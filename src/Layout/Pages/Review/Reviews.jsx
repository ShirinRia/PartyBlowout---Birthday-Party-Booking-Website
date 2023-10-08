import { useLoaderData } from "react-router-dom";
import Review from "./Review";


const Reviews = () => {
    const reviews=useLoaderData();
    return (
        <div>
            <h3>
            Most Popular Questions
            </h3>

            <div>
                {
                    reviews.map(review=><Review key={review.id}
                    reviewdata={review}>

                    </Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;