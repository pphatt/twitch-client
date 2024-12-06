import * as React from "react"

import styles from "@/components/layouts/social/details/create-comment/style.module.scss"
import CommentsInput from "@/components/layouts/social/details/comments/comment-input";

interface CreateCommentProps {
  postId: string
}

export default function CreateComment({ postId }: CreateCommentProps) {
  return (
    <div className={styles["reply-box-wrapper"]}>
      <CommentsInput postId={postId} />
    </div>
  )
}
