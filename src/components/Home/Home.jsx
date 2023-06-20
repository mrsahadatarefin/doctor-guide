import Banner from "./Banner";
import DoctorsScheduleToday from "./DoctorsScheduleToday/DoctorsScheduleToday";
import OurExperts from "./OurExperts/OurExperts";
import OurMedicalCare from "./OurMedicalCare/OurMedicalCare";
import PatientFeedback from "./PatientFeedback/PatientFeedback";
import Subscribe from "./Subscribe/Subscribe";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";


const Home = () => {
    return (
        <div>
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