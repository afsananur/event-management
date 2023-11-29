import { Link } from "react-router-dom";

const Service = ({services}) => {
    const {id,event_name, img} = services;
    return (
        
            <div className=" ">
                   <div className="card w-64 h-96  image-full mx-auto">
                <figure><img src={img}/></figure>
              <div className="card-body ">
             <p></p>
           <h2 className=" text-center text-2xl font-semibold">{event_name}</h2>
             <button ><Link to={`/services/${id}`} className="btn  btn-outline text-white ">Details</Link></button>
           
               </div>
                     </div>
                  
                  
                   
                 
               </div>
       
    );
};

export default Service;