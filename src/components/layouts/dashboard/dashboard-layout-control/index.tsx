"use client"

import * as React from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"

import { StreamManagerLayoutContainer } from "@/components/layouts/dashboard/dashboard-layout-control/style"

const DashboardStreamLayout = dynamic(
  () => import("@/components/layouts/dashboard/dashboard-stream-layout"),
  {
    ssr: false,
    loading: () => {
      return null
    },
  }
)

const DashboardSaveChange = dynamic(
  () => import("@/components/layouts/dashboard/dashboard-save-change")
)

export default function DashboardLayoutControl() {
  const pathname = usePathname()

  const isStreamRoute = React.useMemo(
    () => pathname.includes("/stream-manager"),
    [pathname]
  )

  if (!isStreamRoute) {
    return null
  }

  return (
    <StreamManagerLayoutContainer>
      <Suspense>
        <DashboardStreamLayout />
      </Suspense>

      <Suspense>
        <DashboardSaveChange />
      </Suspense>
    </StreamManagerLayoutContainer>
  )
}
