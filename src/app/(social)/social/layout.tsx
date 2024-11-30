import * as React from "react"

import styles from "@/styles/application/social/layout.module.scss"

import "@/styles/vendors/social.scss"
import HomeSiteHeader from "@/components/layouts/social/site-header";

interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className={styles["layout"]}>
      <HomeSiteHeader />

      <>{children}</>
    </div>
  )
}
