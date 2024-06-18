import * as React from "react"

import { cn } from "@/lib/utils"
import styles from "@/styles/components/loading/live-channel-card-skeleton.module.scss"

interface LiveChannelCardSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function LiveChannelCardSkeleton({
  className,
  ...props
}: LiveChannelCardSkeletonProps) {
  return (
    <div className={cn(styles["card-skeleton-wrapper"], className)} {...props}>
      <div className={styles["card-skeleton-container"]}>
        <div className={styles["card-image-skeleton-wrapper"]}>
          <div className={styles["card-image-skeleton-overlay"]}></div>
          <span className={styles["card-image-skeleton-container"]}>
            <span className={styles["image-skeleton"]}></span>
          </span>
        </div>

        <div className={styles["description-skeleton-wrapper"]}>
          <div className={styles["description-skeleton-container"]}>
            <div className={styles["avatar-skeleton-wrapper"]}>
              <div>
                <span className={styles["avatar-skeleton-container"]}></span>
              </div>
            </div>
            <div className={styles["content-skeleton-wrapper"]}>
              <p className={styles["content-skeleton-container"]}>
                <span className={styles["title-skeleton-wrapper"]}></span>
              </p>
              <p className={styles["content-smaller-skeleton-container"]}>
                <span className={styles["common-skeleton-wrapper"]}></span>
              </p>
              <p className={styles["content-smaller-skeleton-container"]}>
                <span className={styles["common-skeleton-wrapper"]}></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
