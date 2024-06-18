import * as React from "react"

import { cn } from "@/lib/utils"
import styles from "@/styles/components/loading/category-card-skeleton.module.scss"

interface CategoryCardSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function CategoryCardSkeleton({
  className,
  ...props
}: CategoryCardSkeletonProps) {
  return (
    <div className={cn(styles["card-skeleton-wrapper"], className)} {...props}>
      <div className={styles["card-skeleton-container"]}>
        <div className={styles["card-image-skeleton-wrapper"]}>
          <div className={styles["card-image-skeleton-overlay"]}></div>
          <span className={styles["card-image-skeleton-container"]}>
            <span className={styles["image-skeleton"]}></span>
          </span>
        </div>
        <span className={styles["name-skeleton-wrapper"]}></span>
        <div className={styles["view-skeleton-wrapper"]}></div>
      </div>
    </div>
  )
}
