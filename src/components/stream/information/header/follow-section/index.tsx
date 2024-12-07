import * as React from "react"
import { useRouter } from "next/navigation"
import { axiosHttpErrorHandler } from "@/utils/common"
import { SocialRepository } from "@modules/user/infrastructure/repository/social.repository"
import { toast } from "sonner"

import { Hint } from "@/components/common/hint"
import { Icons } from "@/components/icons"
import {
  ChannelActionContainer,
  ChannelActionOverlay,
  ChannelActionWrapper,
  FollowButton,
  FollowButtonContainer,
  FollowButtonLayoutContainer,
  FollowButtonLayoutOverlay,
  FollowButtonLayoutWrapper,
  FollowButtonOverlay,
  FollowButtonWrapper,
  FollowIconContainer,
  FollowIconWrapper,
  FollowText,
  UnFollowButton,
  UnFollowIconWrapper,
} from "@/components/stream/information/header/follow-section/style"

interface FollowSectionProps {
  destinationUserId: string
  isUserFollowed: boolean
}

export default function FollowSection({
  destinationUserId,
  isUserFollowed,
}: FollowSectionProps) {
  const [hover, setHover] = React.useState<boolean>(false)

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
    <ChannelActionWrapper>
      <ChannelActionContainer>
        <ChannelActionOverlay>
          <FollowButtonLayoutWrapper>
            <FollowButtonLayoutContainer>
              <FollowButtonLayoutOverlay
                style={{
                  opacity: "1",
                  transition: "transform 200ms ease-in 200ms",
                }}
              >
                {isUserFollowed ? (
                  <Hint
                    delayDuration={200}
                    skipDelayDuration={0}
                    side={"top"}
                    label={"Unfollow"}
                  >
                    <UnFollowButton
                      aria-label="Unfollow"
                      data-a-target="unfollow-button"
                      data-test-selector="unfollow-button"
                      disabled={isPending}
                      onClick={onUnfollowSubmit}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                      <FollowButtonWrapper>
                        <FollowButtonContainer>
                          <FollowButtonOverlay>
                            <UnFollowIconWrapper
                              style={{
                                opacity: "1",
                                transition: "transform 200ms ease 0ms",
                                transform: hover ? "scale(1.2)" : undefined,
                              }}
                            >
                              <FollowIconContainer>
                                {hover ? (
                                  <Icons.heartBroken />
                                ) : (
                                  <Icons.heartFill />
                                )}
                              </FollowIconContainer>
                            </UnFollowIconWrapper>
                          </FollowButtonOverlay>
                        </FollowButtonContainer>
                      </FollowButtonWrapper>
                    </UnFollowButton>
                  </Hint>
                ) : (
                  <Hint
                    delayDuration={200}
                    skipDelayDuration={0}
                    side={"top"}
                    label={"Follow"}
                  >
                    <FollowButton
                      aria-label="Follow"
                      data-a-target="follow-button"
                      data-test-selector="follow-button"
                      disabled={isPending}
                      onClick={onFollowSubmit}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                      <FollowButtonWrapper>
                        <FollowButtonContainer>
                          <FollowButtonOverlay>
                            <FollowIconWrapper
                              style={{
                                opacity: "1",
                                transition: "transform 200ms ease 0ms",
                                transform: hover ? "scale(1.2)" : undefined,
                              }}
                            >
                              <FollowIconContainer>
                                {hover ? <Icons.heartFill /> : <Icons.heart />}
                              </FollowIconContainer>
                            </FollowIconWrapper>

                            <span>
                              <FollowText>Follow</FollowText>
                            </span>
                          </FollowButtonOverlay>
                        </FollowButtonContainer>
                      </FollowButtonWrapper>
                    </FollowButton>
                  </Hint>
                )}
              </FollowButtonLayoutOverlay>
            </FollowButtonLayoutContainer>
          </FollowButtonLayoutWrapper>

          <div></div>
        </ChannelActionOverlay>
      </ChannelActionContainer>
    </ChannelActionWrapper>
  )
}
