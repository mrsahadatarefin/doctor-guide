

const SingleCare = ({care}) => {
    const {img,title}=care
    return (
        <div className="w-full  ">
            <img src={img} alt="" className="w-full"  />
            <p className="text-xl font-bold text-center pt-2 pb-2 text-white bg-[#6E27E0] ">{title}</p>
            
        </div>
    );
};

export default SingleCare;