import img1 from '../../../assets/Our Experts/Rectangle 13.png'
import img2 from '../../../assets/Our Experts/Rectangle 108.png'
import img3 from '../../../assets/Our Experts/doctor-3.jpg'
import Expert from './Expert';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination } from "swiper";

const OurExperts = () => {
 const experts = [
    {
   img :img1,
   name:"Dr. Emrul Kayes",
    title:'MBBS, FCFS, BCS, BSCBS',
    dis:'A dentist is a healthcare provider who diagnoses and treats oral health conditions. Taking good care of your teeth and gums can help you reduce your risk for other serious health conditions'
 },
    {
   img :img2,
   name:"Dr. Kayes arefin",
    title:'MBBS, FCFS,  BSCBS',
    dis:' who diagnoses and treats oral health conditions. Taking good care of your teeth and gums can help you reduce your risk for other serious health conditions'
 },
    {
   img :img3,
   name:"Dr. Pradip Patel",
    title:'MBBS, FCFS,  BSCBS',
    dis:'healthcare provider who diagnoses and treats oral health conditions. Taking good care of your teeth and gums can help you reduce your risk for other serious health conditions'
 }
]

  return (
    <div className="mt-20 max-w-[1440px] m-auto">
      <h1 className="text-center text-4xl font-bold ">Our Medical Experts</h1>
      <p className="text-center text-lg pt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum <br />
        augue quis augue ornare, eget faucibus felis pharetra. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <p className="text-end text-xl font-medium mx-10">view all</p>
      <div className='gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
         {experts.map(expert =>    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        {expert.name}
        {expert.name}
        {expert.name}
        {expert.name}
        {expert.name}
        {expert.name}
       </SwiperSlide>
        
        
      </Swiper>
    </>     )}
      </div>
    </div>
  );
};

export default OurExperts;
