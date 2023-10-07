import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Pages/Home/Home";
import Root from "../Layout/Pages/Root/Root";
import Login from "../Layout/Pages/Login/Login";
import Register from "../Layout/Pages/Register/Register";
import About from "../Layout/Pages/About/About";
import Aboutmain from "../Layout/Pages/About/Aboutmain";

const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    //errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
         
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
      ],
    },
  ]);
  export default Route