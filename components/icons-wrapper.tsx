import * as React from "react"

import styles from "@/styles/components/icons-wrapper.module.scss"

interface IconsWrapperProps {
  children?: React.ReactNode
  side?: "left" | "right"
}

export default function IconsWrapper({
  children,
  side = "right",
}: IconsWrapperProps) {
  return (
    <div className={styles["icons-wrapper"]} data-side={side}>
      <div className={styles["icons-container"]}>
        <div className={styles["icons-overlay"]}>{children}</div>
      </div>
    </div>
  )
}
