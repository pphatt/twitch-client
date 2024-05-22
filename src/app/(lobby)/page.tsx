import * as React from "react"

import { categoryData, liveChannels } from "@/config/data"
import CategorySection from "@/components/category-section"
import { RecommendLiveChannels } from "@/components/recommend-live-channels"
import styles from "@/styles/lobby/page.module.scss"

export default function LobbyPage() {
  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["page-container"]}>
        <div className={styles["content-wrapper"]}>
          <div className={styles["content-container"]}>
            <section className={styles["layout-wrapper"]}>
              <div>
                <RecommendLiveChannels channels={liveChannels.channels} />
              </div>

              <div>
                <CategorySection categories={categoryData.categories} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
