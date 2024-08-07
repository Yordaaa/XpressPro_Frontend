import Header from "../Components/Header";
import car from "../../public/car-2.png";

function Home() {
  return (
    <>
      <div className="h-[90vh]">
        <div
          className="use h-[65vh] bg-center "
          style={{
            backgroundImage:
              'url("https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fmahindra%2Fxuv-3xo%2Fmahindra-xuv-3xo.jpg%3Fv%3D28&w=640&q=75")',
            backgroundSize: "cover",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            backgroundBlendMode: "darken",
          }}
        >
          <Header />

          <div className=" px-6 pt-14 lg:px-8 ">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
                Looking for a <span className="text-green-600">vehicle? </span>
              </h1>
              <div className="text-4xl text-white">
                {" "}
                You're in the right place.
              </div>
            </div>
          </div>
          <div className="mx-20 py-2 ">
            <div className="h-full bg-gray-100 w-full mx-auto mt-16 rounded-md ">
              <div className=" grid grid-cols-3 lg:grid-cols-6 justify-center items-center">
                <div>
                  <img
                    src="https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fcompact_760bdff232.png&w=256&q=75"
                    alt=""
                  />
                  <label className="flex justify-center text-center font-semibold text-lg">
                    Suv
                  </label>
                </div>
                <div>
                  <img
                    src="https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fpickup_47a318538f.png&w=256&q=75"
                    alt=""
                  />
                  <label className="flex justify-center text-center font-semibold text-lg">
                    Pickup
                  </label>
                </div>
                <div>
                  <img
                    src="https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fminibus_fd69dde545.png&w=256&q=75"
                    alt=""
                  />
                  <label className="flex justify-center text-center font-semibold text-lg">
                    Minibus
                  </label>
                </div>

                <div>
                  <img
                    src="https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fcompact_760bdff232.png&w=256&q=75"
                    alt=""
                  />
                  <label className="flex justify-center text-center font-semibold text-lg">
                    Compact
                  </label>
                </div>
                <div>
                  <img
                    src="https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Ftruck_99f27d2de5.png&w=256&q=75"
                    alt=""
                  />
                  <label className="flex justify-center text-center font-semibold text-lg">
                    Truck
                  </label>
                </div>
                <div>
                  <img
                    src="https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fsedan_7c495b64b6.png&w=256&q=75"
                    alt=""
                  />
                  <label className="flex justify-center text-center font-semibold text-lg">
                    Sedan
                  </label>
                </div>
              </div>

              <hr className="w-[80%] mx-auto mt-3" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  justify-between mx-3 lg:mx-10 pt-5 gap-2">
                <div>
                  <select className=" rounded-md border-gray-400 border  py-2 pl-2 pr-7 text-gray-800 sm:text-sm w-full">
                    <option>Pick your up location</option>
                    <option>Addis Ababa</option>
                    <option>Arba minch</option>
                    <option>Hawassa</option>
                    <option>Addis Ababa</option>
                    <option>Arba minch</option>
                    <option>Hawassa</option>
                  </select>
                </div>
                <div>
                  <select className=" rounded-md border-gray-400 border  py-2 pl-2 pr-7 text-gray-800 sm:text-sm w-full">
                    <option>Pick your up location</option>
                    <option>Addis Ababa</option>
                    <option>Arba minch</option>
                    <option>Hawassa</option>
                    <option>Addis Ababa</option>
                    <option>Arba minch</option>
                    <option>Hawassa</option>
                  </select>
                </div>
                <div>
                  <select className=" rounded-md border-gray-400 border  py-2 pl-2 pr-7 text-gray-800 sm:text-sm w-full">
                    <option>Pick your up location</option>
                    <option>Addis Ababa</option>
                    <option>Arba minch</option>
                    <option>Hawassa</option>
                    <option>Addis Ababa</option>
                    <option>Arba minch</option>
                    <option>Hawassa</option>
                  </select>
                </div>
                <div>
                  <select className=" rounded-md border-gray-400 border  py-2 pl-2 pr-7 text-gray-800 sm:text-sm w-full">
                    <option>Pick your up location</option>
                    <option>Addis Ababa</option>
                    <option>Arba minch</option>
                    <option>Hawassa</option>
                    <option>Addis Ababa</option>
                    <option>Arba minch</option>
                    <option>Hawassa</option>
                  </select>
                </div>
              </div>
              <div className="mx-10 py-3">
                <button className="bg-green-600 text-white w-full py-1 rounded-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-20">
        <h2 className="text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl flex justify-center pt-10">
          Features
        </h2>
        <hr className="w-24 h-1 mx-auto bg-green-600 border-0 rounded my-5 mb-10" />
        <p className="text-gray-700 max-w-lg mx-auto text-center">
          Discover a world of convenience, safety, and customization, paving the
          way for unforgettable adventures and seamless mobility solutions.
        </p>
        <div className="grid grid-cols-4 justify-center items-center gap-5">
          <div className="col-span-1 text-start">
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
          <div className="col-span-1 text-end">
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
                <h1 className="font-bold">Free Pick-Up & Drop-Off</h1> Enjoy
                free pickup and drop-off services, adding an extra layer of ease
                to your car rental experience.
              </label>
              <i className="fas fa-map-pin text-white bg-green-600 py-4 px-3 rounded-md h-fit m-2"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
