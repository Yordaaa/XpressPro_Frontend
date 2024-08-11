import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function AdditionalService() {
    const [infantCarrier, setInfantCarrier] = React.useState<number>(0);
    const [convertibleSeat, setConvertibleSeat] = React.useState<number>(0);
    const [boosterSeat, setBoosterSeat] = React.useState<number>(0);

    const handleDecrementInfant = (): void => {
        if (infantCarrier > 0) {
            setInfantCarrier(infantCarrier - 1);
        }
    };

    const handleIncrementInfant = (): void => {
        if (infantCarrier < 100) {
            setInfantCarrier(infantCarrier + 1);
        }
    };

    const handleDecrementConvertible = (): void => {
        if (convertibleSeat > 0) {
            setConvertibleSeat(convertibleSeat - 1);
        }
    };

    const handleIncrementConvertible = (): void => {
        if (convertibleSeat < 100) {
            setConvertibleSeat(convertibleSeat + 1);
        }
    };

    const handleDecrementBooster = (): void => {
        if (boosterSeat > 0) {
            setBoosterSeat(boosterSeat - 1);
        }
    };

    const handleIncrementBooster = (): void => {
        if (boosterSeat < 100) {
            setBoosterSeat(boosterSeat + 1);
        }
    };

    return (
        <div className="pt-20">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">Additional Services</h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 max-w-screen-md mx-auto py-4">Child Seats</h2>
            <div className="border max-w-screen-md mx-auto border-auto">
                {/* Infant Carrier */}
                <div className="flex max-w-screen-md mx-auto justify-between px-10 border-b pb-3 border-gray-800 pt-5">
                    <div className="flex items-center pr-3">
                        <div className="pr-3">
                            <i className="fas fa-male text-3xl"></i>
                        </div>
                        <label>Infant Carrier</label>
                    </div>
                    <div>
                        <div className="flex items-center max-w-[11rem]">
                            <button type="button" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11" onClick={handleDecrementInfant}>
                                <i className="fas fa-minus"></i>
                            </button>
                            <input type="text" className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 block w-full" value={infantCarrier} readOnly />
                            <button type="button" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11" onClick={handleIncrementInfant}>
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Convertible Seat */}
                <div className="flex max-w-screen-md mx-auto justify-between px-10 border-b pb-3 border-gray-800 pt-5">
                    <div className="flex items-center pr-3">
                        <div className="pr-3">
                            <i className="fas fa-male text-3xl"></i>
                        </div>
                        <label>Convertible Seat</label>
                    </div>
                    <div>
                        <div className="flex items-center max-w-[11rem]">
                            <button type="button" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11" onClick={handleDecrementConvertible}>
                                <i className="fas fa-minus"></i>
                            </button>
                            <input type="text" className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 block w-full" value={convertibleSeat} readOnly />
                            <button type="button" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11" onClick={handleIncrementConvertible}>
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Booster Seat */}
                <div className="flex max-w-screen-md mx-auto justify-between px-10 border-b pb-3 border-gray-800 pt-5">
                    <div className="flex items-center pr-3">
                        <div className="pr-3">
                            <i className="fas fa-male text-3xl"></i>
                        </div>
                        <label>Booster Seat</label>
                    </div>
                    <div>
                        <div className="flex items-center max-w-[11rem]">
                            <button type="button" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11" onClick={handleDecrementBooster}>
                                <i className="fas fa-minus"></i>
                            </button>
                            <input type="text" className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 block w-full" value={boosterSeat} readOnly />
                            <button type="button" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11" onClick={handleIncrementBooster}>
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <label className="block mb-2 font-medium text-gray-900 pt-5">Any Comment</label>
                    <textarea
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                        placeholder="Laugage information, special needs or task for the driver..."
                    ></textarea>
                </div>
                <div className="flex justify-end gap-5 py-5 pr-5">
                    <Link to="/review">
                        <button className="bg-green-600 text-white p-1 px-3 rounded">Book now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AdditionalService;
