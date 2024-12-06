import * as React from "react"
import type { PostComment as PostCommentType } from "@modules/user/presentation/http/dto/response/social/get-all-comments.response.dto"
import PostComment from "src/components/layouts/social/details/comments/post-comment"

import styles from "@/components/layouts/social/details/comments/comments-section/style.module.scss"
import PostReplyComment from "@/components/layouts/social/details/comments/post-reply-comment"
import CreateComment from "@/components/layouts/social/details/create-comment"

interface CommentsSectionProps {
  postId: string
  comments: PostCommentType[]
}

function flattenReplies(comments: PostCommentType[]) {
  const flattened = []

  function extractReplies(comment: PostCommentType) {
    const { replies, ...rest } = comment
    flattened.push(rest)

    if (replies && replies.length) {
      for (const reply of replies) {
        extractReplies(reply)
      }
    }
  }

  comments.forEach(extractReplies)

  return flattened as PostCommentType[]
}

export default function CommentsSection({
  postId,
  comments,
}: CommentsSectionProps) {
  return (
    <div className={styles["comments-section-wrapper"]}>
      <CreateComment postId={postId} />

      <div className={styles["comments-container-wrapper"]}>
        <div className={styles["comments-container-header-wrapper"]}>
          <div className={styles["comments-container-header-container"]}>
            <div className={styles["comments-container-header-overlay"]}>
              <span>
                <span className={styles["comment-container-header-text"]}>
                  All comments {comments.length}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div>
          {comments.length === 0 ? (
            <div className={styles["no-comment-text"]}>No comment yet.</div>
          ) : (
            <div className={styles["comments-list-wrapper"]}>
              {comments.map((comment, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={styles["user-comment-wrapper"]}
                >
                  <div className={styles["user-comment-container"]}>
                    <PostComment
                      comment={comment}
                      postId={postId}
                      replyToId={comment.id}
                    />

                    <div className={styles["comments-replies-wrapper"]}>
                      {flattenReplies(comment.replies).map((comment, index) => (
                        <PostReplyComment
                          key={index}
                          comment={comment}
                          postId={postId}
                          replyToId={comment.id}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
