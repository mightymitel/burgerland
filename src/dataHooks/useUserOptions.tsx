import { useQuery } from '@tanstack/react-query';
import { UserOptions } from '@/types';
import {getQueryClient} from '@/app/providers';

export const useUserOptions = () => {
    const queryClient = getQueryClient();
    const {isError, isLoading, data} = useQuery<UserOptions>({ 
        queryKey: ['userOptions'],
        initialData: {},
        queryFn: () => {return {}},
        staleTime: 1000 * 60 * 60 * 24 * 30, // 30 days
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        });
    const setData = async (userOptions: UserOptions) => {
        queryClient.setQueryData(['userOptions'], data ? {...data, ...userOptions} : userOptions);
    }
  
    return {isError, isLoading, data, setData};
};
