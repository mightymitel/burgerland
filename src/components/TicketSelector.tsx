"use client";
import { useTicketSearch } from "@/dataHooks/useTicketSearch";
import React from "react";
import { useUserOptions } from "@/dataHooks/useUserOptions";
import TicketCard from "@/components/TicketCard";
import { TicketPackage } from "@/types";
import { noTicketMessage } from "@/data/planner";

interface TicketSelectorProps {
  onChange?: (p: TicketPackage) => void;
}

const TicketSelector: React.FC<TicketSelectorProps> = ({ onChange }) => {
  const { data: userOptions, setData: setUserOptions } = useUserOptions();

  const {
    isPending,
    data: ticketsAvailable,
  } = useTicketSearch();

  const handleSelect = (p: TicketPackage) => {
    setUserOptions({ ticketPackage: p });
    if(onChange != undefined) onChange(p);
  };

  return (
    <div className="p-5 flex flex-wrap flex-row justify-center gap-10 w-full" role="region" aria-label="Ticket Selection">
      {ticketsAvailable ? (
        ticketsAvailable.map((pack: TicketPackage) => (
          <TicketCard
            key={pack.id}
            ticketPackage={pack}
            userOptions={userOptions}
            onSelect={() => handleSelect(pack)}
          />
        ))
      ) : isPending ? (
        <div role="status" aria-live="polite" className="text-center">
          <span className="sr-only">Loading tickets...</span>
          Loading...
        </div>
      ) : (
        <div role="alert" className="text-center text-red-600">
          {noTicketMessage}
        </div>
      )}
    </div>
  );
};

export default TicketSelector;
