import * as React from "react"

import { Icons } from "@/components/icons"
import AddFriendButton from "@/components/layouts/social/profile/add-friend-btn"
import FollowButton from "@/components/layouts/social/profile/follow-btn"
import styles from "@/components/layouts/social/profile/profile-topbar/style.module.scss"

interface ProfileTopbarProps {
  username: string
  displayName: string
  avatarUrl: string
  bio: string
  numberOfFollowers: number
  numberOfFollowings: number
  numberOfPosts: number

  userId: string
  isUserFollowed: boolean
  isTheSameUser: boolean
  friendStatus: string
}

export default function ProfileTopbar({
  username,
  displayName,
  bio,
  avatarUrl,
  numberOfFollowers,
  numberOfFollowings,
  numberOfPosts,
  userId,
  isUserFollowed,
  isTheSameUser,
  friendStatus,
}: ProfileTopbarProps) {
  return (
    <div className={styles["root-page-topbar-wrapper"]}>
      <div className={styles["root-page-topbar-container"]}>
        <div className={styles["root-page-topbar-overlay"]}>
          <div className={styles["topbar-image-wrapper"]}>
            <div className={styles["topbar-image-container"]}>
              <img
                className={styles["topbar-image"]}
                src={
                  avatarUrl !== ""
                    ? avatarUrl
                    : "/avatar/user-default-picture.png"
                }
                alt={""}
              />
            </div>
          </div>

          <div className={styles["user-info-wrapper"]}>
            <div className={styles["user-info-top-wrapper"]}>
              <div className={styles["user-info-row-1"]}>
                <span>{displayName ? displayName : username}</span>
              </div>

              <div className={styles["user-info-row-2"]}>
                <Icons.messageSquareText />
                <p>
                  {bio !== "" ? bio : "Default signature given to everyone~"}
                </p>
              </div>
            </div>

            <div className={styles["user-info-bottom-wrapper"]}>
              <div className={styles["user-info-bottom-item-wrapper"]}>
                <span className={styles["item-num"]}>{numberOfPosts}</span>
                <span className={styles["item-name"]}>
                  {numberOfPosts < 0 ? "Post" : "Posts"}
                </span>
                <span className={styles["item-split"]}>/</span>
              </div>

              <div className={styles["user-info-bottom-item-wrapper"]}>
                <span className={styles["item-num"]}>{numberOfFollowings}</span>
                <span className={styles["item-name"]}>Following</span>
                <span className={styles["item-split"]}>/</span>
              </div>

              <div className={styles["user-info-bottom-item-wrapper"]}>
                <span className={styles["item-num"]}>{numberOfFollowers}</span>
                <span className={styles["item-name"]}>
                  {numberOfFollowers < 0 ? "Follower" : "Followers"}
                </span>
              </div>
            </div>
          </div>

          {!isTheSameUser && (
            <div
              style={{
                display: "flex",
                gap: "12px",
              }}
            >
              <AddFriendButton friendStatus={friendStatus} receiverId={userId} />

              <FollowButton
                destinationUserId={userId}
                isUserFollowed={isUserFollowed}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
