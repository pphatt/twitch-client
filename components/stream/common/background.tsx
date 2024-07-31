"use client"

import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout"

import { cn } from "@/lib/utils"
import styles from "@/styles/components/stream/common/background.module.scss"

export default function Background() {
  const { isRightColumnClosedByUserAction } = useCacheLayout()

  return (
    <div
      className={cn(styles["channel-root__player"], {
        [`${styles["channel-root__player--with-chat"]}`]:
          !isRightColumnClosedByUserAction,
      })}
    >
      <div className={styles["channel-root-layout"]}>
        <div
          style={{
            // transform: "scale(4)",
            opacity: "1",
            backgroundColor: "rgb(0, 0, 0)",
          }}
        >
          <div style={{ transform: "scale(0.25)" }}>
            <div
              className={styles["channel-root__player-background"]}
              style={{
                backgroundImage: "url(/common/404_processing_320x180.png)",
              }}
            >
              <div
                className={cn(
                  styles["channel-page__video-player"],
                  styles["channel-page__video-player--with-chat"]
                )}
              >
                <div className={styles["channel-video-placeholder-wrapper"]}>
                  <div
                    className={styles["channel-video-placeholder-container"]}
                  ></div>
                  <div
                    className={styles["channel-video-placeholder-layout"]}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
