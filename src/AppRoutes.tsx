import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cars from './Pages/Cars';
import Booking from './Pages/Booking';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Login from './Pages/AuthPages/Login';
import Signup from './Pages/AuthPages/Signup';
import Review from './Pages/Review';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cars" element={<Cars />} />
            <Route path="booking" element={<Booking />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="review" element={<Review />} />
        </Routes>
    );
}

export default AppRoutes;
