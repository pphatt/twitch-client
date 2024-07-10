import * as React from "react"

import { sleep } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import styles from "@/styles/application/dashboard/settings/stream/page.module.scss"
import { StreamKeyCard } from "@/app/(dashboard)/u/[username]/settings/stream/_components/stream-key-card"
import StreamUrlCard from "@/app/(dashboard)/u/[username]/settings/stream/_components/stream-url-card"

export default async function StreamSettingsPage() {
  const [] = await Promise.all([sleep(1000), sleep(1000)])

  return (
    <ScrollArea className={styles["scrollable-area"]}>
      <div className={styles["content-wrapper"]}>
        <div className={styles["content-container"]}>
          <div className={styles["content-header-wrapper"]}>
            <h3>Stream Key & Preferences</h3>
          </div>

          <div className={styles["content-block-wrapper"]}>
            <div className={styles["content-block-container"]}>
              <div className={styles["block-label-wrapper"]}>
                <div className={styles["block-label-container"]}>
                  <label className={styles["block-label"]}>Stream URL</label>
                </div>
              </div>

              <StreamUrlCard
                url={"live_455233884_HcemGFEb1sRyLOHgRHfLVlSwiRej1O"}
              />
            </div>

            <div className={styles["content-block-container"]}>
              <div className={styles["block-label-wrapper"]}>
                <div className={styles["block-label-container"]}>
                  <label className={styles["block-label"]}>Stream Key</label>
                </div>
              </div>

              <StreamKeyCard
                streamKey={
                  "sk_us-west-2_mc8IFgHGHEz0_HJZvHuBWv7BpOUGAGLz2tZtSUuJ5hR"
                }
              />
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </ScrollArea>
  )
}
