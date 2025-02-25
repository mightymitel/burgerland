import { useQuery, isServer } from "@tanstack/react-query";
import { UserOptions } from "@/types";
import { getQueryClient } from "@/app/providers";

export const useUserOptions = () => {
  const queryClient = getQueryClient();
  const currentData = queryClient.getQueryData(["userOptions"]) as
    | UserOptions
    | undefined;
  const { isError, isLoading, data } = useQuery<UserOptions>({
    queryKey: ["userOptions"],
    initialData: {
      date: new Date().toISOString().split('T')[0], // Only day, month, and year
      nAdults: 0,
      nChildren: 0,
      isFamily: false
    },
    queryFn: () => {
      return { ...currentData };
    },
    staleTime: 1000 * 60 * 60 * 24 * 30, // 30 days
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!currentData,
  });
  const setData = async (userOptions: UserOptions) => {
    queryClient.setQueryData(
      ["userOptions"],
      data ? { ...data, ...userOptions } : userOptions
    );
  };

  return { isError, isLoading, data, setData };
};
