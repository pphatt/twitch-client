import * as React from "react"
import { cookies } from "next/headers"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"

import SimpleBar from "@/components/simplebar"
import styles from "@/styles/application/dashboard/settings/stream/page.module.scss"
import { StreamKeyCard } from "@/app/(dashboard)/u/[username]/settings/stream/_components/stream-key-card"
import StreamUrlCard from "@/app/(dashboard)/u/[username]/settings/stream/_components/stream-url-card"
import {ConnectModal} from "@/components/settings-stream/generate-connect";

export default async function StreamSettingsPage() {
  const { serverUrl, streamKey } = await UserRepository.getStreamKey({
    accessToken: cookies().get("access-token")!.value,
  })

  return (
    <SimpleBar forceVisible={"y"} className={styles["scrollable-area"]}>
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

              <StreamUrlCard url={serverUrl} />
            </div>

            <div className={styles["content-block-container"]}>
              <div className={styles["block-label-wrapper"]}>
                <div className={styles["block-label-container"]}>
                  <label className={styles["block-label"]}>Stream Key</label>
                </div>
              </div>

              <StreamKeyCard streamKey={streamKey} />
            </div>
          </div>

          <ConnectModal />
        </div>

        <div></div>
      </div>
    </SimpleBar>
  )
}
