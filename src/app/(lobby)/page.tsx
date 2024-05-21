import * as React from "react"
import { Suspense } from "react"

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
                <Suspense fallback={""}>
                  <CategorySection categories={categoryData.categories} />
                </Suspense>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
