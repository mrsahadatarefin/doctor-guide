// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import bg from "../../../assets/Patient Feedback/Rectangle 41.png";
import patientImg from "../../../assets/Patient Feedback/Ellipse 7.png";

// import required modules
import { Navigation } from "swiper";

const PatientFeedback = () => {
  return (
    <div className="mt-20 max-w-[1440px] m-auto">
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
           <div className="bg-[#6E27E0CF] bg-opacity-25 rounded-lg pb-20">
           <h1 className="text-4xl font-bold text-white text-center pt-10">
                Patient Feedback
              </h1>
             <div className=" flex">
              
              <div  className="lg:px-24 px-5 lg:pt-0 pt-16">
                <img src={patientImg} alt="" className="lg:h-[250px] h-[120px] lg:w-[250px] w-[200px]" />
              </div>
              <div>
                <p className="text-lg text-white pt-5 lg:px-20 px-5">
                  consectetur adipiscing elit. Accumsan duis posuere scelerisque
                  curabitur lorem. Viverra at venenatis, arcu et. Elementum nunc
                  eleifend ipsum mauris ut nunc aliquet nulla aliquet. Lorem <br />
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-xl font-medium text-white lg:px-20 px-5 lg:pt-16 pt-8">TOM COOPPER <br />
                 <span className="text-[#FF8B42] font-light">Managing Director Or Art</span></p>
              </div>
            </div>
           </div>
          </SwiperSlide>
          <SwiperSlide> Coming soon.........</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default PatientFeedback;
