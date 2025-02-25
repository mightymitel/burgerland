import React from "react";
import Link from "next/link";
import { useUserOptions } from "@/dataHooks/useUserOptions";
import { FaArrowCircleRight } from "react-icons/fa";

const CheckoutShortcut: React.FC = () => {
  const { data: userOptions } = useUserOptions();
  const { nAdults, nChildren, date, ticketPackage } = userOptions || {};

  const numberOfPeople = (nAdults || 0) + (nChildren || 0);
  const isReadyToCheckout =
    numberOfPeople > 0 && date !== "" && ticketPackage !== undefined;

  return (
    <>
      {isReadyToCheckout && (
        <div className="fixed text-right bottom-4 right-4 cursor-pointer bg-green-500 text-white p-4 rounded shadow-lg" role="complementary">
          <Link 
            href={"/checkout"}
            className="flex items-center gap-2"
            aria-label="Proceed to checkout with your selected tickets"
          >
            <span>Your ticket is ready, proceed to checkout</span>
            <FaArrowCircleRight aria-hidden="true" />
          </Link>
        </div>
      )}
    </>
  );
};

export default CheckoutShortcut;
