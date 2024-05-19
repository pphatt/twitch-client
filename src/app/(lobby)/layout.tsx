import * as React from "react"

import { SiteHeader } from "@/components/layouts/site-header"
import { SideNavBar } from "@/components/layouts/side-nav-bar"
import styles from "@/styles/lobby/layout.module.scss"

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <main className={styles["content-layout"]}>
        <div className={styles["side-navbar"]}>
          <SideNavBar />
        </div>

        <>{children}</>
      </main>
    </>
  )
}
