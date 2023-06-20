import logo from "../../assets/logo/Doctor Guide.png";
import logo2 from "../../assets/logo/Vector (2).png";
import icon1 from "../../assets/icons/Frame 144.png";
import icon2 from "../../assets/icons/Frame 145.png";
import icon3 from "../../assets/icons/Frame 146.png";
import contactIcon1 from "../../assets/icons/Vector (2).png";
import contactIcon2 from "../../assets/icons/Vector (3).png";
import contactIcon3 from "../../assets/icons/Vector (4).png";
import { AiOutlineUpload } from 'react-icons/ai';

const Footer = () => {
  return (
   <div className="bg-[#273240] lg:h-664px h-full px-14 mt-20">
     <div className="   grid gap-24 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 pt-24  pb-16 ">
      <div className="">
        <div className="flex">
          <img src={logo2} alt="logo" />
          <img src={logo} alt="" className="h-[20px] mt-6 mx-2" />
        </div>
        <p className="text-white pt-5">
          We help to protect patients and improve medical education and practice
          in the UK by setting standards for students and doctors. We support
          them in achieving and exceeding those standards, and take action when
          they are not met.
        </p>
        <div className="flex pt-5  ">
          <img src={icon1} alt="" className="px-2" />
          <img src={icon2} alt="" className="px-2" />
          <img src={icon3} alt="" className="px-2" />
        </div>
      </div>
      <div>
        <h1 className="text-xl text-white ">Our Services</h1>

        <div className="flex flex-col  mt-10">
          <p className=" pb-2 text-white">Bills & Insurance</p>
          <p className="text-[#D9D9D9] mt-[-20px]">_____________________</p>
          <p className=" pb-2 text-white pt-2">Cancer Screening</p>
          <p className="text-[#D9D9D9] mt-[-20px]">_____________________</p>
          <p className=" pb-2 text-white pt-2">Cardiac Surgery</p>
          <p className="text-[#D9D9D9] mt-[-20px]">_____________________</p>

          <p className=" pb-2 text-white pt-2">Neurology</p>
          <p className="text-[#D9D9D9] mt-[-20px]">_____________________</p>
          <p className=" pb-2 text-white pt-2">Covid-19 Vaccine</p>
          <p className="text-[#D9D9D9] mt-[-20px]">_____________________</p>
        </div>
      </div>
      <div>
        <h1 className="text-xl text-white ">Contact Us</h1>
        <div className="flex flex-col  mt-10">
          <div className="flex ">
            <img src={contactIcon1} alt="" className="h-[25px] pr-10" />
            <p className="text-white">
              1234 Uttara Khal Pahr, Image Osman Center, Sonargao, Janapath,
            </p>
          </div>
          <div className="flex mt-10 ">
            <img src={contactIcon2} alt="" className="h-[25px] pr-10" />
            <p className="text-white">+09876543211</p>
          </div>
          <div className="flex mt-10 ">
            <img src={contactIcon3} alt="" className="h-[25px] pr-10" />
            <p className="text-white">doctorguide@example.com</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-white text-xl">Doctors Schedule</h1>
        <p className="text-white mt-10"> 
          
          At vero eos et accusam et justou dolores et ea rebum tet clita kasd
          gubergren no sea takimata.
        </p>
        <button className="flex mt-10 bg-[#FF8B42] hover:bg-black  px-6 py-4 rounded-md text-lg text-white font-semibold  "
     > <span className=" px-3"><AiOutlineUpload color="white" size={25}/> </span> View Schedule </button>
        
      </div>
     
    </div>
     <hr  />
    <div className=" grid grid-cols-1 lg:grid-cols-2 place-content-between pt-10 pb-10 ">
     <div><h1 className="text-sm text-white ">Copyright © 2022. All Rights Reserved. Made with  by Solutya.</h1></div>
    <div className="flex pt-3 lg:pt-0   ">
        <h1 className="text-sm text-white px-3 ">Latest news</h1>
        <h1 className="text-sm text-white px-3 "> Privacy Policy</h1>
        <h1 className="text-sm text-white px-3 ">Terms & Conditions</h1>
    </div>
    </div>

   </div>
  );
};

export default Footer;
