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
import styles from "@/components/layouts/social/friends/friend-item/style.module.scss"

interface FriendItemProps {
  image: string
  name: string
  isFriend: boolean
  friendId: string
}

export default function FriendItem({
  name,
  image,
  isFriend,
  friendId,
}: FriendItemProps) {
  const [isPending, startTransition] = React.useTransition()
  const [currentIsFriend, setCurrentIsFriend] = React.useState(isFriend)
  const [requestPendingState, setRequestPendingState] = React.useState("")

  const onAddFriendSubmit = () => {
    if (isPending) return

    startTransition(async () => {
      try {
        await SocialRepository.addFriend({ receiverId: friendId })

        setRequestPendingState("PENDING")
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

  const onUnFriendSubmit = () => {
    if (isPending) return

    startTransition(async () => {
      try {
        await SocialRepository.unFriend({ friendId })

        setCurrentIsFriend(false)
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

              {!currentIsFriend && (
                <Button
                  data-is-friend={false}
                  className={styles["button"]}
                  disabled={isPending}
                  onClick={onAddFriendSubmit}
                >
                  <Icons.plus
                    style={{
                      fill: "currentcolor",
                    }}
                  />
                </Button>
              )}

              {currentIsFriend && !requestPendingState && (
                <Button
                  data-is-friend={true}
                  className={styles["button"]}
                  disabled={isPending}
                  onClick={onUnFriendSubmit}
                >
                  <Icons.check />
                </Button>
              )}

              {requestPendingState && (
                <Button className={styles["button"]}>
                  <div>Pending</div>
                </Button>
              )}
            </UserItemWrapper>
          </div>
        </RecommendFriendItemOverlay>
      </RecommendFriendItemContainer>
    </RecommendFriendItemWrapper>
  )
}
