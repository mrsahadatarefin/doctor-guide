import { TiShoppingBag } from "react-icons/ti";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import img1 from "../../../assets/upcoming event/Rectangle 42.png";
import img2 from "../../../assets/upcoming event/Rectangle 42.png";

const UpcomingEvents = () => {
  return (
    <div data-aos="zoom-in-right" className="mt-20 max-w-[1440px] m-auto">
      <h1 className="text-center text-5xl font-bold ">Upcoming Events</h1>
      <p className="text-center text-lg pt-5">
        Maecenas augue nibh, congue ut ante id, tempus vestibulum sem. Praesent
        interdum leo sit amet sapien porta interdum.<br /> consectetur adipiscing
        elit. Donec fermentum augue quis augue ornare,
         eget faucibus felis pharetra. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2  border-slate-500 border-[1.5px] ">
        <div className=" relative">
          <img src={img1} alt="" className="w-[1700px] h-[500px]  " />

          <div className=" absolute top-5 right-5">
            {" "}
            <p className="text-center bg-[#6E27E0] bg-opacity-75  text-white p-6 h-[120px] w-[120px] ">
              <span className="text-2xl font-bold"> 12</span> <br /> DEC, 2022
            </p>
          </div>
        </div>
        <div className="lg:pl-16 pl-0 mx-10 ">
          <h1 className="text-2xl font-bold pt-6">
            How to lead a good healthy life
          </h1>
          <div className="flex pt-5">
            <div className="flex ">
              <TiShoppingBag size={25} color="#FF8B42" />
              <p className="px-2">15 Oct, 2019</p>
            </div>
            <div className="flex">
              <AiOutlineClockCircle size={25} color="#FF8B42" />
              <p className="px-2">8:00 AM - 5:00 PM</p>
            </div>
            <div className="flex">
              <CiLocationOn size={25} color="#FF8B42" />
              <p className="px-2">Uttara, TX 70240</p>
            </div>
          </div>
          <p className="pt-8">
            Early had add equal china quiet visit. Appear an manner as no limits
            either praise in. In in written on charmed justice is amiable
            farther besides. Law insensible middletons unsatiable for apartments
            boy delightful unreserved. Early had add equal china quiet visit.
            Appear an manner as no limits either praise in. In in written on
            charmed justice is amiable farther besides. Law insensible
            middletons unsatiable for apartments boy delightful unreserved.
          </p>
          <div className="pt-10 mb-10 lg:mb-0 ">
            <button className="text-lg mx-4 bg-[#FF8B42] lg:px-6 px-4 lg:py-3 py-2 text-white rounded-md font-medium mb-5  hover:bg-black ">
              Book Now
            </button>
            <button className="text-lg mx-4  lg:px-6 px-4 lg:py-3 py-2 border-slate-500 border-[1.5px] rounded-md  font-medium hover:bg-black hover:text-white ">
              10 Available
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2  border-slate-500 border-[1.5px] ">
        
        <div className="lg:pl-16 pl-0 mx-10 ">
          <h1 className="text-2xl font-bold pt-6">
            How to get a good healthy life
          </h1>
          <div className="flex pt-5">
            <div className="flex ">
              <TiShoppingBag size={25} color="#FF8B42" />
              <p className="px-2">12 Oct, 2013</p>
            </div>
            <div className="flex">
              <AiOutlineClockCircle size={25} color="#FF8B42" />
              <p className="px-2">3:00 AM - 5:00 PM</p>
            </div>
            <div className="flex">
              <CiLocationOn size={25} color="#FF8B42" />
              <p className="px-2">Uttara, TX 70240</p>
            </div>
          </div>
          <p className="pt-8">
             Appear an manner as no limits
            either praise in. In in written on charmed justice is amiable
            farther besides. Law insensible middletons unsatiable for apartments
            boy delightful unreserved. Early had add equal china quiet visit.
            Appear an manner as no limits either praise in. In in written on
            charmed justice is amiable farther besides. Law insensible
            middletons unsatiable for apartments boy delightful unreserved.
          </p>
          <div className="pt-10 mb-10 lg:mb-0 ">
            <button className="text-lg mx-4 bg-[#FF8B42] lg:px-6 px-4 lg:py-3 py-2 mb-5 text-white rounded-md font-medium  hover:bg-black ">
              Book Now
            </button>
            <button className="text-lg mx-4  lg:px-6 px-4 lg:py-3 py-2 border-slate-500 border-[1.5px] rounded-md font-medium hover:bg-black hover:text-white ">
              10 Available
            </button>
          </div>
        </div>
        <div className=" relative">
          <img src={img2} alt="" className="w-[1700px] h-[500px]  " />

          <div className=" absolute top-5 right-5">
            {" "}
            <p className="text-center bg-[#6E27E0] bg-opacity-75  text-white p-6 h-[120px] w-[120px] ">
              <span className="text-2xl font-bold"> 12</span> <br /> DEC, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
