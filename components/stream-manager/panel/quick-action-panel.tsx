import * as React from "react"

import SimpleBar from "@/components/simplebar"
import EditStreamInfo from "@/components/stream-manager/quick-action-options/edit-stream-info"
import styles from "@/styles/components/stream-manager/panel/quick-action-panel.module.scss"

export default function QuickActionPanel() {
  return (
    <div className={styles["quick-action-panel-wrapper"]}>
      <SimpleBar
        forceVisible={"y"}
        simpleContentWrapperStyle={{
          padding: 0,
        }}
      >
        <div className={styles["quick-action-panel-container"]}>
          <EditStreamInfo />
        </div>
      </SimpleBar>
    </div>
  )
}
