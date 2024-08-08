import { Link } from 'react-router-dom';

function Header2() {
    return (
        <>
            <div className="bg-white p-2 px-[53px] flex justify-between fixed top-0 left-0 right-0 z-50 shadow-md">
                <div className="flex gap-5 text-sm">
                    <label>
                        <i className="fa fa-phone text-green-600 pr-2 "></i>+251 912 3456 675
                    </label>
                    <label className="hidden md:block">
                        <i className="fa fa-envelope text-green-600 pr-2 "></i>
                        contact@xpresspro.com
                    </label>
                    <label className="hidden md:block">
                        <i className="fa fa-clock text-green-600 pr-2"></i>Mon - Fri 8:00 - 18:00
                    </label>
                </div>

                <div className="flex gap-4 ">
                    <Link to="/" className=" text-md">
                        <i className="fab fa-facebook"></i>
                    </Link>
                    <Link to="/" className=" text-md">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="/" className="text-md">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="/" className="text-md">
                        <i className="fab fa-telegram"></i>
                    </Link>
                    <Link to="/" className="text-md">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            </div>
            <hr className="text-gray-700 pb-2 px-20 mt-[60px]" />
        </>
    );
}

export default Header2;
