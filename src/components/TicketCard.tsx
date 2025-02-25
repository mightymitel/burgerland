import React from "react";
import { TicketPackage, UserOptions } from "../types";
import cn from "classnames";

interface TicketCardProps {
  ticketPackage: TicketPackage;
  userOptions: UserOptions;
  onSelect?: () => void;
}

const TicketCard: React.FC<TicketCardProps> = ({
  ticketPackage,
  userOptions,
  onSelect,
}) => {
  const { nAdults = 1, nChildren = 0, date, isFamily = false } = userOptions;
  const totalPrice =
    nAdults * ticketPackage.priceAdult + nChildren * ticketPackage.priceChild;
  const selected = userOptions.ticketPackage?.id === ticketPackage.id;

  return (
    <div
      className={cn("filter drop-shadow-xl", {
        " ring-offset-4 ring-4 ring-red-700 rounded-xl": selected,
      })}
    >
      <div
        className={cn(
          "p-2 pb-8 w-60 ticket_mask bg-yellow-300 rounded-md",
          "ticket_mask",
          "cursor-pointer"
        )}
      >
        <div className="px-6 py-4" onClick={onSelect}>
          <div className="font-bold text-xl mb-2 h-14 border-b-red-700 border-b-2">
            {ticketPackage.name}
          </div>
          <div className="text-base mb-2">{date}</div>
          <ul className="text-sm ">
            {nAdults > 0 && (
              <li className="flex justify-between">
                <span>Adult €</span>
                <span>
                  {ticketPackage.priceAdult.toFixed(2)} x {nAdults}
                </span>
                <span className="flex-grow border-b-2 border-b-red-700 border-dotted">
                  {" "}
                </span>
                <span>€{(ticketPackage.priceAdult * nAdults).toFixed(2)}</span>
              </li>
            )}
            {nChildren > 0 && (
              <li className="flex justify-between">
                <span>Child €</span>
                <span>
                  {ticketPackage.priceChild.toFixed(2)} x {nChildren}
                </span>
                <span className="flex-grow border-b-2 border-b-red-700 border-dotted"></span>
                <span>
                  €{(ticketPackage.priceChild * nChildren).toFixed(2)}
                </span>
              </li>
            )}
          </ul>
        </div>
        <div className="border-t-red-700 border-t-4 px-6 py-4">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <div className="pb-4 flex justify-center">
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            onClick={onSelect}
          >
            Select Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
