import * as React from "react"

import { channelsData } from "@/config/data"
import { SideNavBar } from "@/components/layouts/side-nav-bar"
import { SiteHeader } from "@/components/layouts/site-header"
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
          <SideNavBar channels={channelsData.channels} />
        </div>

        <>{children}</>
      </main>
    </>
  )
}
