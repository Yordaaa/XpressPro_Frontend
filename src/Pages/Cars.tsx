import Header from "../Components/Header";

function Cars() {
  const products = [
    {
      id: 1,
      name: "Suv",
      imageSrc:
        "https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fcompact_760bdff232.png&w=256&q=75",
      price: "$35",
    },
    {
      id: 1,
      name: "Pickup",
      href: "#",
      imageSrc:
        "https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fpickup_47a318538f.png&w=256&q=75",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 4,
      name: "Minibus",
      href: "#",
      imageSrc:
        "https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fminibus_fd69dde545.png&w=256&q=75",

      price: "$35",
      color: "Black",
    },
    {
      id: 4,
      name: "Compact",
      href: "#",
      imageSrc:
        "https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fcompact_760bdff232.png&w=256&q=75",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 5,
      name: "Sedan",
      href: "#",
      imageSrc:
        "https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fsedan_7c495b64b6.png&w=256&q=75",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
  ];
  return (
    <div className="">
      <Header />

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            Our Vehicles
          </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group shadow-md p-2 rounded-md">
                  <div className=" rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                    <img
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        <a href="">
                          
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-700">
                        <i className="fas fa-user pr-2"></i>4 person <i className="fas fa-shopping-bag px-2"></i>3 laugage</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                  <button className="w-full bg-green-600 text-white py-1 rounded-md mt-3">Book now</button>
                </div>
              ))}
            </div>
        </div>
      </div>

      {/* <ul role="list" className="divide-y divide-gray-100 max-w-screen-md mx-auto">
        <li className="flex justify-between gap-x-6 py-5 items-center">
          <div className="flex min-w-0 gap-x-4 items-center">
            <img
              className="h-24  bg-gray-50"
              src="https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fcompact_760bdff232.png&w=256&q=75"
              alt=""
            />
            <div className="min-w-0 flex-auto items-center">
              <p className="font-semibold leading-6 text-gray-900">
                Van
              </p>
              <p className="mt-1 text-sm leading-5 text-gray-500">
                3 seats
              </p>
            </div>
          </div>
          <div className="flex items-end">
            <p className="text-bold leading-6 text-gray-900">$50</p> 
            <button className="bg-green-600 p-1 px-1 ml-2 rounded-md text-white">Order now</button>
          </div>
          
        </li>
        <li className="flex justify-between gap-x-6 py-5 items-center">
          <div className="flex min-w-0 gap-x-4 items-center">
            <img
              className="h-24  bg-gray-50"
              src="https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fcompact_760bdff232.png&w=256&q=75"
              alt=""
            />
            <div className="min-w-0 flex-auto items-center">
              <p className="font-semibold leading-6 text-gray-900">
                Van
              </p>
              <p className="mt-1 text-sm leading-5 text-gray-500">
                3 seats
              </p>
            </div>
          </div>
          <div className="flex items-end">
            <p className="text-bold leading-6 text-gray-900">$50</p> 
            <button className="bg-green-600 p-1 px-1 ml-2 rounded-md text-white">Order now</button>
          </div>
          
        </li>
        <li className="flex justify-between gap-x-6 py-5 items-center">
          <div className="flex min-w-0 gap-x-4 items-center">
            <img
              className="h-24  bg-gray-50"
              src="https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fpickup_47a318538f.png&w=256&q=75"
              alt=""
            />
            <div className="min-w-0 flex-auto items-center">
              <p className="font-semibold leading-6 text-gray-900">
                Pickup
              </p>
              <p className="mt-1 text-sm leading-5 text-gray-500">
                3 seats
              </p>
            </div>
          </div>
          <div className="flex items-end">
            <p className="text-bold leading-6 text-gray-900">$50</p> 
            <button className="bg-green-600 p-1 px-1 ml-2 rounded-md text-white">Order now</button>
          </div>
          
        </li>
        <li className="flex justify-between gap-x-6 py-5 items-center">
          <div className="flex min-w-0 gap-x-4 items-center">
            <img
              className="h-24  bg-gray-50"
              src="https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fcompact_760bdff232.png&w=256&q=75"
              alt=""
            />
            <div className="min-w-0 flex-auto items-center">
              <p className="font-semibold leading-6 text-gray-900">
                Van
              </p>
              <p className="mt-1 text-sm leading-5 text-gray-500">
                3 seats
              </p>
            </div>
          </div>
          <div className="flex items-end">
            <p className="text-bold leading-6 text-gray-900">$50</p> 
            <button className="bg-green-600 p-1 px-1 ml-2 rounded-md text-white">Order now</button>
          </div>
          
        </li>
        <li className="flex justify-between gap-x-6 py-5 items-center">
          <div className="flex min-w-0 gap-x-4 items-center">
            <img
              className="h-24  bg-gray-50"
              src="https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fcompact_760bdff232.png&w=256&q=75"
              alt=""
            />
            <div className="min-w-0 flex-auto items-center">
              <p className="font-semibold leading-6 text-gray-900">
                Van
              </p>
              <p className="mt-1 text-sm leading-5 text-gray-500">
                3 seats
              </p>
            </div>
          </div>
          <div className="flex items-end">
            <p className="text-bold leading-6 text-gray-900">$50</p> 
            <button className="bg-green-600 p-1 px-1 ml-2 rounded-md text-white">Order now</button>
          </div>
          
        </li>
      </ul> */}
    </div>
  );
}

export default Cars;
