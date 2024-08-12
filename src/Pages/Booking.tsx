import { FormEvent, useState } from 'react';
import AdditionalService from '../Components/AdditionalService';
import Book from '../Components/Book';
import Car from '../Components/Car';
import { MultiStepCustomHook } from '../Hooks/MultiStepCustomHook';
import dayjs, { Dayjs } from 'dayjs';
interface FormData {
    origin: string;
    destination: string;
    departureDate: Dayjs | null;
    departureTime: Dayjs | null;
    returnDate: Dayjs | null;
    returnTime: Dayjs | null;
    booktype: 'listed' | 'custom';
    numPassenger: number;
    carType: string;
    Infant_carrier: number;
    Convertible_seat: number;
    Booster_seat: number;
}

const Initial_Data: FormData = {
    origin: '',
    destination: '',
    departureDate: dayjs(''),
    departureTime: dayjs(''),
    returnDate: dayjs(''),
    returnTime: dayjs(''),
    booktype: 'listed',
    numPassenger: 1,
    carType: '',
    Infant_carrier: 1,
    Convertible_seat: 1,
    Booster_seat: 1
};
function Booking() {
    const [formData, setFormData] = useState(Initial_Data);
    const [booktype, setBooktype] = useState('listed');

    const updateFields = (fields: Partial<FormData>) => {
        setFormData((prev) => {
            return { ...prev, ...fields };
        });
    };
    const { steps, step, currentStepIndex, isFirstStep, isLastStep, back, next } = MultiStepCustomHook([
        <Book {...formData} updateFields={updateFields} />,
        <Car {...formData} updateFields={updateFields} />,
        <AdditionalService {...formData} updateFields={updateFields} />
    ]);

    const onSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        if (!isLastStep) return next();
        alert('Form submitted');
    };
    return (
        <div className="max-w-screen-md mx-auto px-3">
            <div className="mx-auto max-w-lg px-4 py-8 sm:px-6 sm:py-12 lg:max-w-4xl lg:px-8">
                <h2 className="use text-4xl font-bold tracking-tight text-gray-900 text-center ">Book Now</h2>
            </div>
            <div className="my-10">
                <div className=" mx-auto flex justify-center items-center p-2 md:p-0">
                    <div className="flex items-center justify-center space-x-4">
                        <button type="button" className={`${booktype === 'listed' ? 'bg-green-600 text-white' : 'bg-gray-200'} px-4 py-1 rounded`} onClick={() => setBooktype('listed')}>
                            Regular
                        </button>
                        <button type="button" className={`${booktype === 'custom' ? 'bg-green-600 text-white' : 'bg-gray-200'} px-4 py-1 rounded`} onClick={() => setBooktype('custom')}>
                            Custom
                        </button>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    {currentStepIndex + 1}/{steps.length}
                </div>
                {step}
                <div className='flex justify-end'>
                {!isFirstStep && (
                    <button type="button" onClick={back} className="mt-8  bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-4 mx-2 rounded-md focus:outline-none">
                        Back
                    </button>
                )}
                <button type="submit" className="mt-8  bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded-md focus:outline-none">
                    {isLastStep ? 'Book Now' : 'Next'}
                </button>
                </div>
            </form>
        </div>
    );
}

export default Booking;
