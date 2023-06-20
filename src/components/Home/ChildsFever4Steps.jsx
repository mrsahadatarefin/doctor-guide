import icon from '../../../src/assets/icons/Vector-id.png'
import img from '../../../src/assets/Our Experts/Rectangle 46 (1).png'
import icon1 from '../../../src/assets/icons/Vector-doctor.png'


const ChildsFever4Steps = () => {
    
    const items = [
        {
            img:icon,
            title:'Cras sit sed nec a nunc'
        },
        {
            img:icon,
            title:'Tempor mauris mauris in'
        },
        {
            img:icon,
            title:'Nibh turpis praesent pretium'
        },
        {
            img:icon,
            title:'Cras sit sed nec a nunc'
        },
    ]

    return (
        <div data-aos="fade-right" className="mt-20 max-w-[1440px] m-auto grid grid-cols-1 lg:grid-cols-2 ">
            <div className='relative'>
                <div className='flex bg-white drop-shadow-xl w-[250px]   px-4 py-3 rounded-3xl'>
                  <img src={icon1} alt="" className=' bg-[#6E27E0] p-2 rounded-full '  />
                   <div className='pl-5 '>
                    <h1>Consult Online</h1>
                    <p>Best Solution</p>
                    </div>  
                </div>
              <div className='  '>  <img src={img} alt="" /></div>
               
              <div className='flex bg-white drop-shadow-xl lg:w-[250px]   absolute lg:right-4 right-0 lg:bottom-40 bottom-5  px-4 py-3 rounded-3xl'>
                  <img src={icon1} alt="" className=' bg-[#0089BA] p-2 rounded-full '  />
                   <div className='pl-5 '>
                    <h1>Consult Online</h1>
                    <p>Best Solution</p>
                    </div>  
                </div>
                </div>
            
            <div className='mt-16'>
             <h1 className='text-4xl font-bold'>Sick Kid? How to Deal with a <br /> Child’s Fever: 4 Steps</h1>
             <div className='mt-8 '>
              {
                items.map(item => <>
                
                <div className='flex '>
                <img src={item.img} alt="" className='pr-10 pt-10'  />
                 <p className='text-xl  pt-10'> {item.title}</p>
                </div>
                
                </>)
              }
        
             </div>
           
            </div>
        </div>
    );
};

export default ChildsFever4Steps;