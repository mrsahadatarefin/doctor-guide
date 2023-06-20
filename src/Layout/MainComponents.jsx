
import Navbar from '../components/Navdar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const MainComponents = () => {
    return (
        <div>
           <Navbar/> 
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default MainComponents;