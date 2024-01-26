"use client";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * (60 * 1000), // 10 mins
      cacheTime: 15 * (60 * 1000), // 15 mins
      refetchIntervalInBackground: false,
      retry: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchInterval: 900000,
      refetchOnWindowFocus: false,
    },
  },
});

const QueryProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    {process.env.NODE_ENV !== "production" && (
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    )}
  </QueryClientProvider>
);

export default QueryProvider;
