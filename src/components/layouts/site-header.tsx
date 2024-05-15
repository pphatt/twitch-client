import * as React from "react"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/layouts/main-nav"
import styles from "@/styles/components/layouts/site-header.module.scss"

export function SiteHeader() {
  return (
    <div className={styles["site-header-wrapper"]}>
      <div className={styles["site-header-container"]}>
        <MainNav items={siteConfig.mainNav} />
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
