import { useQuery } from "@tanstack/react-query";
import { ticketPackages } from "@/data/mockData";
import { useUserOptions } from "./useUserOptions";

export const useTicketSearch = () => {
  const { data: userOptions } = useUserOptions();
  const fetchTickets = async () => {
    return ticketPackages.filter(
      (p) =>
        p.conditions == null ||
        p.conditions.every((c) => c.condition(userOptions))
    );
  };
  return useQuery({
    queryKey: ["ticketSearch", userOptions],
    queryFn: fetchTickets,
    enabled: !!userOptions,
  });
};
