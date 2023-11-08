"use client";

import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

const QueryProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default QueryProvider;
