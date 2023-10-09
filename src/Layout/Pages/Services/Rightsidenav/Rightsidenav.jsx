import { Link, NavLink } from "react-router-dom";


const Rightsidenav = ({titles}) => {
    return (
        <div>
            <h3 className="text-3xl font-bold bg-slate-900 text-white text-center py-4">
                Services
            </h3>
            <ul className="text-slate-800 text-xl font-medium">
          
               { titles.map((title,idx)=>  <NavLink to={`/servicedetails/${title.id}`}  key={idx}><li key={title.id} className="bg-base-200 py-5 px-10">{title.title}</li></NavLink>)}
            
            </ul>
        </div>
    );
};

export default Rightsidenav;