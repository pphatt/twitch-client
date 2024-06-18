import * as React from "react"

import { cn } from "@/lib/utils"
import styles from "@/styles/components/common/shared-layout.module.scss"

interface SharedLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SharedLayout({
  children,
  className,
  ...props
}: SharedLayoutProps) {
  return (
    <main className={cn(styles["page-wrapper"], className)} {...props}>
      <div className={styles["page-container"]}>
        <div className={styles["content-wrapper"]}>{children}</div>
      </div>
    </main>
  )
}
