"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { axiosHttpErrorHandler } from "@/utils/common"
import { SocialRepository } from "@modules/user/infrastructure/repository/social.repository"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import styles from "@/components/layouts/social/profile/add-friend-btn/style.module.scss"

interface AddFriendButtonProps {
  receiverId: string
}

export default function AddFriendButton({ receiverId }: AddFriendButtonProps) {
  const router = useRouter()

  const [isPending, startTransition] = React.useTransition()

  const onAddFriendSubmit = () => {
    if (isPending) return

    startTransition(async () => {
      try {
        await SocialRepository.addFriend({ receiverId })

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
        <Button
          data-is-followed={false}
          className={styles["follow-btn"]}
          disabled={isPending}
          onClick={onAddFriendSubmit}
        >
          <span>Add Friend</span>
        </Button>
      </div>
    </div>
  )
}
