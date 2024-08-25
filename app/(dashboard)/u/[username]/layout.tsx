import * as React from "react"
import dynamic from "next/dynamic"
import EditLayoutContext from "@/context/edit-layout-context"
import UpdateLayoutContext from "@/context/update-layout-context"

import { dashboardSite } from "@/config/site"
import DashboardSiteHeader from "@/components/layouts/dashboard/dashboard-site-header"
import styles from "@/styles/application/dashboard/layout.module.scss"

const DashboardSideNavBar = dynamic(
  () => import("@/components/layouts/dashboard/dashboard-side-nav-bar"),
  { ssr: false }
)

interface DashboardLayoutProps {
  children: React.ReactNode
}

export const runtime = "edge"

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <EditLayoutContext>
      <UpdateLayoutContext>
        <div className={styles["layout-wrapper"]}>
          <div className={styles["layout-container"]}>
            <DashboardSiteHeader />

            <div className={styles["content-wrapper"]}>
              <DashboardSideNavBar sites={dashboardSite.sites} />

              <div className={styles["content-container"]}>
                <div className={styles["content-overlay"]}>{children}</div>
              </div>
            </div>
          </div>
        </div>
      </UpdateLayoutContext>
    </EditLayoutContext>
  )
}
