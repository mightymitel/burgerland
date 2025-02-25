'use client';

import { useUserOptions } from '@/dataHooks/useUserOptions';

export default function CheckoutPage() {
    const { data: userOptions, isLoading } = useUserOptions();

    if (isLoading) {
        return <div>Loading checkout...</div>;
    }

    if (!userOptions?.ticketPackage) {
        return <div>No ticket selected. Please go back to planning.</div>;
    }

    const totalPrice = 
        (userOptions.nAdults || 0) * userOptions.ticketPackage.priceAdult + 
        (userOptions.nChildren || 0) * userOptions.ticketPackage.priceChild;

    return (
        <main className="container mx-auto p-4 py-40 max-w-2xl">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4">
                    <div className="border-b pb-4">
                        <h3 className="font-bold text-lg mb-2">Ticket</h3>
                        <p className="text-lg font-semibold">{userOptions.ticketPackage.name}</p>
                        <div className="mt-2 space-y-1">
                            {userOptions.nAdults && userOptions.nAdults > 0 && (
                                <div className="flex justify-between">
                                    <span>Adults ({userOptions.nAdults} × €{userOptions.ticketPackage.priceAdult})</span>
                                    <span>€{(userOptions.nAdults * userOptions.ticketPackage.priceAdult).toFixed(2)}</span>
                                </div>
                            )}
                            {userOptions.nChildren && userOptions.nChildren > 0 && (
                                <div className="flex justify-between">
                                    <span>Children ({userOptions.nChildren} × €{userOptions.ticketPackage.priceChild})</span>
                                    <span>€{(userOptions.nChildren * userOptions.ticketPackage.priceChild).toFixed(2)}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    {userOptions.reservations && userOptions.reservations.length > 0 && (
                        <div className="border-b pb-4">
                            <h3 className="font-bold text-lg mb-2">Reservations</h3>
                            <div className="space-y-2">
                                {userOptions.reservations.map((reservation) => (
                                    <div key={reservation.id}>
                                        <p className="font-semibold">{reservation.location.name}</p>
                                        <p>{reservation.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="pt-4">
                        <div className="flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span>€{totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <button 
                className="w-full bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
                onClick={() => alert('Implement payment processing')}
            >
                Proceed to Payment
            </button>
        </main>
    );
}
