import car from "/car-2.png";

function Features() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="mx-5 md:mx-10 lg:mx-20">
      <h2 className="text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl flex justify-center pt-10">
        Features
      </h2>
      <hr className="w-24 h-1 mx-auto bg-green-600 border-0 rounded my-5 mb-10" />
      <p className="text-gray-700 max-w-xl text-lg pb-5 mx-auto text-center">
        Discover a world of convenience, safety, and customization, paving the
        way for unforgettable adventures and seamless mobility solutions.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 justify-center items-center gap-5">
        <div className="flex flex-col sm:flex-row lg:flex-col col-span-1 text-start">
          <div className="pb-5 flex gap-2">
            <i className="fas fa-trophy text-white bg-green-600 py-4 px-3 rounded-md h-fit m-2 "></i>
            <label>
              <h1 className="font-bold">First class services</h1> Where luxury
              meets exceptional care, creating unforgettable moments and
              exceeding your every expectation.
            </label>
          </div>
          <div className="flex gap-2">
            <i className="fas fa-car text-white bg-green-600 py-4 px-3 rounded-md h-fit m-2 "></i>
            <label>
              <h1 className="font-bold">24/7 road assistance</h1> Reliable
              support when you need it most, keeping you on the move with
              confidence and peace of mind.
            </label>
          </div>
        </div>
        <div className="col-span-2">
          <img className=" mx-auto py-10" src={car} alt="" />
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col col-span-1 text-end">
          <div className="pb-5 flex gap-2">
            <label>
              <h1 className="font-bold">Quality at Minimum Expense</h1>
              Unlocking affordable brilliance with elevating quality while
              minimizing costs for maximum value.
            </label>
            <i className="fas fa-dollar-sign text-white bg-green-600 py-4 px-3 rounded-md h-fit m-2"></i>
          </div>

          <div className="flex gap-2">
            <label>
              <h1 className="font-bold">Free Pick-Up & Drop-Off</h1> Enjoy free
              pickup and drop-off services, adding an extra layer of ease to
              your car rental experience.
            </label>
            <i className="fas fa-map-pin text-white bg-green-600 py-4 px-3 rounded-md h-fit m-2"></i>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Features;
