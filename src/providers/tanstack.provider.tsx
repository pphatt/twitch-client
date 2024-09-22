"use client"

import React from "react"
import { queryClientProvider } from "@/providers/query-client.provider"
import { QueryClientProvider } from "@tanstack/react-query"

export default function TanStackProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClientProvider}>
      {children}
    </QueryClientProvider>
  )
}
