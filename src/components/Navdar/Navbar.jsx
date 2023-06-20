import  { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../../src/assets/logo/Doctor Guide.png'
import logo1 from '../../../src/assets/logo/Vector (2).png'

import { MdKeyboardArrowDown } from 'react-icons/md'

const NavBar = () => {
    const [nav,setNav] = useState(false) 

    const links = [
        {
          id: 1,
          link: "Home",
        },
        {
          id: 2,
          link: "FEATURES",
        },
        {
          id: 3,
          link: "DEPARTMENT",
        },
        {
          id: 4,
          link: "EVENT",
        },
        {
          id: 5,
          link: "CONTACT US",
        },
        
        
      ];
  return (
    <div className=" px-4 bg-black flex justify-between items-center w-full h-20 text-white sticky 
     top-0 ">
      
        
      <div className="flex mt-3 mb-3 mx-5">
          <img src={logo1} alt="logo" />
          <img src={logo} alt="" className="h-[20px] mt-6 mx-2" />
        </div>
     
      <ul className=" hidden md:flex">
        {links.map((link,id) => (
          <li
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200 flex"
            key={id} 
            
          >
            {link.link}
            <MdKeyboardArrowDown size={20} className="mt-1"/>
            
          </li>
        ))}
        
      </ul>
      <div className="text-lg lg:flex  hidden mr-40">
       <p className="px-5 font-medium bg-[#FF8B42] mx-3 rounded-xl py-3">LOGIN</p>
       <p className="px-5 font-medium bg-[#FF8B42] mx-3 rounded-xl py-3">SIGNUP</p>
    </div>
      <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
       {
        nav? <FaTimes size={30} /> : <FaBars size={30}/>
       }


       {nav && (
    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
   {links.map(({link,id}) => (
    <li
    className="px-4 cursor-pointer capitalize py-6 text-4xl"
      key={id}
    >
    <Link onClick={()=> setNav(!nav)}  > {link}</Link>
    </li>
  ))}
  
  
 
 </ul>
       ) }
      
      </div>
      
    </div>
  );
};

export default NavBar;
