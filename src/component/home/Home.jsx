


import { Link, useLoaderData } from "react-router-dom";
import Service from "../Services/Service";
import Banner from "./Banner";
// import EventCategory from "./EventCategory";
import Header from "./Header";
import { useState } from "react";


const Home = () => {
  const [dataLength, setDataLength]
=useState(3);
    const services = useLoaderData();

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
        
          <div  className="text-center py-6">
            <h2 className="text-3xl font-semibold py-4">It’s simple. You have an event to plan and <br /> 
            we have <span className="text-rose-500">the solutions</span></h2>
            <p className="text-xs font-semibold  text-slate-500">HERE IS HOW WE CAN HELP YOU</p>
          <div className="grid md:grid-cols-3 pl-20 grid-cols-1  gap-10 mb-8 py-5 ">

                 {
             services.slice(0,dataLength).map(aServices => <Service key={aServices.id} services={aServices}></Service>)}


             </div>
          </div>

        <div>
        <h2 className="text-3xl font-semibold text-center py-8">Latest <span className="text-rose-500 ">News</span></h2>
        <div className="carousel carousel-end rounded-box">
           
  <div className="carousel-item flex-col text-center">
    <img className="w-80 pb-3" src="https://i.ibb.co/Xz7tMck/Screenshot-2023-11-28-165523.png" alt="" />
    <h3 className="text-xl  text-neutral-500">Prposal</h3>
    <h2 className="text-sm py-3 font-bold">SPECIAL PROPOSAL</h2>
    <p className="text-xs">Planning the perfect proposal can be daunting. <br /> There are tens of thousands of proposal ideas <br /> floating  around the Internet,  and settling on a <br />  plan that your partner will love can be a lot of work.</p>



  </div> 
  <div className="carousel-item flex-col text-center mx-6">
    <img className="w-80 pb-3" src="https://i.ibb.co/QnN4CHT/Screenshot-2023-11-28-165159.png" alt="" />
    <h3 className="text-xl  text-neutral-500">Birthday</h3>
    <h2 className="text-sm py-3 font-bold">Children Bithday party</h2>
    <p className="text-xs"> Tips for Planning the Perfect  <br />Children’s Birthday Party
Children’s birthday <br /> parties are the perfect time to make memories <br /> and celebrate another year of your child <br /> growing older. Creating a birthday party that is <br /> both memorable and fun </p>



  </div> 
 
  <div className="carousel-item flex-col text-center">
    <img className="w-80 h-56 mr-6 pb-3" src="https://i.ibb.co/0tcdpLp/Screenshot-2023-11-28-165402.png" alt="" />
    <h3 className="text-xl  text-neutral-500">Wedding</h3>
    <h2 className="text-sm py-3 font-bold">15 BEST BRIDAL HAIRSTYLES EVER</h2>
    <p className="text-xs">We scoured the length of the internet <br /> to pull some of the prettiest and most <br /> stunning bridal hairstyles you need to bookmark </p>



  </div> 
  <div className="carousel-item flex-col text-center">
    <img className="w-80 pb-3" src="https://i.ibb.co/64DCBXR/Screenshot-2023-11-28-165041.png" alt="" />
    <h3 className="text-xl  text-neutral-500">Shower</h3>
    <h2 className="text-sm py-3 font-bold">CRUSH YOUR SHOWER DAY STYLE!</h2>
    <p className="text-xs">A baby shower is a party centered <br /> on gift-giving to celebrate the delivery or <br /> expected birth of a child.</p>



  </div> 
  <div className="carousel-item flex-col text-center">
    <img className="w-90 h-52 ml-6 pb-3" src="https://i.ibb.co/rdyZGHj/Screenshot-2023-11-28-165239.png" alt="" />
    <h3 className="text-xl  text-neutral-500">Party</h3>
    <h2 className="text-sm py-3 font-bold">
       Top 10 kid's Party Ideas </h2>
    <p className="text-xs">The key to great entertainment <br /> for young children is in the variety of music <br /> and using short, age-appropriate activities. </p>



  </div> 
  
 
</div>
        </div>
        
           <div className="banner">
           <div className="hero min-h-screen">
            <figure><img   src="https://i.ibb.co/Fn1NGcX/Screenshot-2023-11-23-230707.png" className="  rounded-lg " /></figure>
    <div className="hero-content md:flex-row  ">
    
    <div className="bg-slate-100 p-6 font-serif">
        <h4>Thank you so much for such a fun-filled event and for playing a big <br /> role in connecting our  whole company together while we are apart. <br /> Your staff was timely, efficient, friendly and extremely helpful. <br /> Thank you for everything.</h4>
        <div className="avatar flex flex-row gap-8 mt-6  ">

             <div className= " w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img  src="https://i.ibb.co/WBmPFyR/girl2.jpg" />
             </div>
             <h3>Susan <br />
Pacific National Group</h3>
</div>
    </div>
    <div className="text-white text-end">
      <h1 className="text-3xl font-bold">From Our <span className="text-rose-500">Clients</span></h1>
        <p className="py-6  font-serif">
       We are always eager to hear your opinion and share your experience. <br /> Here you can find some of our affectionate customers opinions.</p>
     
    </div>
   
             </div>
          </div>
           </div>
           
           
           
        </div>
    );
};

export default Home;