import img from '../../../assets/Our Experts/Rectangle 28 (1).png'

const DoctorsScheduleToday = () => {
    const schedules = [
        { date :"08:00",
        name:'General Practitioner',
        title:'Dr. Robbert Algazali' },
        { date :"06:00",
        name:'Dentist Specialist',
        title:' Dr.  Algazali Robbert' },
        { date :"08:00",
        name:' Practitioner General',
        title:'Dr. Shuvo Algazali' },
        { date :"02:00",
        name:'Pediatric',
        title:'Dr. Sahadat arefin' },
        { date :"05:00",
        name:'General Pediatric',
        title:'Dr. Sadik' },


       
   
    ]
    return (
        <div data-aos="zoom-in-left" className="mt-20 max-w-[1440px]   m-auto  ">
              <h1 className='text-4xl text-bold font-bold  pt-5'>Doctor’s Schedule Today</h1>
           <div className=' grid grid-cols-1 lg:grid-cols-2 gap-36 '>
           <div className='pt-10' >
                    {schedules.map(schedule =><>
                    <div className='flex px-5 '>
                    <div>
                    <h1 className='text-2xl font-medium text-red-400  lg:pr-6  pr-16 pt-10'>{schedule.date}</h1>
                    </div>
                     <div className='pt-6 '>
                     <h1 className='text-lg '>{schedule.name}</h1>
                     <p className='text-md'>{schedule.title}</p>
                     
                        </div>  
                        
                    </div>
                    <p>_____________________________________________</p> 
                    </> ) }
          </div>
            
            <div >
                <img src={img} alt="" className=' h-[550px] w-full' />
            </div>
            </div>
           </div>
        
    );
};

export default DoctorsScheduleToday;