import * as React from "react"

import DashboardSiteHeader from "@/components/layouts/dashboard-site-header"
import styles from "@/styles/dashboard/layout.module.scss"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className={styles["layout-wrapper"]}>
      <div className={styles["layout-container"]}>
        <DashboardSiteHeader />
        <>{children}</>
      </div>
    </div>
  )
}
