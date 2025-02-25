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
        <div className="fixed text-right bottom-4 right-4 cursor-pointer bg-green-500 text-white p-4 rounded shadow-lg">
          <Link href={"/checkout"}>
            <span>Your ticket is ready, proceed to checkout</span>
            <FaArrowCircleRight />
          </Link>
        </div>
      )}
    </>
  );
};

export default CheckoutShortcut;
