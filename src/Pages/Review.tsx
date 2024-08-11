export default function Review() {
    return (
        <div className="max-w-screen-md mx-auto pt-16">
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Thu, Aug 15, 4:51 PM</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Ride request #18337718</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Yordanos Tibebu</dd>
                    </div>
                    <div className="px-4 py-6 grid grid-cols-2 sm:gap-4 sm:px-0">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-base font-semibold leading-7 text-gray-900">Start Location</h3>
                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Addis Ababa</p>
                        </div>
                        <div className="px-4 sm:px-0">
                            <h3 className="text-base font-semibold leading-7 text-gray-900">End Location</h3>
                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Arbaminch</p>
                        </div>
                    </div>
                    <div className="px-4 py-6 grid grid-cols-2 sm:gap-4 sm:px-0">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-base font-semibold leading-7 text-gray-900">Deprature date</h3>
                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Aug 15 ,2024</p>
                        </div>
                        <div className="px-4 sm:px-0">
                            <h3 className="text-base font-semibold leading-7 text-gray-900">Return date</h3>
                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Aug 17 ,2024</p>
                        </div>
                    </div>
                    <div className="px-4 py-6 grid grid-cols-2 sm:gap-4 sm:px-0">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-base font-semibold leading-7 text-gray-900">Adults</h3>
                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">8</p>
                        </div>
                        <div className="px-4 sm:px-0">
                            <h3 className="text-base font-semibold leading-7 text-gray-900">Childs</h3>
                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">2</p>
                        </div>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Transport type</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Minibus</dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Additional comments</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat rerum obcaecati dicta, aspernatur iste necessitatibus voluptatem! Perferendis voluptas tenetur commodi.
                        </dd>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-green-600 p-1 px-3 text-white rounded-md end-10">Confirm and continue</button>
                    </div>
                </dl>
            </div>
        </div>
    );
}
