import * as React from "react"
import { axiosHttpErrorHandler } from "@/utils/common"
import { SocialRepository } from "@modules/user/infrastructure/repository/social.repository"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {
  RecommendFriendItemContainer,
  RecommendFriendItemOverlay,
  RecommendFriendItemWrapper,
  UserAvatarImage,
  UserAvatarImageWrapper,
  UserItemContainer,
  UserItemWrapper,
  UserNameContainer,
  UserNameOverlay,
  UserNameText,
  UserNameWrapper,
} from "@/components/layouts/social/components/friend-list-item/style"
import styles from "@/components/layouts/social/friends/request-friend-item/style.module.scss"

interface FriendItemProps {
  image: string
  name: string
  friendId: string
}

export default function FriendItem({ name, image, friendId }: FriendItemProps) {
  const [isPending, startTransition] = React.useTransition()
  const [message, setMessage] = React.useState("")

  const onAcceptSubmit = () => {
    if (isPending) return

    startTransition(async () => {
      try {
        await SocialRepository.acceptFriend({ senderId: friendId })

        setMessage("Accept friend request successfully")
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

  const onRejectSubmit = () => {
    if (isPending) return

    startTransition(async () => {
      try {
        await SocialRepository.rejectFriend({ senderId: friendId })
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
    <RecommendFriendItemWrapper>
      <RecommendFriendItemContainer>
        <RecommendFriendItemOverlay>
          <div className="user">
            <UserItemWrapper>
              <UserItemContainer href={`/social/profile/${name}`}>
                <UserAvatarImageWrapper>
                  <UserAvatarImage
                    src={
                      image !== "" ? image : "/avatar/user-default-picture.png"
                    }
                    alt={""}
                  />
                </UserAvatarImageWrapper>
              </UserItemContainer>

              <UserNameWrapper>
                <UserNameContainer>
                  <UserNameOverlay href={`/social/profile/${name}`}>
                    <UserNameText>{name}</UserNameText>
                  </UserNameOverlay>
                </UserNameContainer>
              </UserNameWrapper>

              {message === "" && (
                <>
                  <Button
                    data-is-friend={false}
                    className={styles["button"]}
                    disabled={isPending}
                    onClick={onAcceptSubmit}
                  >
                    <Icons.check />
                  </Button>

                  <Button
                    data-is-friend={true}
                    className={styles["button"]}
                    disabled={isPending}
                    onClick={onRejectSubmit}
                  >
                    <Icons.closeX />
                  </Button>
                </>
              )}

              {message === "Accept friend request successfully" && (
                <div className={styles["text"]}>
                  <span>Accept friend request successfully</span>
                </div>
              )}

              {message === "Reject friend request successfully" && (
                <div className={styles["text"]}>
                  <span>Reject friend request successfully</span>
                </div>
              )}
            </UserItemWrapper>
          </div>
        </RecommendFriendItemOverlay>
      </RecommendFriendItemContainer>
    </RecommendFriendItemWrapper>
  )
}
