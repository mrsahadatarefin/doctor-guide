import img1 from '../../../assets/Our Medical Care/Rectangle 26 (1).png'
import img2 from '../../../assets/Our Medical Care/Rectangle 26 (2).png'
import img3 from '../../../assets/Our Medical Care/Rectangle 26 (3).png'
import img4 from '../../../assets/Our Medical Care/Rectangle 26 (4).png'
import img5 from '../../../assets/Our Medical Care/Rectangle 26 (5).png'
import img6 from '../../../assets/Our Medical Care/Rectangle 26 (6).png'
import img7 from '../../../assets/Our Medical Care/Rectangle 26 (7).png'
import img8 from '../../../assets/Our Medical Care/Rectangle 26 (8).png'
import SingleCare from './SingleCare'

const OurMedicalCare = () => {

    const ourMedicalCares = [
        
        {
          img:img1,
          title:"Orthopedic Clinic"
        },
        {
          img:img2,
          title:"Cardiac Surgery"
        },
        {
          img:img3,
          title:"Cancer Screening"
        },
        {
          img:img4,
          title:"Neurology"
        },
        {
          img:img5,
          title:"Pediatric & Adult Audiology"
        },
        {
          img:img6,
          title:"Neurology"
        },
        {
          img:img7,
          title:"Hearing Tests & Aids"
        },
        {
          img:img8,
          title:"Orthopedic Clinic"
        },
    
    ]
  return (
    <div data-aos="zoom-in-right" className="mt-20 max-w-[1440px] m-auto">
      <h1 className="text-center text-5xl font-bold ">Our Medical Care</h1>
      <p className="text-center text-xl  text-black pt-8 font-medium">Services We Provide</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-16 '>
        {
            ourMedicalCares.map(care => <SingleCare key={care.title} care={care}></SingleCare> )
        }
      </div>
     <p className='text-sm font-bold text-center bg-[#FF8B42] px-8 py-3 text-white mt-10  m-auto w-[300px]  hover:bg-black  justify-center'> LOAD MORE DEPARTMENTS</p>
    </div>
  );
};

export default OurMedicalCare;
