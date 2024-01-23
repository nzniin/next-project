'use client';
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

function QueryClientProvider({children}: PropsWithChildren) {
  return (
    <ReactQueryClientProvider client={queryClient}>
        {children}
    </ReactQueryClientProvider>
  )
}

export default QueryClientProvider