"use client"

import * as React from "react"
import { GetLivestreamInfoResponseDto } from "@modules/user/presentation/http/dto/response/livestream/get-livestearm-info.response.dto"

import { Icons } from "@/components/icons"
import {
  AboutPanelContainer,
  AboutPanelWrapper,
  AboutSectionContainer,
  AboutSectionContent,
  AboutSectionContentHeaderContainer,
  AboutSectionContentHeaderOverlay,
  AboutSectionContentHeaderWrapper,
  AboutSectionContentWrapper,
  AboutSectionHeader,
  AboutSectionHeaderText,
  AboutSectionHeaderWrapper,
  AboutSectionIconContainer,
  AboutSectionIconWrapper,
  AboutSectionOverlay,
  AboutSectionWrapper,
  ChannelAboutLayoutWrapper,
  FollowerCountWrapper,
} from "@/components/stream/information/about/style"

interface AboutProps {
  channel: GetLivestreamInfoResponseDto
}

export default function About({ channel }: AboutProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)

  const [height, setHeight] = React.useState<number>(0)

  React.useEffect(() => {
    if (!ref.current) {
      return
    }

    setHeight(ref.current?.clientHeight)
  }, [])

  return (
    <div
      ref={ref}
      style={{
        minHeight: `${height}px`,
      }}
    >
      <ChannelAboutLayoutWrapper>
        <div>
          <section
            id="live-channel-about-panel"
            aria-label="About Panel"
            aria-hidden="false"
            tabIndex={0}
            style={{
              display: "block",
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <AboutPanelWrapper>
                <AboutPanelContainer>
                  <AboutSectionWrapper data-a-target="about-panel">
                    <AboutSectionHeaderWrapper>
                      <AboutSectionHeader>
                        <AboutSectionHeaderText>
                          About {channel.userName}
                        </AboutSectionHeaderText>
                      </AboutSectionHeader>

                      <AboutSectionIconWrapper>
                        <AboutSectionIconContainer>
                          <Icons.verifiedPartner />
                        </AboutSectionIconContainer>
                      </AboutSectionIconWrapper>
                    </AboutSectionHeaderWrapper>

                    <AboutSectionContainer>
                      <AboutSectionOverlay>
                        <AboutSectionContentWrapper>
                          <AboutSectionContentHeaderWrapper>
                            <AboutSectionContentHeaderContainer>
                              <AboutSectionContentHeaderOverlay>
                                <FollowerCountWrapper>
                                  <span>
                                    {Intl.NumberFormat("en-US", {
                                      notation: "compact",
                                      maximumFractionDigits: 1,
                                    })
                                      .format(channel.followersCount)
                                      .replace(/\.\d*/, "")}
                                  </span>
                                  {channel.followersCount > 0
                                    ? "followers"
                                    : "follower"}
                                </FollowerCountWrapper>
                              </AboutSectionContentHeaderOverlay>
                            </AboutSectionContentHeaderContainer>
                          </AboutSectionContentHeaderWrapper>

                          <AboutSectionContent>
                            {channel.bio
                              ? channel.bio
                              : `${channel.userName} streams ${channel.livestreamCategories[0]?._name ?? ""}`}
                          </AboutSectionContent>
                        </AboutSectionContentWrapper>

                        <div
                          className={"about-social-media-wrapper"}
                          style={{
                            minWidth: "30px",
                          }}
                        ></div>
                      </AboutSectionOverlay>
                    </AboutSectionContainer>
                  </AboutSectionWrapper>

                  <div data-a-target="goal-panel"></div>
                </AboutPanelContainer>
              </AboutPanelWrapper>
            </div>
          </section>
        </div>

        <div>
          <div className={"channel-extension-wrapper"}></div>
        </div>
      </ChannelAboutLayoutWrapper>
    </div>
  )
}
