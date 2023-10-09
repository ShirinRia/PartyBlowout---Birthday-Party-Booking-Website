import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Pages/Home/Home";
import Root from "../Layout/Pages/Root/Root";
import Login from "../Layout/Pages/Login/Login";
import Register from "../Layout/Pages/Register/Register";
import Aboutmain from "../Layout/Pages/About/Aboutmain";
import Reviews from "../Layout/Pages/Review/Reviews";
import Faq from "../Layout/Pages/Faq/Faq";
import Servicedetails from "../Layout/Pages/Services/Servicedetails";
import Privateroute from "./Privaterout";
import Profile from "../Layout/Pages/Profile/Profile";
import Errorpage from "../Layout/Pages/Errorpage/Errorpage";

const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    errorElement: <Errorpage />,
      children: [
        {
          path: "/",
          element: <Home />,
         
        },
        {
      
          path: "/servicedetails/:serviceid",
          element:<Privateroute>
         <Servicedetails />
       </Privateroute> ,
          loader:()=>fetch('/services.json'),
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/about",
          element: <Aboutmain />,
          loader:() =>fetch('/team.json'),
        },
        {
          path: "/reviews",
          element: <Reviews />,
          loader:() =>fetch('/review.json'),
        },
        {
          path: "/faq",
          element: <Faq/>,
          loader:() =>fetch('/faq.json'),
        },
        {
          path: "/profile",
          element: <Privateroute>
            <Profile/>
          </Privateroute>
          ,
        },
      ],
    },
  ]);
  export default Route