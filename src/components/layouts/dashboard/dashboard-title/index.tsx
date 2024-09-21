"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { findMatchingSite } from "@/utils/common"

import { dashboardSite } from "@/config/site"
import { Text } from "@/components/layouts/dashboard/dashboard-title/style"

export default function DashboardTitle() {
  const pathname = usePathname()

  const route = React.useMemo(
    () => findMatchingSite(pathname, dashboardSite.sites),
    [pathname]
  )

  return (
    <Text>
      <span>{route?.title !== "Stream Manager" && route?.title}</span>
    </Text>
  )
}
