import * as React from "react"
import Link from "next/link"
import AnimatedLogo from "@/assets/logo/animated-logo"

import styles from "@/styles/application/user/layout.module.scss"

export default function AccountRecoveryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles["layout-wrapper"]}>
      <nav className={styles["nav-wrapper"]}>
        <div className={styles["nav-container"]}>
          <Link className={styles["logo-wrapper"]} href={"/"}>
            <div className={styles["logo-container"]}>
              <AnimatedLogo />
            </div>
          </Link>
        </div>
      </nav>

      <div className={styles["content-wrapper"]}>{children}</div>
    </div>
  )
}
