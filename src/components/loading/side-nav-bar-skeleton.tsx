import * as React from "react"

import { cn } from "@/lib/utils"
import styles from "@/styles/components/loading/side-nav-bar-skeleton.module.scss"

interface SideNavBarSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function SideNavBarSkeleton({
  className,
  ...props
}: SideNavBarSkeletonProps) {
  return (
    <div
      className={cn(styles["side-nav-bar-skeleton"], className)}
      {...props}
    />
  )
}
