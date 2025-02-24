"use client";

import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { Persister, PersistQueryClientProvider, removeOldestQuery } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60, // 1 minute
        refetchOnMount: false,
        refetchOnReconnect: false,
        gcTime: 1000 * 60 * 60 * 24 * 30, // 30 days
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;
let browserPersister: Persister | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

function getPersister(){
    if (isServer) {
        return undefined;
    } else {
        if (!browserPersister) browserPersister = createSyncStoragePersister({
            storage: window.sessionStorage,
            retry: removeOldestQuery,
        });
        return browserPersister;
    }
}

export default function Providers({ children }: { children: React.ReactNode }) {
    const queryClient = getQueryClient();
    const persister = getPersister();
    return (
        <>
            {persister ? (
                <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }} onSuccess={()=>console.log("restored")}>
                    {children}
                </PersistQueryClientProvider>
            ) : (
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            )}
        </>
    );
}