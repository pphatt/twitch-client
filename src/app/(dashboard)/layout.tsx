import * as React from "react"

import styles from "@/styles/dashboard/layout.module.scss"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className={styles["layout-wrapper"]}>
      <div className={styles["layout-container"]}>{children}</div>
    </div>
  )
}
