import img1 from '../../../assets/Our Experts/beautiful-young.avif'
import img2 from '../../../assets/Our Experts/Rectangle 108.png'
import img3 from '../../../assets/Our Experts/doctor-3.jpg'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
 import icon from '../../../assets/icons/🦆 icon _bookmark_.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";




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
    <div data-aos="zoom-in-right" className="mt-20 max-w-[1440px] m-auto">
      <h1 className="text-center text-4xl font-bold ">Our Medical Experts</h1>
      <p className="text-center text-lg pt-5">
        adipiscing elit. Donec fermentum 
        augue quis augue ornare, eget <br /> faucibus felis pharetra. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <p className="text-end text-xl font-medium mx-10">view all</p>
      <div className='gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        
      <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
           experts.map(im=><>
            <SwiperSlide>
              <div className=''>
            <img className='mt-10 lg:h-[300px] h-[200px] lg:w-[400px] w-200px rounded-t-3xl  ' src={im.img} alt="" /></div>
            <div className=' border-sky-300 rounded-b-xl border-[1.5px] px-5 pb-2'>
          <div className='flex justify-between'>
          <div>
              <h1 className=' lg:text-xl text-md font-bold pt-5'>{im.name}</h1>
               <h1 className='text-md font-light pt-2'>{im.title}</h1>
             </div>
             <div>
              <img src={icon} alt="" className='pt-5'  />
             </div>
          </div>
              <div className='lg:flex  flex-col justify-between pt-5'>
             
              <p className='lg:w-1/2 w-full'>{im.dis.slice(0,50)}.....</p>
           
             
             <button className=' lg:w-full  hover:bg-[#0089BA] text-md font-medium  lg:px-5 px-0 py-1 mt-3 mb-3  rounded-md  text-white bg-[#FF8B42] text-sm'> Book now</button>
            
                </div> 
               
            </div>
            
            </SwiperSlide>
           </>)
        }
        
      </Swiper>
    </>
        
      </div>
    </div>
  );
};

export default OurExperts;
