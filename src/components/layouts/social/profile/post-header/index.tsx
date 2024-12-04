import * as React from "react"
import Link from "next/link"
import { formatTimeToNow } from "@/utils/common"

import PostAction from "@/components/layouts/social/profile/post-action"
import styles from "@/components/layouts/social/profile/post-header/style.module.scss"

interface PostHeaderProps {
  postId: string
  username: string
  avatarUrl: string
  createdAt: Date
  isUserProfile: boolean
  validateData: () => void
}

export default function PostHeader({
  postId,
  username,
  avatarUrl,
  createdAt,
  isUserProfile,
  validateData,
}: PostHeaderProps) {
  return (
    <div className={styles["post-card-header-wrapper"]}>
      <div className={styles["post-card-header-user-info-wrapper"]}>
        <div className={styles["post-card-header-user-info-container"]}>
          <Link
            href={`/social/profile/${username}`}
            className={styles["post-card-header-user-avatar-wrapper"]}
          >
            <div className={styles["post-card-header-user-avatar-container"]}>
              <img
                className={styles["post-card-header-user-avatar"]}
                src={
                  avatarUrl !== ""
                    ? avatarUrl
                    : "/avatar/user-default-picture.png"
                }
                alt={""}
              />
            </div>
          </Link>

          <div className={styles["post-card-header-user-info-overlay"]}>
            <div className={styles["user-info-row-1-wrapper"]}>
              <Link
                href={`/social/profile/${username}`}
                className={styles["user-info-row-1-container"]}
              >
                <span>{username}</span>
              </Link>
            </div>

            <p className={styles["post-time"]}>{formatTimeToNow(createdAt)}</p>
          </div>
        </div>
      </div>

      {isUserProfile && (
        <PostAction postId={postId} validateData={validateData} />
      )}
    </div>
  )
}
