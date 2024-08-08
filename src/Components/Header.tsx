import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Link } from 'react-router-dom';

const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Cars', to: '/cars' },
    { name: 'Booking', to: '/booking' },
    { name: 'AboutUs', to: '/aboutus' },
    { name: 'ContactUs', to: '/contactus' },
    { name: 'Blogs', to: '#' }
];
function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="px-5">
            <nav className="flex items-center justify-between p-4 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/" className="text-2xl font-bold -m-1.5 p-1.5">
                        XpressPro
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        menu
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.to} className="text-md font-semibold leading-6 text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
                    {localStorage.getItem('userInfo') ? (
                        <button className="border border-green-600 text-sm leading-6 text-gray-900 bg-white hover:text-white p-1 px-3 rounded-md hover:bg-green-800">Log out</button>
                    ) : (
                        <>
                            <Link to="/login" className="border border-green-600 text-sm leading-6 text-gray-900 bg-white hover:text-white p-1 px-3 rounded-md hover:bg-green-800">
                                Log in
                            </Link>
                            <Link to="#" className="bg-green-600 hover:bg-green-800 text-sm  leading-6 text-white p-1 px-2 rounded-md">
                                Sign Up
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
                        <div className="flex gap-3">
                            <a href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Log in
                            </a>
                            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                Close
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className=" py-6">
                                {navigation.map((item) => (
                                    <Link key={item.name} to={item.to} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
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
