"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { axiosHttpErrorHandler } from "@/utils/common"
import { SocialRepository } from "@modules/user/infrastructure/repository/social.repository"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import styles from "@/components/layouts/social/profile/follow-btn/style.module.scss"

interface FollowButtonProps {
  destinationUserId: string
  isUserFollowed: boolean
}

export default function FollowButton({
  destinationUserId,
  isUserFollowed,
}: FollowButtonProps) {
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
    <div className={styles["follow-btn-wrapper"]}>
      <div className={styles["follow-btn-container"]}>
        {!isUserFollowed ? (
          <Button
            data-is-followed={false}
            className={styles["follow-btn"]}
            disabled={isPending}
            onClick={onFollowSubmit}
          >
            <span>Follow</span>
          </Button>
        ) : (
          <Button
            data-is-followed={true}
            className={styles["follow-btn"]}
            disabled={isPending}
            onClick={onUnfollowSubmit}
          >
            <span>Following</span>
          </Button>
        )}
      </div>
    </div>
  )
}
