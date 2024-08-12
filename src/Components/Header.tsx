import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import { useLogoutApiMutation } from '../redux/features/auth/authApiSlice';
import { logout } from '../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Cars', to: '/cars' },
    { name: 'Booking', to: '/booking' },
    { name: 'About Us', to: '/aboutus' },
    { name: 'Contact Us', to: '/contactus' },
    { name: 'Blogs', to: '/blogs' }
];

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();

    const [logoutApi] = useLogoutApiMutation();

    const handleLogOut = async () => {
        try {
            await logoutApi({}).unwrap();
            dispatch(logout());
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <div className="px-5 fixed top-10 left-0 right-0 z-50 bg-white shadow-md ">
            <img
                src="https://t3.ftcdn.net/jpg/04/37/54/90/360_F_437549071_7uQvtqTIgd50l2r0OZ1g0zJnLwnzJmIG.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <nav className="flex items-center justify-between p-2 lg:px-8 max-w-screen-2xl mx-auto">
                <div className="flex lg:flex-1">
                    <Link to="/" className="text-2xl font-bold -m-1.5 p-1.5">
                        XpressPro
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <div className="flex flex-1 justify-end gap-2 pr-3">
                        {localStorage.getItem('userInfo') ? (
                            <button
                                onClick={handleLogOut}
                                type="button"
                                className="border border-green-600 text-sm leading-6 text-gray-900 bg-white hover:text-white p-1 px-3 rounded-md hover:bg-green-800"
                            >
                                Log out
                            </button>
                        ) : (
                            <>
                                <a href="/login" className="border bg-green-600 text-sm leading-6 text-white hover:text-white p-1 px-3 rounded-md hover:bg-green-800">
                                    Log in
                                </a>
                            </>
                        )}
                    </div>
                    <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.to} className={`text-md font-semibold leading-6 text-gray-900 ${location.pathname === item.to ? 'bg-gray-700 text-white' : ''} p-2 rounded`}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
                    {localStorage.getItem('userInfo') ? (
                        <button
                            onClick={handleLogOut}
                            type="button"
                            className="border border-green-600 text-sm leading-6 text-gray-900 bg-white hover:text-white p-1 px-3 rounded-md hover:bg-green-800"
                        >
                            Log out
                        </button>
                    ) : (
                        <>
                            <Link to="/login" className="border bg-green-600 text-sm leading-6  text-white hover:text-white p-1 px-3 rounded-md hover:bg-green-800">
                                Log in
                            </Link>
                        </>
                    )}
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="text-xl font-bold -m-1.5 p-1.5">
                            XpressPro
                        </Link>
                        <div className="flex flex-1 justify-end gap-2 pr-3">
                            {localStorage.getItem('userInfo') ? (
                                <div className="flex gap-3 items-center">
                                    
                                    <button
                                        onClick={handleLogOut}
                                        type="button"
                                        className="border border-green-600 text-sm leading-6 text-gray-900 bg-white hover:text-white p-1 px-3 rounded-md hover:bg-green-800"
                                    >
                                        Log out
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <a href="/login" className="border bg-green-600 text-sm leading-6 text-white hover:text-white p-1 px-3 rounded-md hover:bg-green-800">
                                        Log in
                                    </a>
                                </>
                            )}
                        </div>
                        <div className="flex gap-3">
                            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <i className="fas fa-times text-xl"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={handleLinkClick}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </div>
    );
}

export default Header;
