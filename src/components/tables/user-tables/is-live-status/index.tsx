import * as React from "react"

import styles from "@/components/tables/user-tables/is-live-status/style.module.scss"

interface StatusColumnProps {
  isLiveStatus: boolean
}

export function IsLiveColumn({ isLiveStatus }: StatusColumnProps) {
  return (
    <div className={styles["data-status"]} data-status={isLiveStatus}>
      {isLiveStatus ? "Live" : "Offline"}
    </div>
  )
}
