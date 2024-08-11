import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Link } from 'react-router-dom';

function Booking() {
    const [value, setValue] = React.useState(dayjs(''));

    const [bedrooms, setBedrooms] = React.useState<number>(3);

    const handleDecrement = (): void => {
        if (bedrooms > 1) {
            setBedrooms(bedrooms - 1);
        }
    };

    const handleIncrement = (): void => {
        if (bedrooms < 100) {
            setBedrooms(bedrooms + 1);
        }
    };

    const [showTimePicker, setShowTimePicker] = React.useState(false);
    const [startDate, setStartDate] = React.useState(dayjs());
    const [booktype, setBooktype] = React.useState('regular');

    return (
        <div className="">
            <div className="mx-auto max-w-lg px-4 py-8 sm:px-6 sm:py-12 lg:max-w-4xl lg:px-8">
                <h2 className="use text-4xl font-bold tracking-tight text-gray-900 text-center ">Book Now</h2>
                <div className="my-10">
                    <div className=" mx-auto flex justify-center items-center p-2 md:p-0">
                        <div className="flex items-center justify-center space-x-4">
                            <button className={`${booktype === 'regular' ? 'bg-green-600 text-white' : 'bg-gray-200'} px-4 py-1 rounded`} onClick={() => setBooktype('regular')}>
                                Regular
                            </button>
                            <button className={`${booktype === 'custom' ? 'bg-green-600 text-white' : 'bg-gray-200'} px-4 py-1 rounded`} onClick={() => setBooktype('custom')}>
                                Custom
                            </button>
                        </div>
                    </div>
                </div>

                {booktype === 'regular' && (
                    <div className="my-10">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 max-w-screen-md mx-auto py-4">Regular booking</h2>
                        <div className="border rounded-md p-5 m-5">
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
                                </div>
                                <div className="col-span-2"></div>
                            </div>

                            <div className="flex justify-center pt-5">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker', 'TimePicker']}>
                                        <DatePicker label="Start date" value={startDate} onChange={(newValue) => setStartDate(newValue)} />
                                        <TimePicker label="Pick your time" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div className="flex items-start pt-5">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                                    onChange={(e) => {
                                        const showTimePicker = e.target.checked;
                                        setShowTimePicker(showTimePicker);
                                    }}
                                />
                            </div>
                            <div className="ml-3">
                                <label className="text-gray-800">Want to add return way?</label>
                            </div>
                        </div>
                        {showTimePicker && (
                            <div className="flex justify-center pt-5">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker', 'TimePicker']}>
                                        <DatePicker label="End-date" value={value} onChange={(newValue) => setValue(newValue)} />
                                        <TimePicker label="pick your time" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>
                        )}
                        <div className="flex max-w-screen-md mx-auto justify-between px-10 border-b pb-3 border-gray-800 pt-5">
                            <div className="flex items-center pr-3">
                                <div className="pr-3">
                                    <i className="fas fa-male text-3xl"></i>
                                </div>
                                <label>Adults</label>
                            </div>
                            <div>
                                <form className="mx-auto">
                                    <div className="flex items-center max-w-[11rem]">
                                        <button type="button" id="decrement-button" className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11" onClick={handleDecrement}>
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <input
                                            type="text"
                                            id="bedrooms-input"
                                            data-input-counter
                                            data-input-counter-min="1"
                                            data-input-counter-max="5"
                                            aria-describedby="helper-text-explanation"
                                            className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 block w-full "
                                            placeholder=""
                                            value={bedrooms}
                                            required
                                        />
                                        <button type="button" id="increment-button" className="bg-gray-100 d hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 " onClick={handleIncrement}>
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <Link to="/car" className="flex justify-end pt-4">
                            next
                        </Link>
                    </div>
                )}

                {booktype === 'custom' && (
                    <div className="my-10">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 max-w-screen-md mx-auto py-4">Custom booking</h2>
                        <div className="border rounded-md p-5 m-5">
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
                                </div>
                                <div className="col-span-2"></div>
                            </div>

                            <div className="flex justify-center pt-5">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker', 'TimePicker']}>
                                        <DatePicker label="Start date" value={startDate} onChange={(newValue) => setStartDate(newValue)} />
                                        <TimePicker label="Pick your time" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div className="flex items-start pt-5">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                                    onChange={(e) => {
                                        const showTimePicker = e.target.checked;
                                        setShowTimePicker(showTimePicker);
                                    }}
                                />
                            </div>
                            <div className="ml-3">
                                <label className="text-gray-800">Want to add return way?</label>
                            </div>
                        </div>
                        {showTimePicker && (
                            <div className="flex justify-center pt-5">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker', 'TimePicker']}>
                                        <DatePicker label="End-date" value={value} onChange={(newValue) => setValue(newValue)} />
                                        <TimePicker label="pick your time" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>
                        )}
                        <div className="flex max-w-screen-md mx-auto justify-between px-10 border-b pb-3 border-gray-800 pt-5">
                            <div className="flex items-center pr-3">
                                <div className="pr-3">
                                    <i className="fas fa-male text-3xl"></i>
                                </div>
                                <label>Adults</label>
                            </div>
                            <div>
                                <form className="mx-auto">
                                    <div className="flex items-center max-w-[11rem]">
                                        <button type="button" id="decrement-button" className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11" onClick={handleDecrement}>
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <input
                                            type="text"
                                            id="bedrooms-input"
                                            data-input-counter
                                            data-input-counter-min="1"
                                            data-input-counter-max="5"
                                            aria-describedby="helper-text-explanation"
                                            className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 block w-full "
                                            placeholder=""
                                            value={bedrooms}
                                            required
                                        />
                                        <button type="button" id="increment-button" className="bg-gray-100 d hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 " onClick={handleIncrement}>
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <Link to="/car" className="flex justify-end pt-4">
                            next
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Booking;
