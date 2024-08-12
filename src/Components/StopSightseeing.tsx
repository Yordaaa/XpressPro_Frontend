function StopSightseeing() {
    return (
        <div className="my-20 max-w-screen-lg mx-auto px-2">
            <h1 className="text-2xl fot-bold pb-5">Do you want to add additional stops?</h1>
            <div className="grid grid-cols-4 items-center  gap-5 border p-4 rounded-md">
                <div className="col-span-1 ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8JXiXvcex4V25aoIpKDhc7Gp2rQIxTldCg&s" className="rounded-md" />
                </div>
                <div className="col-span-3 flex">
                    <div>
                        <h1 className="text-2xl font-bold pb-2">Hawassa City</h1>
                        <label className="">
                            Awasa, also called Hawassa, is a city in the Great Rift Valley of central Ethiopia. It lies at the eastern edge of large Lake Awasa, with its resident hippos. Water birds
                            gather around a popular fish market along the lake’s shore.
                        </label>
                        <p className="pt-3">435km from captital city Addis Ababa</p>
                    </div>
                    <input type="checkBox" className="rounded-md w-5 h-5 " />
                </div>
            </div>
            <div className="grid grid-cols-4 items-center my-5 gap-5 max-w-screen-lg mx-auto border p-4 rounded-md">
                <div className="col-span-1 ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_c6cEJfMiOdvKW3NH7aR0spsjvv_VDXl0g&s" className="rounded-md" />
                </div>
                <div className="col-span-3 flex">
                    <div>
                        <h1 className="text-2xl font-bold pb-2">Shashamane City</h1>
                        <label>
                            Shashamane is a city in southern Ethiopia. Located in the Oromia Region with a 2007 Census population of 100,454, but with an estimated 208,368 inhabitants in mid 2022; the
                            town is known for its Rastafarian community
                        </label>
                    </div>
                    <input type="checkBox" className="rounded-md w-5 h-5 " />
                </div>
            </div>
            <div className="grid grid-cols-4 items-center my-5 gap-5 max-w-screen-lg mx-auto border p-4 rounded-md">
                <div className="col-span-1 ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8JXiXvcex4V25aoIpKDhc7Gp2rQIxTldCg&s" className="rounded-md" />
                </div>
                <div className="col-span-3 flex">
                    <div>
                        <h1 className="text-2xl font-bold pb-2">Hawassa City</h1>
                        <label>
                            Awasa, also called Hawassa, is a city in the Great Rift Valley of central Ethiopia. It lies at the eastern edge of large Lake Awasa, with its resident hippos. Water birds
                            gather around a popular fish market along the lake’s shore.
                        </label>
                    </div>
                    <input type="checkBox" className="rounded-md w-5 h-5 " />
                </div>
            </div>
        </div>
    );
}

export default StopSightseeing;
