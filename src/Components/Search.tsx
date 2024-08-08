import React from "react";

function Search() {
  return (
    <div className="mx-5 md:mx-20 py-2 ">
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
  );
}

export default Search;
