import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-[#262626] py-12  mx-auto  mt-20">
       
        <div className="max-w-screen-2xl mx-auto">
          <div className=" mx-3 md:mx-7 lg:mx-24 text-white ">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0 md:w-3/5 lg:pr-52">
                <Link to="/" className="text-2xl font-bold -m-1.5 p-1.5">
                  XpressPro
                </Link>
                <div className=" pt-">
                  <p className="mt-4 text-lg  text-gray-300">
                    Where quality meets affordability. We prioritize a smooth
                    and enjoyable journey without excessive costs, offering
                    top-notch vehicles at competitive prices.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 lg: pr-16">
                <div>
                  <h2 className="mb-3 text-sm font-semibold  uppercase">
                    QuickLinks
                  </h2>
                  <hr className="w-10 h-1  bg-green-600 border-0 rounded mb-5" />
                  <ul className="">
                    <li>
                      <Link
                        to="/"
                        className="block tracking-wide  hover:text-green-600 hover:font-semibold lg:p-0"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="marketplace"
                        className="block tracking-wide  hover:text-green-600 hover:font-semibold lg:p-0"
                      >
                        Cars
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/broker"
                        className="block tracking-wide  hover:text-green-600 hover:font-semibold lg:p-0"
                      >
                        Booking
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="aboutus"
                        className="block tracking-wide  hover:text-green-600 hover:font-semibold lg:p-0"
                      >
                        AboutUs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="contactus"
                        className="block tracking-wide  hover:text-green-600 hover:font-semibold lg:p-0"
                      >
                        ContactUs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="blogs"
                        className="block tracking-wide  hover:text-green-600 hover:font-semibold lg:p-0"
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-3 text-sm font-semibold uppercase">
                    Contact
                  </h2>
                  <hr className="w-10 h-1  bg-green-600 border-0 rounded mb-5" />
                  <ul className="text-gray-200">
                    <li>
                      <p className="flex mb-1">
                        <i className="fa fa-map-marker-alt text-[24px] pr-3"></i>
                        <label>Addis ababa, Ethiopia</label>
                      </p>
                    </li>
                    <li>
                      <p className="flex mb-1">
                        <i className="fa fa-phone text-[24px] pr-3"></i>
                        <label>Tel.:+25123456789</label>
                      </p>
                    </li>

                    <li>
                      <p className="flex mb-1">
                        <i className="fa fa-envelope text-[24px] pr-3"></i>
                        <label>contact@xpresspro.com</label>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <br />
            </div>
            <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm  sm:text-center">
                © 2024{" "}
                <Link to="" className="hover:underline">
                  XpressPro.
                </Link>
                All Rights Reserved.
              </span>
              <ul className="">
                <li className="mb-2 ">
                  <Link to="" className="hover:underline">
                    PrivacyPolicy
                  </Link>
                </li>
                <li className="">
                  <Link to="" className="hover:underline">
                    Terms&amp;Conditions
                  </Link>
                </li>
              </ul>
              <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <Link to="/" className=" text-xl">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link to="/" className=" text-xl">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/" className="text-xl">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="/" className="text-xl">
                  <i className="fab fa-telegram"></i>
                </Link>
                <Link to="/" className="text-xl">
                  <i className="fab fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
