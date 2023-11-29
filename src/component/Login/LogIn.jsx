import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../home/Header";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const LogIn = () => {

    const {signIn} =useContext(AuthContext);
    const location =useLocation();
    const navigate = useNavigate();
    console.log('location',location)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email,password)
        .then(result => {
            console.log(result.user);

            //navigate after login
            navigate (location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error);
        })
       
    }
    return (
        
        
      <div className="items-center ">
        <Header></Header>

        <h2 className="text-center">Please Login</h2>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mb-6">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" required name="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" required name="password" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center pb-4">Do not have an account <Link to="/register" className="text-pink-500 font-semibold">Register</Link> </p>
    </div>
      </div>
    );
};

export default LogIn;