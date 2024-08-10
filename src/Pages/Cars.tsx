import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid';

const filters = [
    {
        id: 'Car Type',
        name: 'Car Type',
        options: [
            { value: 'Economy', label: 'Economy', checked: true },
            { value: 'Comfort', label: 'Comfort', checked: false },
            { value: 'Business', label: 'Business', checked: false },
            { value: 'Premium', label: 'Premium', checked: false },
            { value: 'VIP', label: 'VIP', checked: false }
        ]
    },
    {
        id: 'Persons',
        name: 'Persons',
        options: [
            { value: '1-4 Person', label: '1-4 Person', checked: false },
            { value: '5-8 Person', label: '5-8 Person', checked: false },
            { value: '9-12 Person', label: '9-12 Person', checked: false },
            { value: '12+', label: '12+', checked: false }
        ]
    },
    {
        id: 'Laugage',
        name: 'Laugage',
        options: [
            { value: '1 laugage', label: '1 laugage', checked: false },
            { value: '2 laugage', label: '2 laugage', checked: false },
            { value: '3 laugage', label: '3 laugage', checked: false },
            { value: '4+ laugage', label: '4+ laugage', checked: false }
        ]
    }
];

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
        imageSrc: 'https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fpickup_47a318538f.png&w=256&q=75',
        price: '$35'
    },
    {
        id: 4,
        name: 'Minibus',
        imageSrc: 'https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fminibus_fd69dde545.png&w=256&q=75',
        price: '$35'
    },
    {
        id: 4,
        name: 'Compact',
        imageSrc: 'https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fcompact_760bdff232.png&w=256&q=75',
        price: '$35'
    },
    {
        id: 5,
        name: 'Sedan',
        imageSrc: 'https://www.mekina.net/_next/image?url=https%3A%2F%2Fmekina.s3.eu-west-1.amazonaws.com%2Fsedan_7c495b64b6.png&w=256&q=75',
        price: '$35'
    }
];
export default function Cars() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop transition className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0" />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
                        >
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button type="button" onClick={() => setMobileFiltersOpen(false)} className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                    <span className="sr-only">Close menu</span>
                                    close
                                </button>
                            </div>

                            {/* Filters */}
                            <form className="mt-4 border-t border-gray-200">
                                <h3 className="sr-only">Categories</h3>
                                <div>hey</div>

                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                                                    <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-6">
                                                {section.options.map((option) => (
                                                    <div key={option.value} className="flex items-center">
                                                        <input
                                                            defaultValue={option.value}
                                                            defaultChecked={option.checked}
                                                            name={`${section.id}[]`}
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label className="ml-3 min-w-0 flex-1 text-gray-500">{option.label}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">OUR VEHICLES</h1>

                        <div className="flex items-center">
                            <button type="button" onClick={() => setMobileFiltersOpen(true)} className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                                <span className="sr-only">Filters</span>
                                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <div>some texts</div>

                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                                                    <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-4">
                                                {section.options.map((option) => (
                                                    <div key={option.value} className="flex items-center">
                                                        <input
                                                            defaultValue={option.value}
                                                            defaultChecked={option.checked}
                                                            name={`${section.id}[]`}
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label className="ml-3 text-sm text-gray-600">{option.label}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                <div className="bg-white">
                                    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
                                                                <i className="fas fa-user pr-2"></i> x 4<i className="fas fa-shopping-bag px-2"></i> x 3
                                                            </p>
                                                        </div>
                                                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                                    </div>
                                                    <button className="w-full bg-green-600 text-white py-1 rounded-md mt-3">Book now</button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

{
    /* <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <h2 className="use text-4xl font-bold tracking-tight text-gray-900 text-center">
            OUR VEHICLES
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
      </div> */
}
