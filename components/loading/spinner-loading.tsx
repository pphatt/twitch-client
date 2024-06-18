import * as React from "react"

import { cn } from "@/lib/utils"
import styles from "@/styles/components/loading/spinner-loading.module.scss"

interface SpinnerLoadingProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SpinnerLoading({
  className,
  ...props
}: SpinnerLoadingProps) {
  return (
    <div className={cn(styles["shell-loader"], className)} {...props}>
      <div className={styles["shell-spinner"]}></div>
    </div>
  )
}
