import * as React from "react"

import { Icons } from "@/components/icons"
import styles from "@/components/layouts/social/details/article-foorer/style.module.scss"
import LikeBtn from "@/components/layouts/social/details/like-btn"

export default function ArticleFooter() {
  return (
    <div className={styles["article-footer-layout-wrapper"]}>
      <div className={styles["article-footer-reaction-group"]}>
        <div className={styles["article-footer-reaction-item-wrapper"]}>
          <Icons.love fill={"#ef4444"} />
          <span>1</span>
        </div>
      </div>

      <div className={styles["article-footer-layout-container"]}>
        <div className={styles["article-footer-left-group"]}>
          <LikeBtn />

          <div className={styles["btn-wrapper"]}>
            <div className={styles["btn-container"]}>
              <Icons.messageCircle fill={"none"} />

              <span>0</span>
            </div>
          </div>
        </div>

        <div className={styles["btn-wrapper"]}>
          <div className={styles["btn-container"]}>
            <Icons.share fill={"white"} />

            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  )
}
