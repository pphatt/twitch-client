import * as React from "react"

import styles from "@/components/layouts/social/details/empty-post-screen/style.module.scss"

export default function EmptyPostScreen() {
  return (
    <div className={styles["empty-post-screen-wrapper"]}>
      <div className={styles["empty-post-screen-container"]}>
        <p className={styles["empty-post-screen-text"]}>
          There&apos;s nothing here...
        </p>
      </div>
    </div>
  )
}
