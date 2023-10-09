import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Allfooter from "../Allfooter/Allfooter";

const Root = () => {
    return (
        <div >
            <Navbar>
                
            </Navbar>

            <Outlet>

            </Outlet>
            <Allfooter></Allfooter>
        </div>
    );
};

export default Root;