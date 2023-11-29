
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from '../component/home/Home'
import Services from "../component/Services/Services";
import LogIn from "../component/Login/LogIn";
import Register from "../component/Register/Register";
import Details from "../component/Services/Details";
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";
import AboutUs from "../component/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {path: '/',
      element: <Home></Home> ,
      loader:() => fetch('/gallery.json')},
        {
          path: '/Services',
      element: <Services></Services>,
      loader:() => fetch('/gallery.json')
     },
        {
          path: '/Services/:id',
      element: <PrivateRoute><Details></Details></PrivateRoute>,
      loader:() => fetch('../gallery.json')
       },
        {
          path: '/Login',
      element: <LogIn></LogIn>
     },
        {
          path: '/Register',
      element: <Register></Register>
     },
        {
          path: '/about',
      element:<AboutUs></AboutUs>    
     }
      ]
    },
  ]);
  export default router;