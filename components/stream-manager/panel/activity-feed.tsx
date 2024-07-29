"use client"

import * as React from "react"

import styles from "@/styles/components/stream-manager/panel/activity-feed.module.scss"

export default function ActivityFeed() {
  return (
    <div className={styles["activity-feed-layout-wrapper"]}>
      <div className={styles["activity-feed-layout-container"]}>
        <div className={styles["text-wrapper"]}>
          <h4 className={styles["text"]}>It&apos;s quiet. Too quiet...</h4>
        </div>

        <div className={styles["sm-text-wrapper"]}>
          <div className={styles["sm-text-container"]}>
            <p className={styles["sm-text"]}>
              We&apos;ll show your new follows, subs, cheers, and raids activity
              here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
