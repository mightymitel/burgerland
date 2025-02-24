import React, { useState } from 'react';

interface NumberInputProps {
    label?: string;
    value?: number;
    onChange?: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({value = 0, onChange, label = "" }) => {
    const [currentValue, setCurrentValue] = useState(value);
    const {min, max, step} = {min: 0, max: 100, step: 1};

    const handleIncrement = () => {
        if (currentValue < max) {
            const newValue = currentValue + step;
            setCurrentValue(newValue);
            onChange && onChange(newValue);
        }
    };
    const handleDecrement = () => {
        if (currentValue > min) {
            const newValue = currentValue - step;
            setCurrentValue(newValue);
            onChange && onChange(newValue);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-2 p-2 border rounded-md max-w-xs mx-auto">
            <label className="text-gray-700">{label}</label>
            <div className="flex items-center md:flex-row flex-col justify-center">
                <button 
                    type="button"
                    onClick={handleDecrement} 
                    className="bg-red-500 text-white px-3 py-1 w-full block rounded-t md:rounded-none md:rounded-l flex-grow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                    -
                </button>
                <input
                    type="number"
                    value={currentValue}
                    onChange={(e) => {setCurrentValue(parseInt(e.target.value)); onChange && onChange(parseInt(e.target.value))}}
                    min={min}
                    max={max}
                    step={step}
                    className="text-xl w-10 h-full p-0 block flex-grow text-center border m-0 focus:outline-none focus:ring-2 focus:ring-yellow-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button 
                    type="button"
                    onClick={handleIncrement} 
                    className="bg-green-500 text-white px-3 py-1 w-full block rounded-b md:rounded-none md:rounded-r flex-grow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default NumberInput;