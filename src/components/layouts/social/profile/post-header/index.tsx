import * as React from "react"
import Link from "next/link"

import { Icons } from "@/components/icons"
import styles from "@/components/layouts/social/profile/post-header/style.module.scss"
import {formatTimeToNow} from "@/utils/common";

interface PostHeaderProps {
  username: string
  avatarUrl: string
  createdAt: string
  isUserProfile: boolean
}

export default function PostHeader({
  username,
  avatarUrl,
  createdAt,
  isUserProfile,
}: PostHeaderProps) {
  return (
    <div className={styles["post-card-header-wrapper"]}>
      <div className={styles["post-card-header-user-info-wrapper"]}>
        <div className={styles["post-card-header-user-info-container"]}>
          <Link
            href={"/"}
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
              <Link href={""} className={styles["user-info-row-1-container"]}>
                <span>{username}</span>
              </Link>
            </div>

            <p className={styles["post-time"]}>{formatTimeToNow(createdAt as Date)}</p>
          </div>
        </div>
      </div>

      {isUserProfile && (
        <div className={styles["post-action-wrapper"]}>
          <Icons.ellipsisVertical />
        </div>
      )}
    </div>
  )
}
