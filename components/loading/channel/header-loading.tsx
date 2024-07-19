import * as React from "react"

import styles from "@/styles/components/loading/channel/header-loading.module.scss"

export default function HeaderLoading() {
  return (
    <section
      id="live-channel-stream-information"
      aria-label="Stream Information"
    >
      <div className={styles["channel-info-content-wrapper"]}>
        <div className={styles["channel-info-content-container"]}>
          <div className={styles["channel-info-content-layout"]}></div>
        </div>
      </div>
    </section>
  )
}
