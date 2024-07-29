import * as React from "react"

import { Icons } from "@/components/icons"
import styles from "@/styles/components/stream-manager/quick-action-options/button-layout.module.scss"

interface ButtonLayoutProps {
  children: React.ReactNode
}

export function ButtonLayout({ children }: ButtonLayoutProps) {
  return (
    <div className={styles["quick-action-btn-wrapper"]}>
      <div className={styles["quick-action-btn-container"]}>
        <div className={styles["quick-action-btn-overlay"]}>{children}</div>
      </div>
    </div>
  )
}

interface ButtonInnerLayoutProps {
  children: React.ReactNode
  text: string
  svg: keyof typeof Icons
}

export function ButtonInnerLayout({ svg }: ButtonInnerLayoutProps) {
  return (
    <div className={styles["btn-inner-layout-wrapper"]}>
      <div className={styles["btn-icon-wrapper"]}>
        <div className={styles["btn-icon-container"]}>
          <figure className={styles["btn-icon-figure"]}>{svg}</figure>
        </div>
      </div>

      <div></div>
    </div>
  )
}
