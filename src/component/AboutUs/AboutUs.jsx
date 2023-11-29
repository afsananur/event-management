import Header from "../home/Header";

const AboutUs = () => {
    return (
    <div>
         <Header
></Header> 
       <div className="px-8 py-8">
            <h2 className="text-3xl font-semibold text-center py-6 ">About <span className="text-pink-500">Us</span></h2>
            <div className="flex gap-6">
                <div>
                    <img  src="https://i.ibb.co/LNVxh4Z/Screenshot-2023-11-24-122454.png" alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">Stealler Soirees</h1>
                    <h3 className="text-slate-600 font-semibold py-6">We would love to meet up and chat about <br /> how we can make your dream wedding happen!</h3>
                    <p>Professional Wedding & Event Planner.As you are here in best wedding <br /> planner’s website in Bangladesh. Therefore, we may consider that you have <br /> upcoming wedding ceremony of you or your nearest one’s! As you are finding <br /> the best Wedding Planner BD, we may say that yes you are in right place.<br/>
                    </p>
                    <p className="py-3">A wedding is a memorable and very important thing for our lives.<br/> Ananta Events & Entertainment provides the best wedding event planning <br /> in Bangladesh.  As a professional Wedding planning organization <br /> – We have a qualified, experienced and best wedding planner group. <br /> We can introduce (ways of reaching goals) to face/deal with our customer’s needs in a meaningful way.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AboutUs;