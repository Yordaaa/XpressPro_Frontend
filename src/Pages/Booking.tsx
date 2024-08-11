import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
function Booking() {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs(''));
    const [startDate, setStartDate] = React.useState<Dayjs | null>(dayjs());
    const products = [
        {
            id: 1,
            name: 'Suv',
            imageSrc: 'https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fcompact_760bdff232.png&w=256&q=75',
            price: '$35'
        },
        {
            id: 1,
            name: 'Pickup',
            href: '#',
            imageSrc: 'https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fpickup_47a318538f.png&w=256&q=75',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black'
        },
        {
            id: 4,
            name: 'Minibus',
            href: '#',
            imageSrc: 'https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fminibus_fd69dde545.png&w=256&q=75',

            price: '$35',
            color: 'Black'
        },
        {
            id: 4,
            name: 'Compact',
            href: '#',
            imageSrc: 'https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fcompact_760bdff232.png&w=256&q=75',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black'
        },
        {
            id: 5,
            name: 'Sedan',
            href: '#',
            imageSrc: 'https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fsedan_7c495b64b6.png&w=256&q=75',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black'
        }
    ];
    return (
        <div className="">
            <div className="mx-auto max-w-lg px-4 py-8 sm:px-6 sm:py-12 lg:max-w-4xl lg:px-8">
                <h2 className="use text-4xl font-bold tracking-tight text-gray-900 text-center ">OUR VEHICLES</h2>
                <div className="">
                    <div>
                        <div className="flex w-full h-fit gap-3">
                            <select className=" rounded-md border-gray-400 border  py-2 pl-2 pr-7 text-gray-800 sm:text-sm w-full">
                                <option>Start Place</option>
                                <option>Addis Ababa</option>
                                <option>Arba minch</option>
                                <option>Hawassa</option>
                                <option>Addis Ababa</option>
                                <option>Arba minch</option>
                                <option>Hawassa</option>
                            </select>

                            <select className=" rounded-md border-gray-400 border  py-2 pl-2 pr-7 text-gray-800 sm:text-sm w-full">
                                <option>End place</option>
                                <option>Addis Ababa</option>
                                <option>Arba minch</option>
                                <option>Hawassa</option>
                                <option>Addis Ababa</option>
                                <option>Arba minch</option>
                                <option>Hawassa</option>
                            </select>
                            <button>Custom?</button>
                        </div>
                        <div className="col-span-2"></div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group shadow-md p-2 rounded-md">
                                <div className=" rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                                    <img src={product.imageSrc} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            <a href="">{product.name}</a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-700">
                                            <i className="fas fa-user pr-1"></i>x 4 <i className="fas fa-shopping-bag px-2"></i>x 3{' '}
                                        </p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center pt-5">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                <DatePicker label="Start date" value={startDate} onChange={(newValue) => setStartDate(newValue)} />
                                <DatePicker label="End-date" value={value} onChange={(newValue) => setValue(newValue)} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </div>
                <div className="flex items-start pt-5">
                    <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" />
                    </div>
                    <div className="ml-3">
                        <label className="text-gray-800">Want to add return way?</label>
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

export default Booking;
