"use client";
import { useTicketSearch } from "@/dataHooks/useTicketSearch"
import React, { useState } from "react";
import { useUserOptions } from "@/dataHooks/useUserOptions";
import TicketCard from "@/components/TicketCard";
import { TicketPackage } from "@/types";

const TicketSelector: React.FC = () => {
  const { data: userOptions, setData: setUserOptions} = useUserOptions();

  const {
    isPending,
    isError,
    data: ticketsAvailable,
    error,
  } = useTicketSearch();

  const handleSelect = (p: TicketPackage) => {
    setUserOptions({ticketPackage: p});
  }

  return (
      <div className="p-5 flex flex-wrap flex-row justify-center gap-10 w-full">
        {ticketsAvailable ? (
          ticketsAvailable.map((pack: TicketPackage) => (
            <TicketCard
              key={pack.id}
              ticketPackage={pack}
              userOptions = {userOptions}
              onSelect={()=>handleSelect(pack)}
            />
          ))
        ) : isPending ? (
          "Loading..."
        ) : (
          <div>
            Unfortunately, we didn't have any tickets available at this time.
            Please try again later.
          </div>
        )}
      </div>
  );
};

export default TicketSelector;
