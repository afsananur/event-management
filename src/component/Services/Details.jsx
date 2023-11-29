import { useLoaderData, useParams } from "react-router-dom";
import Header from "../home/Header";


const Details = () => {
    const services = useLoaderData();
    const {id} =useParams();
    const idInt = parseInt(id);
    const service = services.find(service => service.id == idInt);


    console.log(service)
   
    return (
        <div>
           <Header></Header>
          <div>
          <div className="card lg:card-side bg-base-100 shadow-xl">
<img className="w-96  ml-10 py-6"  src={service.img} alt="Album"/>
  <div className=" ml-10 py-8">
    <h2 className="text-2xl font-semibold">{service.event_name}</h2>
    <p >{service.description}</p>
    <div className="card-actions px-8 py-10">
      <h3 className="">Basic: {service.package_details.standard}</h3><br />
      <h3>Deluxe:{service.package_details.premium}</h3>
    </div>
  </div>
</div>
          </div>
            
        </div>
    );
};

export default Details;