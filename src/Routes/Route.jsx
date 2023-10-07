import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Pages/Home/Home";
import Root from "../Layout/Pages/Root/Root";
import Login from "../Layout/Pages/Login/Login";
import Register from "../Layout/Pages/Register/Register";

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
      ],
    },
  ]);
  export default Route