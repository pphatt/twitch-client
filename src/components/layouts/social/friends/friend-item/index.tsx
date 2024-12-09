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
import {useRouter} from "next/navigation";

interface FriendItemProps {
  image: string
  name: string
  isUserFollowed: boolean
  destinationUserId: string
}

export default function FriendItem({
  name,
  image,
  isUserFollowed,
  destinationUserId,
}: FriendItemProps) {
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

              {!isUserFollowed ? (
                <Button
                  data-is-followed={false}
                  className={styles["button"]}
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
                  className={styles["button"]}
                  disabled={isPending}
                  onClick={onUnfollowSubmit}
                >
                  <Icons.check />
                </Button>
              )}
            </UserItemWrapper>
          </div>
        </RecommendFriendItemOverlay>
      </RecommendFriendItemContainer>
    </RecommendFriendItemWrapper>
  )
}
