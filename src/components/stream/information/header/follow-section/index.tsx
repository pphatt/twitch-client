import * as React from "react"
import { useRouter } from "next/navigation"
import { axiosHttpErrorHandler } from "@/utils/common"
import { SocialRepository } from "@modules/user/infrastructure/repository/social.repository"
import { toast } from "sonner"

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
} from "@/components/stream/information/header/follow-section/style"

interface FollowSectionProps {
  destinationUserId: string
}

export default function FollowSection({
  destinationUserId,
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
              </FollowButtonLayoutOverlay>
            </FollowButtonLayoutContainer>
          </FollowButtonLayoutWrapper>

          <div></div>
        </ChannelActionOverlay>
      </ChannelActionContainer>
    </ChannelActionWrapper>
  )
}
