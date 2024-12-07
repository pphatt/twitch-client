"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { axiosHttpErrorHandler } from "@/utils/common"
import { SocialRepository } from "@modules/user/infrastructure/repository/social.repository"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import styles from "@/components/layouts/social/details/creator-information/style.module.scss"

interface CreatorInformationProps {
  username: string
  avatarUrl: string

  isUserFollowed: boolean
  destinationUserId: string
}

export default function CreatorInformation({
  username,
  avatarUrl,
  isUserFollowed,
  destinationUserId,
}: CreatorInformationProps) {
  const router = useRouter()

  const [isPending, startTransition] = React.useTransition()

  const onFollowSubmit = () => {
    if (isPending) return

    startTransition(async () => {
      try {
        await SocialRepository.followUser({ destinationUserId })

        router.refresh()
      } catch (err) {
        // catchError(err)
        const error = axiosHttpErrorHandler(err)

        toast.error(error.message, {
          duration: 10000,
          position: "top-right",
        })

        console.log(error)
      }
    })
  }

  const onUnfollowSubmit = () => {
    if (isPending) return

    startTransition(async () => {
      try {
        await SocialRepository.unFollowUser({ destinationUserId })

        router.refresh()
      } catch (err) {
        // catchError(err)
        const error = axiosHttpErrorHandler(err)

        toast.error(error.message, {
          duration: 10000,
          position: "top-right",
        })

        console.log(error)
      }
    })
  }

  return (
    <div className={styles["post-now-side-section-wrapper"]}>
      <div className={styles["post-now-side-section-header-wrapper"]}>
        <h2 className={styles["post-now-side-section-header-text-wrapper"]}>
          Creator Information
        </h2>
      </div>

      <div className={styles["recommend-friend-content-wrapper"]}>
        <div className={styles["recommend-friend-content-container"]}>
          <div className={styles["creator-avatar-wrapper"]}>
            <img
              className={styles["creator-avatar-img"]}
              loading={"lazy"}
              src={
                avatarUrl !== ""
                  ? avatarUrl
                  : "/avatar/user-default-picture.png"
              }
              alt={""}
            />
          </div>

          <span className={styles["creator-username"]}>{username}</span>

          {!isUserFollowed ? (
            <Button
              data-is-followed={false}
              className={styles["follow-button"]}
              disabled={isPending}
              onClick={onFollowSubmit}
            >
              <Icons.plus
                style={{
                  fill: "currentcolor",
                }}
              />
            </Button>
          ) : (
            <Button
              data-is-followed={true}
              className={styles["follow-button"]}
              disabled={isPending}
              onClick={onUnfollowSubmit}
            >
              <Icons.check />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
