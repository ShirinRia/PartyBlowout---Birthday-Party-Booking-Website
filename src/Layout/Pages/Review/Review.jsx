

const Review = ({reviewdata}) => {
    const {category,review,reviewer_name} =reviewdata
    return (
        <div>
            {category}
        </div>
    );
};

export default Review;
