import { Outlet } from "react-router-dom";
import Footer from "../component/Foooter/Footer";



const Root = () => {
    return (
        <div>
           
            <Outlet></Outlet> 
            
               <Footer></Footer>
                </div>
    );
};

export default Root;