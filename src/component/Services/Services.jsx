import { useLoaderData } from "react-router-dom";
import Header from "../home/Header";
import Service from "./Service";

const Services = () => {
    const services = useLoaderData();
    // console.log(services)
    return (
        <div >
           <Header></Header>
          <div className="text-center font-semibold py-8"> <h2 className="text-3xl py-3" >Services</h2>
           <p className="text-xs text-slate-500">WE ARE THE BEST</p></div>
           <div className="grid md:grid-cols-3 pl-20 grid-cols-1  gap-10 mb-8 ">
          {
            services.map(aServices => <Service key={aServices.id} services={aServices}></Service>)
          }
          </div>
         
            
         <div className="flex lg:flex-row flex-col px-16 gap-16 py-8">
         <div>
         <h2 className="text-2xl font-semibold pb-6">A partial list of our services includes:</h2>
           <ul className="text-slate-600 font-semibold pb-8">
              <li><span className="text-rose-500">* </span>  Scouting a venue</li>
              <li><span className="text-rose-500">* </span>Developing a theme
</li>
              <li><span className="text-rose-500">* </span>Coordinating paper goods with a stationery vendor</li>
              <li><span className="text-rose-500">* </span>Organizing a tasting with up to three caterers
</li>
              <li><span className="text-rose-500">* </span>Recommending up to three florists (if necessary)</li>
              <li><span className="text-rose-500">* </span>Recommending up to three photographers (if necessary)</li>
              <li><span className="text-rose-500">* </span>Managing your guest list</li>
              
            </ul>
           </div>
           <div >
           <img className="h-96" src="https://i.ibb.co/ZhShtRt/Screenshot-2023-11-24-123028.png" alt="" />
           </div>
         </div>
          
        </div>
    );
};

export default Services;