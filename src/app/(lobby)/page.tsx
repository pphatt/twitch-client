import * as React from "react"
import dynamic from "next/dynamic"

import { categoryData, liveChannels } from "@/config/data"
import { sleep } from "@/lib/utils"
import styles from "@/styles/lobby/page.module.scss"

const RecommendLiveChannels = dynamic(
  () => import("@/components/recommend-live-channels"),
  {
    ssr: false,
  }
)

const CategorySection = dynamic(() => import("@/components/category-section"), {
  ssr: false,
})

export default async function LobbyPage() {
  const [] = await Promise.all([sleep(1000), sleep(1000)])

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
