import * as React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ButtonLayout } from "@/components/stream-manager/quick-action-options/button-layout"
import styles from "@/styles/components/stream-manager/quick-action-options/edit-stream-info.module.scss"

export default function EditStreamInfo() {
  return (
    <ButtonLayout>
      <Button
        className={styles["edit-stream-info-btn"]}
        style={{
          animationDelay: "-0.331355s",
        }}
      >
        <div className={styles["btn-inner-layout-wrapper"]}>
          <div className={styles["btn-icon-wrapper"]}>
            <div className={styles["btn-icon-container"]}>
              <figure className={styles["btn-icon-figure"]}>
                <Icons.pen />
              </figure>
            </div>
          </div>

          <div className={styles["edit-stream-text-wrapper"]}>
            <div className={styles["edit-stream-text-container"]}>
              <div className={styles["edit-stream-text-overlay"]}>
                <p className={styles["edit-stream-text"]}>Edit Stream Info</p>
              </div>
            </div>
          </div>
        </div>
      </Button>
    </ButtonLayout>
  )
}
