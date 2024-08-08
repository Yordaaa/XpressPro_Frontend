import AppRoutes from './AppRoutes';
import Footer from './Components/Footer';
import Header2 from './Components/Header2';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
    return (
        <>
            <Header2 />
            <AppRoutes />
            <Footer />
            <ToastContainer />
        </>
    );
}
