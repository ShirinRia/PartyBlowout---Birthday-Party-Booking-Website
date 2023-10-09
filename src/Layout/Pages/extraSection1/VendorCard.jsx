

const VendorCard = ({vendor}) => {
    const {vendor_name,image}=vendor
    return (
        <div className="bg-white py-6 px-4 rounded-lg flex items-center gap-3">
            <figure>
            <img src={image} alt="" className="h-[100px] w-[100px]"/>
            </figure>
            <p className="text-2xl font-semibold">
                {vendor_name}
            </p>
        </div>
    );
};

export default VendorCard;