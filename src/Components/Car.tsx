import React from 'react';
import { Link } from 'react-router-dom';
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
function Car() {
    return (
        <div className="mx-auto max-w-lg px-4 py-8 sm:px-6 sm:py-12 lg:max-w-4xl lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 max-w-screen-md mx-auto py-4">Select Car</h2>

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
            <Link to="/additional" className='flex justify-end pt-4'>next</Link>
        </div>
    );
}

export default Car;
