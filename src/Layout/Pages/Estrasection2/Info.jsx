

const Info = ({information}) => {
    const {title,amount}=information
    return (
        <div className="flex flex-col justify-center items-center">
           
            <p className="text-[#FEBF05] text-7xl font-extrabold">
               { amount}
            </p>
            <h2 className="text-xl font-bold">
                {title}
            </h2>
        </div>
    );
};

export default Info;