import img from '../../assets/Our Experts/denta-in-vietnam1.jpg'
import img1 from '../../../src/assets/banner/Vector-1.png'
import img2 from '../../../src/assets/banner/bed.png'
import img3 from '../../../src/assets/banner/Vector-2.png'
import img4 from '../../../src/assets/banner/Vector-3.png'

const Banner = () => {
    const items = [
        { img:img1,
            name:'Medical Experts',
            title:'50'
        },
        { img:img2,
            name:'Hospital Rooms',
            title:'500'
        },
        { img:img3,
            name:'Awwwards Win',
            title:'50'
        },
        { img:img4,
            name:'Happy Patients',
            title:'5000'
        },
    ]

    return (
        <div className="mt-20 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 relative lg:pb-0 pb-20 lg:mb-0 mb-28  ">
         <img src={img} alt="" className='w-full lg:h-[500px] h-[300px] opacity-50' />
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-28 gap-5   justify-items-center absolute lg:top-[25%] top-[10%] lg:left-[18%] left-[10px] md:left-[15%]'>
            {
                items.map(item =><>
                
                <div className=' ' >
                    <img src={item.img} alt="" className='lg:pl-8 pl-2 lg:pt-3 pt-1 lg:h-[120px] h-[50px] m-auto' />
                    <p className='lg:text-2xl text-xl font-bold text-white text-center lg:pt-3 pt-1'>{item.title}</p>
                    <p className='text-white'>__________________________________</p>
                    <p className='lg:text-2xl text-xl font-bold text-white text-center lg:pt-3 pt-1'>{item.name}</p>
                </div>
                
                </>)
            }

            </div>  
        </div>
    );
};

export default Banner;