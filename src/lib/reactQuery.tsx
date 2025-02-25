"use client";

import { QueryClient } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { removeOldestQuery } from "@tanstack/react-query-persist-client";

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

export const browserQueryClient = makeQueryClient();
export const browserPersister = createSyncStoragePersister({
  storage: window.sessionStorage,
  retry: removeOldestQuery,
});