"use client"

import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout"
import { useMounted, useVideoProperty } from "@/store/state/video"

import { cn } from "@/lib/utils"
import styles from "@/styles/components/stream/video/video.module.scss"

export default function ChannelVideo() {
  const videoRef = React.useRef<HTMLVideoElement | null>(null)
  const resizeRef = React.useRef<HTMLDivElement | null>(null)

  const { setMounted } = useMounted()

  const { isRightColumnClosedByUserAction } = useCacheLayout()

  const { setHeight } = useVideoProperty()

  /*
   * README:
   *  - should have a resize detector
   * */

  // for the innit height
  React.useEffect(() => {
    if (!resizeRef.current) {
      return
    }

    setMounted(true)
    setHeight(resizeRef.current.clientHeight)
  }, [setHeight, resizeRef])

  // binding for resize window effect video dimension
  React.useEffect(() => {
    const handleVideoHeightChange = () => {
      if (!resizeRef.current) {
        return
      }

      setHeight(resizeRef.current.clientHeight)
    }

    window.addEventListener("resize", handleVideoHeightChange)
    return () => window.removeEventListener("resize", handleVideoHeightChange)
  }, [setHeight, resizeRef])

  return (
    <div
      className={cn(
        styles["persistent-player"],
        {
          [`${styles["expand"]}`]: !isRightColumnClosedByUserAction,
        },
        {
          [`${styles["collapse"]}`]: isRightColumnClosedByUserAction,
        }
      )}
    >
      <div className={styles["layout-container"]}>
        <div className={styles["layout-placeholder"]}></div>

        <div className={styles["inner-layout-wrapper"]}>
          <div className={styles["inner-layout-container"]}>
            <div ref={resizeRef} className={styles["inner-layout-overlay"]}>
              <video
                ref={videoRef}
                playsInline
                controls={true}
                src={"/demo-video/夜に駆ける.mp4"}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
