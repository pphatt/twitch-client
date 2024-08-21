import * as React from "react"

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

export default function FollowSection() {
  const [hover, setHover] = React.useState<boolean>(false)

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
