import * as React from "react"
import dynamic from "next/dynamic"

import styles from "@/components/layouts/social/details/create-comment/style.module.scss"

const CommentInput = dynamic(
  () => import("@/components/layouts/social/details/comment-input"),
  { ssr: false }
)

export default function CreateComment() {
  return (
    <div className={styles["reply-box-wrapper"]}>
      <CommentInput articleId={"1"} replyToId={undefined} />
    </div>
  )
}
