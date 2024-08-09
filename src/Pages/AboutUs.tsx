import location from '/location.png';
import about from '/about.jpg';
function AboutUs() {
    return (
        <>
            <section
                className="use px-5 bg-center "
                style={{
                    backgroundImage: 'url("https://t3.ftcdn.net/jpg/04/37/54/90/360_F_437549071_7uQvtqTIgd50l2r0OZ1g0zJnLwnzJmIG.jpg")'
                }}
            >
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className=" use max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none text-center">
                            We offer customers a wide range of <span className="text-green-600">commercial cars</span> and <span className="text-green-600">luxury cars </span>
                            for any occasion.
                        </h1>
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://www.freepnglogos.com/uploads/bmw-png/bmw-reviews-and-rating-motor-trend-1.png" />
                    </div>
                </div>
            </section>
            <div className="overflow-hidden py-16 sm:py-16 mx-auto  ">
                <div className="mx-auto  px-6 lg:px-8 ">
                    <div className=" text-center max-w-screen-md mx-auto">
                        <h2 className="use text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">Work with us</h2>
                        <p className="mt-6 text-lg md:text-xl text-center leading-8 text-gray-600 ">
                            At XPressPro, we provide exceptional car rental services focused on quality and customer satisfaction. Our diverse fleet includes well-maintained vehicles, from compact
                            cars for solo travelers to spacious SUVs for families, ensuring we meet every customer's unique needs.
                        </p>
                    </div>

                    <div className="mx-auto mt-10">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10  max-w-2xl mx-auto text-center">
                            <a href="#">
                                Open roles <span aria-hidden="true">&rarr;</span>
                            </a>
                            <a href="#">
                                our mission <span aria-hidden="true">&rarr;</span>
                            </a>
                            <a href="#">
                                Our values <span aria-hidden="true">&rarr;</span>
                            </a>
                            <a href="#">
                                Meet our leadership <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                        <dl className="mt-16 grid grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto">
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-600">Offices in Etiopia</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-800">12</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-600">Full-time employees</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-800">300+</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-600">happy customers</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-800">20000+</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-600">Years Experience</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-800">7+</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="grid max-w-screen-2xl  mx-auto lg:gap-8 xl:gap-5 lg:grid-cols-12 mt-10 bg-green-50">
                <div className="lg:mt-0 lg:col-span-4 lg:flex pr-5">
                    <img src={about} />
                </div>
                <div className="mr-auto place-self-center  lg:col-span-7 ">
                    <div>
                        <h1 className="use max-w-2xl mb-4 text-5xl font-bold  text-start">Only Quality for clients</h1>

                        <div className="use text-2xl flex gap-10 pb-3">
                            <h1>Lexury </h1>
                            <h1 className="text-green-600">Comfort</h1>
                            <h1>Prestige</h1>
                        </div>
                        <h1 className=" max-w-2xl mb-4 text-xl tracking-tight leading-7 text-start">
                            Enjoy our top-quality luxury cars. From thrilling sports cars to elegant sedans and versatile SUVs, we have the perfect vehicle for you. Each one is made with great care
                            and the finest materials. Step into a world of comfort, style, and prestige. Elevate your driving experience with our exceptional luxury collection.
                        </h1>
                    </div>
                </div>
            </div>
            <div className="bg-green-600 p-10 flex justify-between text-gray-50 px-20 max-w-screen-2xl mx-auto">
                <h1 className="use text-gray-50 mb-4 text-[35px] leading-10 text-start">Call us for further information. XPressPro customer care is here to help you anytime.</h1>
                <div className=' text-xl text-center w-1/3'>
                  <i className='fas fa-phone text-4xl pb-2'></i>
                  <p>Call us now</p>
                  <h1 className='text-2xl use'>+251912345678</h1>
                </div>
            </div>
            <div className="grid max-w-screen-xl px-4 pt-8 mx-auto lg:gap-8 xl:gap-5 lg:grid-cols-12">
                <div className="lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={location} />
                </div>
                <div className="mr-auto place-self-center lg:col-span-7">
                    <div>
                        <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none text-center">
                            We are available in all <span className="text-green-600"> Ethiopian </span> locations
                        </h1>
                        <h1 className="max-w-2xl mb-4 text-2xl tracking-tight leading-none text-center">
                            providing you with reliable car rental services wherever you are. Experience the freedom to explore stunning landscapes and vibrant cities at your own pace!
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
