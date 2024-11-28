import * as React from "react"

import styles from "@/components/tables/user-tables/account-status/style.module.scss"

interface StatusColumnProps {
  accountStatus: string
}

export function AccountStatusColumn({ accountStatus }: StatusColumnProps) {
  return (
    <div className={styles["data-status"]} data-status={accountStatus}>
      {accountStatus
        .toLocaleLowerCase()
        .split("_")
        .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
        .join(" ")}
    </div>
  )
}
