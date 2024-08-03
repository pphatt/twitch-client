import * as React from "react"
import Link from "next/link"
import type { IRecommendedLiveChannel } from "@/types"

import { formatViewCount } from "@/lib/utils"
import * as Primitive from "@/components/common/channel-card/style"
import { Tags } from "@/components/common/tag/tag"

interface ChannelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  channel: IRecommendedLiveChannel
}

export function ChannelCard({ channel, ...props }: ChannelCardProps) {
  const {
    channel: currentChannel,
    title,
    slug,
    livePreviewImage,
    totalView,
    category,
    tags,
  } = channel

  return (
    <Primitive.CardWrapper {...props}>
      <Primitive.CardContainer>
        <Primitive.Card>
          <Primitive.CardInfo>
            <Primitive.ChannelContentWrapper>
              <Primitive.ChannelContentContainer>
                <Primitive.ChannelImageWrapper>
                  <Primitive.ChannelImageLink href={slug}>
                    <Primitive.ChannelImageOverlay />
                    <Primitive.ChannelImageContainer>
                      <Primitive.Image
                        src={currentChannel.image}
                        alt={currentChannel.name}
                      />
                    </Primitive.ChannelImageContainer>
                  </Primitive.ChannelImageLink>
                </Primitive.ChannelImageWrapper>

                <Primitive.ChannelInfoWrapper>
                  <Primitive.ChannelInfoContainer>
                    <Primitive.ChannelInfoLink href={slug}>
                      <Primitive.StreamTitle>
                        <h3>{title}</h3>
                      </Primitive.StreamTitle>

                      <Primitive.ChannelName>
                        <p>{currentChannel.name}</p>
                      </Primitive.ChannelName>
                    </Primitive.ChannelInfoLink>

                    <Primitive.CategoryWrapper>
                      <Link href={"/"}>{category}</Link>
                    </Primitive.CategoryWrapper>
                  </Primitive.ChannelInfoContainer>

                  <Tags tags={tags} />
                </Primitive.ChannelInfoWrapper>
              </Primitive.ChannelContentContainer>
            </Primitive.ChannelContentWrapper>

            <Primitive.CardImageWrapper>
              <Primitive.TopLeftCornerDivStyled />
              <Primitive.BottomRightCornerDivStyled />
              <Primitive.LeftBarDivStyled />
              <Primitive.BottomBarDivStyled />
              <Primitive.CardImageOverlay href={slug}>
                <Primitive.CardImageOverlayDiv>
                  <Primitive.CardImageContainerStyled>
                    <Primitive.CardImagePlaceholderWrapperStyled>
                      <Primitive.CardImagePlaceholderContainerStyled>
                        <Primitive.CardImagePlaceholder />
                        <Primitive.CardImageStyled
                          src={livePreviewImage}
                          alt={title}
                        />
                      </Primitive.CardImagePlaceholderContainerStyled>
                    </Primitive.CardImagePlaceholderWrapperStyled>
                  </Primitive.CardImageContainerStyled>

                  <Primitive.LiveSectionWrapper>
                    <Primitive.LiveSectionContainer>
                      <p>LIVE</p>
                    </Primitive.LiveSectionContainer>
                  </Primitive.LiveSectionWrapper>

                  <Primitive.CurrentViewWrapper>
                    <Primitive.CurrentViewContainer>
                      {formatViewCount(totalView)} Viewers
                    </Primitive.CurrentViewContainer>
                  </Primitive.CurrentViewWrapper>
                </Primitive.CardImageOverlayDiv>
              </Primitive.CardImageOverlay>
            </Primitive.CardImageWrapper>
          </Primitive.CardInfo>
        </Primitive.Card>
      </Primitive.CardContainer>
    </Primitive.CardWrapper>
  )
}
