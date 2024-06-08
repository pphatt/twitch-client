"use client"

import * as React from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"

import styles from "@/styles/components/layouts/dashboard/dashboard-layout-control.module.scss"

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
    <div className={styles["stream-manager-layout-container"]}>
      <Suspense>
        <DashboardStreamLayout />
      </Suspense>

      <Suspense>
        <DashboardSaveChange />
      </Suspense>
    </div>
  )
}
