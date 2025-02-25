'use client';

import { useUserOptions } from '@/dataHooks/useUserOptions';
import { useQuery } from '@tanstack/react-query';

export default function CheckoutPage() {
    const { data: userOptions, isLoading } = useUserOptions();

    if (isLoading) {
        return <div>Loading checkout...</div>;
    }

    return (
        <main className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            {/* Add checkout form and cart summary */}
        </main>
    );
}
