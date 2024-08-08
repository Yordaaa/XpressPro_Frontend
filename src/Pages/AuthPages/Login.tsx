import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import { useState } from 'react';
import { useLoginMutation } from '../../redux/features/auth/authApiSlice';
import { toast } from 'react-toastify';
import { setCredentials } from '../../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res.userInfo }));
            toast.success('Logged in successfully');
            navigate('/');
        } catch (error: any) {
            toast.error(error.data.message);
        }
    };
    return (
        <section>
            <Header />
            <div className="flex flex-col items-center mt-10 px-6 py-8 mx-auto md:h-[70vh] lg:py-0">
                <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 border">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-semibold  text-gray-900 md:text-2xl flex">Welcome back</h1>

                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div className="relative items-center">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Email
                                </label>
                                <div className="flex">
                                    <div className="fas fa-envelope text-gray-700 border border-gray-300 rounded-s-lg bg-gray-50 p-3 items-center"></div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="pl-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-e-lg block w-full p-2.5"
                                        placeholder="Enter email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="flex items-center relative">
                                    <div className="fas fa-lock text-gray-700 border border-gray-300 rounded-s-lg bg-gray-50 p-3 items-center"></div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter password"
                                        className="pl-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-e-lg block w-full p-2.5"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="text-gray-700">Remember me</label>
                                    </div>
                                </div>
                                <Link to="/forget" className="text-sm font-medium hover:underline text-blue-900">
                                    Forgot password?
                                </Link>
                            </div>
                            <button
                                disabled={isLoading}
                                type="submit"
                                className="w-full text-white bg-green-600 hover:opacity-90 transition-all duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                {isLoading ? 'Signing in...' : 'Sign in'}
                            </button>
                            <p className="text-sm text-gray-800">
                                Don’t have an account yet?
                                <Link to="/signup" className=" hover:underline text-blue-900">
                                    Sign up
                                </Link>
                            </p>
                            <div className="grid grid-cols-3 items-center text-center">
                                <label>
                                    <hr className="text-red-600" />{' '}
                                </label>
                                <span className="">or login with</span>
                                <hr />
                            </div>
                            <div className="flex gap-1">
                                <div className="flex border w-full rounded-md border-gray-300 py-1 justify-center items-center">
                                    <img className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ99clJ9uWmomyjNVgO-PjeZrnur-_sswiUg&s" />
                                    <button className="text-sm">Google</button>
                                </div>
                                <div className="flex border w-full rounded-md border-gray-300 py-1 justify-center items-center ">
                                    <img className="h-8" src="https://logowik.com/content/uploads/images/facebook-new-2023-icon9594.logowik.com.webp" />
                                    <button className="text-sm">facebook</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
