"use client"

import * as React from "react"
import { useChatSidebar } from "@/store/state/chat"
import { useVideoProperty } from "@/store/state/video"

import { cn } from "@/lib/utils"
import styles from "@/styles/application/channel/_components/video.module.scss"

export default function ChannelVideo() {
  const videoRef = React.useRef<HTMLVideoElement | null>(null)

  const { collapsed } = useChatSidebar()

  const { setHeight } = useVideoProperty()

  /*
   * README:
   *  - should have a resize detector
   * */

  // for the innit height
  React.useEffect(() => {
    if (!videoRef.current) {
      return
    }

    setHeight(videoRef.current.clientHeight)
  }, [setHeight, videoRef])

  // binding for resize window effect video dimension
  React.useEffect(() => {
    const handleVideoHeightChange = () => {
      if (!videoRef.current) {
        return
      }

      setHeight(videoRef.current.clientHeight)
    }

    window.addEventListener("resize", handleVideoHeightChange)
    return () => window.removeEventListener("resize", handleVideoHeightChange)
  }, [setHeight, videoRef])

  return (
    <div
      className={cn(
        styles["persistent-player"],
        {
          [`${styles["expand"]}`]: !collapsed,
        },
        {
          [`${styles["collapse"]}`]: collapsed,
        }
      )}
    >
      <div className={styles["layout-container"]}>
        <div className={styles["layout-placeholder"]}></div>

        <div className={styles["inner-layout-wrapper"]}>
          <div className={styles["inner-layout-container"]}>
            <div className={styles["inner-layout-overlay"]}>
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
