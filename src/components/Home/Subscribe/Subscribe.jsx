import img from "../../../assets/Subscribe/kisspng-physician-uniform-scrubs-white-coat-medicine-foreign-doctor-material-5a68c8b33322b6 1.png";

const Subscribe = () => {
  return (
    <div>
      <div className=" mt-36 max-w-[1440px]   grid lg:grid-cols-2 grid-cols-1 m-auto  bg-[#0089BA] lg:h-[438px] h-full rounded-2xl">
        <div className=" lg:pl-16 pl-0">
          <img
            src={img}
            alt=""
            className="hidden h-[535px]  md:block lg:block lg:w-1/2  rounded-lg  -mt-24   "
          />
        </div>
        <div className="lg:pt-28 pt-8">
          <h1 className="text-4xl font-bold text-white  lg:px-0 px-5 ">
            Subscribe Now
          </h1>
          <p className="text-lg text-white pt-6 pb-6 lg:px-0 px-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>
          <div className="bg-white   lg:pl-5 pl-0 lg:mr-20 mr-0 py-3 rounded-md  ">
            <input
              type="text"
              placeholder="Your email here"
              className="lg:h-16 h-16 lg:w-96 w-full "
            />
            <button className="h-16   bg-[#FF8B42] hover:bg-black lg:w-48 w-full px-20  py-4 rounded-md text-lg text-white font-semibold  ">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
