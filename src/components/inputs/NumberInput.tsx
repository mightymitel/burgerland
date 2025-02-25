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
            <label htmlFor={`number-input-${label}`} className="text-gray-700">{label}</label>
            <div className="flex items-center md:flex-row flex-col justify-center" role="spinbutton" aria-valuemin={min} aria-valuemax={max} aria-valuenow={currentValue}>
                <button 
                    type="button"
                    onClick={handleDecrement} 
                    className="bg-gray-200 text-black px-3 py-1 w-full block rounded-t md:rounded-none md:rounded-l flex-grow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    aria-label={`Decrease ${label}`}
                    disabled={currentValue <= min}
                >
                    -
                </button>
                <input
                    id={`number-input-${label}`}
                    type="number"
                    value={currentValue}
                    onChange={(e) => {setCurrentValue(parseInt(e.target.value)); onChange && onChange(parseInt(e.target.value))}}
                    min={min}
                    max={max}
                    step={step}
                    aria-label={`${label} value`}
                    className="text-xl w-10 h-full p-0 block flex-grow text-center border m-0 focus:outline-none focus:ring-2 focus:ring-yellow-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button 
                    type="button"
                    onClick={handleIncrement} 
                    className="bg-gray-300 text-black px-3 py-1 w-full block rounded-b md:rounded-none md:rounded-r flex-grow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    aria-label={`Increase ${label}`}
                    disabled={currentValue >= max}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default NumberInput;