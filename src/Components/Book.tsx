import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

interface UserDataProps {
    origin: string;
    destination: string;
    departureDate: Dayjs | null;
    departureTime: Dayjs | null;
    returnDate: Dayjs | null;
    returnTime: Dayjs | null;
    booktype: 'listed' | 'custom';
    numPassenger: number;
}
interface BookProps extends UserDataProps {
    updateFields: (fields: Partial<UserDataProps>) => void;
}
function Book({ origin, destination, departureDate, departureTime, returnDate, returnTime, booktype, numPassenger, updateFields }: BookProps) {
    const handleDecrement = (): void => {
        if (numPassenger > 1) {
            updateFields({ numPassenger: numPassenger - 1 });
        }
    };

    const handleIncrement = (): void => {
        if (numPassenger < 100) {
            updateFields({ numPassenger: numPassenger + 1 });
        }
    };

    const [showTimePicker, setShowTimePicker] = useState(false);

    return (
        <>
            {booktype === 'listed' && (
                <div className="my-10">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 max-w-screen-md mx-auto py-4">Regular booking</h2>
                    <div className="border rounded-md p-5 m-5">
                        <div>
                            <div className="flex w-full h-fit gap-3">
                                <select
                                    value={origin}
                                    onChange={(e) => updateFields({ origin: e.target.value })}
                                    className=" rounded-md border-gray-400 border  py-2 pl-2 pr-7 text-gray-800 sm:text-sm w-full"
                                >
                                    <option>Start Place</option>
                                    <option>Addis Ababa</option>
                                    <option>Arba minch</option>
                                    <option>Hawassa</option>
                                    <option>Addis Ababa</option>
                                    <option>Arba minch</option>
                                    <option>Hawassa</option>
                                </select>

                                <select
                                    value={destination}
                                    onChange={(e) => updateFields({ destination: e.target.value })}
                                    className=" rounded-md border-gray-400 border  py-2 pl-2 pr-7 text-gray-800 sm:text-sm w-full"
                                >
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
                                    <DatePicker value={departureDate} label="Start date" onChange={(newValue) => updateFields({ departureDate: newValue })} />
                                    <TimePicker value={departureTime} onChange={(newValue) => updateFields({ departureTime: newValue })} label="Pick your time" />
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
                                    <DatePicker label="End-date" value={returnDate} onChange={(newValue) => updateFields({ returnDate: newValue })} />
                                    <TimePicker value={returnTime} onChange={(newValue) => updateFields({ returnTime: newValue })} label="pick your time" />
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
                                        value={numPassenger}
                                        onChange={(e) => updateFields({ numPassenger: parseInt(e.target.value) })}
                                        required
                                    />
                                    <button type="button" id="increment-button" className="bg-gray-100 d hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 " onClick={handleIncrement}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {booktype === 'custom' && (
                <div className="my-10">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 max-w-screen-md mx-auto py-4">Custom booking</h2>
                    <div className="border rounded-md p-5 m-5">
                        <div>
                            <div className="flex w-full h-fit gap-3">
                                <select
                                    value={origin}
                                    onChange={(e) => updateFields({ origin: e.target.value })}
                                    className=" rounded-md border-gray-400 border  py-2 pl-2 pr-7 text-gray-800 sm:text-sm w-full"
                                >
                                    <option>Start Place</option>
                                    <option>Addis Ababa</option>
                                    <option>Arba minch</option>
                                    <option>Hawassa</option>
                                    <option>Addis Ababa</option>
                                    <option>Arba minch</option>
                                    <option>Hawassa</option>
                                </select>

                                <select
                                    value={destination}
                                    onChange={(e) => updateFields({ destination: e.target.value })}
                                    className=" rounded-md border-gray-400 border  py-2 pl-2 pr-7 text-gray-800 sm:text-sm w-full"
                                >
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
                                    <DatePicker label="Start date" onChange={(newValue) => updateFields({ departureDate: newValue })} />
                                    <TimePicker value={departureTime} onChange={(newValue) => updateFields({ departureTime: newValue })} label="Pick your time" />
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
                                    <DatePicker label="End-date" onChange={(newValue) => updateFields({ returnDate: newValue })} />
                                    <TimePicker value={returnTime} onChange={(newValue) => updateFields({ returnTime: newValue })} label="pick your time" />
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
                                    value={numPassenger}
                                    onChange={(e) => updateFields({ numPassenger: parseInt(e.target.value) })}
                                    required
                                />
                                <button type="button" id="increment-button" className="bg-gray-100 d hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 " onClick={handleIncrement}>
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default Book;
