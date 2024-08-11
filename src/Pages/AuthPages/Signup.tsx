import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRegistrationMutation } from '../../redux/features/auth/authApiSlice';
import { toast } from 'react-toastify';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [registration, { isLoading }] = useRegistrationMutation();
    const navigate = useNavigate();

    const registrationHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        try {
            const res = await registration({ email, password, confirmPassword, firstName, lastName, phoneNumber }).unwrap();
            if (res.success) {
                toast.success(res?.message);
                navigate('/login');
            }
        } catch (error: any) {
            toast.error(error.data.message);
        }
    };
    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-10">
                <div className="w-full bg-white rounded-lg shadow-md md:mt-0 sm:max-w-2xl xl:p-0">
                    <div className=" gap-3 text-gray-800 max-w-2xl py-5 p-5">
                        <h1 className="text-xl font-bold text-gray-900 md:text-2xl flex justify-center pb-3">
                            Don't have an account?
                            <span className="text-green-600"> Register now.</span>
                        </h1>
                        <p>
                            Welcome to Rentaly. We're excited to have you on board. By creating an account with us, you'll gain access to a range of benefits and convenient features that will enhance
                            your car rental experience.
                        </p>
                    </div>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6" onSubmit={registrationHandler}>
                            <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                                        First Name
                                    </label>
                                    <div className="flex">
                                        <div className="fas fa-user text-gray-700 border border-gray-300 rounded-s-lg bg-gray-50 p-3 items-center"></div>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-e-lg block w-full p-2.5"
                                            placeholder="Enter first name"
                                            required
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">
                                        Last Name
                                    </label>
                                    <div className="flex">
                                        <div className="fas fa-user text-gray-700 border border-gray-300 rounded-s-lg bg-gray-50 p-3 items-center"></div>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-e-lg block w-full p-2.5"
                                            placeholder="Enter last name"
                                            required
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                        Your email
                                    </label>
                                    <div className="flex">
                                        <div className="fas fa-envelope text-gray-700 border border-gray-300 rounded-s-lg bg-gray-50 p-3 items-center"></div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-e-lg block w-full p-2.5"
                                            placeholder="Enter email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">
                                        Phone Number
                                    </label>
                                    <div className="flex">
                                        <div className="fas fa-phone text-gray-700 border border-gray-300 rounded-s-lg bg-gray-50 p-3 items-center"></div>
                                        <input
                                            type="number"
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-e-lg block w-full p-2.5"
                                            placeholder="Enter phone number"
                                            required
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                        Password
                                    </label>
                                    <div className="flex items-center relative">
                                        <div className="fas fa-lock text-gray-700 border border-gray-300 rounded-s-lg bg-gray-50 p-3 items-center"></div>
                                        <input
                                            name="password"
                                            id="password"
                                            placeholder="Enter password"
                                            required
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-e-lg block w-full p-2.5"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">
                                        Confirm password
                                    </label>
                                    <div className="flex items-center relative">
                                        <div className="fas fa-lock text-gray-700 border border-gray-300 rounded-s-lg bg-gray-50 p-3 items-center"></div>
                                        <input
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            placeholder="Confirm password"
                                            required
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-e-lg block w-full p-2.5"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500">
                                        I accept the{' '}
                                        <a href="#" className="font-medium hover:underline text-black">
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <button disabled={isLoading} type="submit" className="w-full text-white bg-green-600 hover:opacity-90 font-medium rounded-lg  px-5 py-2.5 text-center">
                                {isLoading ? 'Registering....' : 'Create an acount'}
                            </button>
                            <p className="text-sm  text-gray-600">
                                Already have an account?
                                <Link to="/login" className="font-medium hover:underline text-green-600">
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;
