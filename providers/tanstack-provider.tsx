"use client"

import React from "react"
import { queryClient } from "@/providers/query-client"
import { QueryClientProvider } from "@tanstack/react-query"

export default function TanStackProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
