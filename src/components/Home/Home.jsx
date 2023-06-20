import Banner from "./Banner";
import ChildsFever4Steps from "./ChildsFever4Steps";
import DoctorsScheduleToday from "./DoctorsScheduleToday/DoctorsScheduleToday";
import OurExperts from "./OurExperts/OurExperts";
import OurMedicalCare from "./OurMedicalCare/OurMedicalCare";
import PatientFeedback from "./PatientFeedback/PatientFeedback";
import Subscribe from "./Subscribe/Subscribe";
import TopBanner from "./TopBanner/TopBanner";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
    return (
        <div>
            <TopBanner/>
           <ChildsFever4Steps/>
            <DoctorsScheduleToday/>
            <OurMedicalCare/>
            <Banner/>
            <OurExperts/>
            <PatientFeedback/>
            <UpcomingEvents/>
            <Subscribe/>
        </div>
    );
};

export default Home;