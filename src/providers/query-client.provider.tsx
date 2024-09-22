import { QueryClient } from "@tanstack/react-query"

export const queryClientProvider = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      gcTime: 60000,
    },
  },
})
