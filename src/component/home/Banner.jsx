import { Link } from 'react-router-dom';
import '../home/Banner.css'
const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item  relative md:h-[100vh] h-96  w-full">
          <img src='https://i.ibb.co/TbWNFxp/wedding-couple-france.jpg' className="w-full " />
          <div className="text-center banner-overlay p-4 absolute  lg:right-96 right-24 transform -translate-y-1/2 top-1/2 ">
            <h2 className="text-6xl font-bold text-rose-500" ><span className="text-white">Let us help<br />   You to </span ><br /> Create</h2>
            <h3 className="font-semibold text-white py-4">We would love to meet up and chat about how we can make <br /> YOUR DREAM wedding happen!</h3>
            <button ><Link to={`/services/`} className="btn  btn-outline text-white ">See More</Link></button>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            
            <a href="#slide4" className="btn btn-circle">❮</a> 
            
            <a href="#slide2" className="btn btn-circle">❯</a>
           
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative  md:h-[100vh] h-96  w-full">
          <img src="https://i.ibb.co/B3bd4yz/children-celebrating-birthday.jpg" className="w-full" />

          <div className="text-center  overlay  absolute  lg:right-96 right-24 transform -translate-y-1/2 top-1/2  p-4">
            <h2 className="text-6xl font-bold text-white" >Our Personal<br />  <span className='text-rose-500'>Dreame</span>
            Maker</h2>
            <h3 className="font-semibold text-white py-4 ">We believe that it is all about the <br /> BIG DREAMS and the small details!</h3>
            <button ><Link to={`/services/`} className="btn  btn-outline text-white ">See More</Link></button>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
          
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative  md:h-[100vh] h-96 w-full">
          <img src="https://i.ibb.co/803HZ7L/friends-having-fun-while-new-year-s-eve.jpg" className="w-full" />

          <div className="text-center  absolute  lg:right-96 right-24 transform-translate-y-1/2 top-1/2 banner-overlay p-4 ">
            <h2 className="text-6xl font-bold text-white" >We create  <br /> <span className='text-rose-500'>You</span> <br />
           celebrate</h2>
            <h3 className="font-semibold text-white py-4 ">We would love to meet up and chat about how we can <br /> make  YOUR CElEBRATION happen!</h3>
            <button ><Link to={`/services/`} className="btn  btn-outline text-white ">See More</Link></button>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
          
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        
      </div>
    );
};

export default Banner;