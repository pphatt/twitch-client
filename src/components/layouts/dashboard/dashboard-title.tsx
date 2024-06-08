"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import { dashboardSite } from "@/config/site"
import { findMatchingSite } from "@/lib/utils"
import styles from "@/styles/components/layouts/dashboard/dashboard-title.module.scss"

export default function DashboardTitle() {
  const pathname = usePathname()

  const route = React.useMemo(
    () => findMatchingSite(pathname, dashboardSite.sites),
    [pathname]
  )

  return (
    <p className={styles["text"]}>
      <span>{route?.title !== "Stream Manager" && route?.title}</span>
    </p>
  )
}
