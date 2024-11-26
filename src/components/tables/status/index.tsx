import * as React from "react"

import styles from "@/components/tables/status/style.module.scss"

interface StatusColumnProps {
  status: string
}

export function StatusColumn({ status }: StatusColumnProps) {
  return (
    <div className={styles["data-status"]} data-status={status}>
      {status.toLowerCase()}
    </div>
  )
}
