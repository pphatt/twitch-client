import * as React from "react"
import dynamic from "next/dynamic"
import { whoami } from "@/auth"

import { SiteHeader } from "@/components/layouts/site-header"
import styles from "@/styles/application/lobby/layout.module.scss"

const SideNavBar = dynamic(() => import("@/components/layouts/side-nav-bar"), {
  ssr: false,
})

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  try {
    const username = whoami()

    return (
      <>
        <SiteHeader username={username} />
        <main className={styles["content-layout"]}>
          <div className={styles["side-navbar"]}>
            <SideNavBar />
          </div>

          <>{children}</>
        </main>
      </>
    )
  } catch (error) {}
}
