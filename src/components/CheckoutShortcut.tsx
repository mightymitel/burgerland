import React from 'react';
import { useUserOptions } from '@/dataHooks/useUserOptions';
import { FaIcons } from 'react-icons/fa6';
import { FaArrowCircleRight } from 'react-icons/fa';

const CheckoutShortcut: React.FC = () => {
    const { data: userOptions } = useUserOptions();
    const { nAdults, nChildren, date, ticketPackage } = userOptions || {};

    const numberOfPeople = (nAdults || 0) + (nChildren || 0);
    const isReadyToCheckout = numberOfPeople > 0 && date !== '' && ticketPackage !== undefined;

    return (
        <>
            {isReadyToCheckout && (
                <div className="fixed text-right bottom-4 right-4 cursor-pointer bg-green-500 text-white p-4 rounded shadow-lg">
                    <span>Your ticket is ready, proceed to checkout</span>
                    <FaArrowCircleRight  />
                </div>
            )}
        </>
    );
};

export default CheckoutShortcut;
