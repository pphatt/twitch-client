import * as React from "react"

import styles from "@/components/layouts/social/details/comments-section/style.module.scss"
import CreateComment from "@/components/layouts/social/details/create-comment"

export default function CommentsSection() {
  return (
    <div className={styles["comments-section-wrapper"]}>
      <CreateComment />

      <div className={styles["comments-container-wrapper"]}>
        <div className={styles["comments-container-header-wrapper"]}>
          <div className={styles["comments-container-header-container"]}>
            <div className={styles["comments-container-header-overlay"]}>
              <span>
                <span className={styles["comment-container-header-text"]}>
                  All comments 0
                </span>
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className={styles["no-comment-text"]}>No comment yet.</div>
        </div>
      </div>
    </div>
  )
}
