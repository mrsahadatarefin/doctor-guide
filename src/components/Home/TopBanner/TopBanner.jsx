import img1 from '../../../assets/Our Experts/ghj (1).png'
import img2 from '../../../assets/Our Experts/Capture (1).png'

const TopBanner = () => {

  return (
    <div data-aos="fade-up" className="mt-20 max-w-[1440px] m-auto grid grid-cols-1 lg:grid-cols-2 lg:px-20 px-0">
      <div className='lg:pr-20 pr-2 mt-32 mb-20 lg:mb-0'>
        <h1 className="text-4xl font-bold">Find The Care You Need </h1>
        <p className="text-xl pt-5 pb-8">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br />
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="text-xl font-semibold px-4 py-2 bg-[#FF8B42] rounded-md text-white hover:bg-black">Make Appointment</button>
      </div>
      <div className='lg:flex flex-1 '>
        <img src={img1} alt="" className='h-[500px] w-full mt-5 lg:mt-0' />
        <img src={img2} alt="" className='h-[500px] w-full' />
      </div>
    </div>
  );
};

export default TopBanner;
