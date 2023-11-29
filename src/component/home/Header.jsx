import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Header = () => {
   const {user, logOut} = useContext(AuthContext);

   const handleSignOut =() =>{
      logOut()
      .then()
      .catch()
   }


    const links =<>
       
    <li><NavLink  to="/" className={({isActive , isPending}) => isPending ? 'pending' : isActive ? 'text-rose-500 underline' : ''}> Home</NavLink></li>
    <li><NavLink to="/Services" className={({isActive , isPending}) => isPending ? 'pending' : isActive ? 'text-rose-500 underline' : ''}> Services</NavLink></li>

    <li><NavLink to="/about" className={({isActive , isPending}) => isPending ? 'pending' : isActive ? 'text-rose-500 underline' : ''}> About Us</NavLink></li>

   {
      user ? <button onClick={handleSignOut}>Sign Out </button>
      :
      <li><NavLink  to="/Login" className={({isActive , isPending}) => isPending ? 'pending' : isActive ? 'text-rose-500 underline' : ''}>Log In</NavLink></li>
   }
   
 
 </>
       
    
 
 
    return (
      <div className="navbar bg-base-100 px-8">
      <div className="flex-1">
     <img className="w-24" src="https://i.ibb.co/g9TcRZh/Screenshot-2023-11-23-014416.png" alt="" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links}
          
        </ul>
      </div>
    </div>
    );
};

export default Header;