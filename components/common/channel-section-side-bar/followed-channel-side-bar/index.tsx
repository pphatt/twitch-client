import * as React from "react"
import type { IFollowChannelsData } from "@/types"
import { useQuery } from "@tanstack/react-query"

import { followedChannels } from "@/config/data"
import { formatViewCount, orderFollowedChannel, sleep } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import * as Primitive from "@/components/common/channel-section-side-bar/style"
import { Icons } from "@/components/icons"

interface FollowedChannelSideBarProps {
  isExpand: boolean
  isScreenWidthAbove1200: boolean
}

export default function FollowedChannelSideBar({
  isExpand,
  isScreenWidthAbove1200,
}: FollowedChannelSideBarProps) {
  const [isShowMore, setIsShowMore] = React.useState(false)

  const { data: dataChannels, isFetching } = useQuery<IFollowChannelsData[]>({
    queryKey: ["followed-channels"],
    queryFn: async () => {
      await sleep(300)
      return followedChannels.channels
    },
    refetchOnWindowFocus: false,
  })

  const channels = React.useMemo(() => {
    if (!dataChannels) {
      return []
    }

    return orderFollowedChannel(dataChannels)
      .slice(0, isShowMore ? dataChannels.length : 5)
      .sort((a, b) => b.view! - a.view!)
  }, [dataChannels, isShowMore])

  if (isFetching || !dataChannels) {
    return <></>
  }

  return (
    <Primitive.SideNavbarSection>
      {isExpand && isScreenWidthAbove1200 ? (
        <Primitive.SideNavbarSectionHeader>
          <h2>Followed Channels</h2>
        </Primitive.SideNavbarSectionHeader>
      ) : (
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Primitive.SideNavbarSectionHeaderCollapse>
                <div>
                  <Icons.followedCollapse />
                </div>
              </Primitive.SideNavbarSectionHeaderCollapse>
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>Followed Channels</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      <Primitive.ChannelsGroup>
        {channels.map(
          (
            { channelName, slug, title, isLive, category, view, image },
            index
          ) => (
            <Primitive.ChannelContainer key={index}>
              <TooltipProvider
                delayDuration={0}
                skipDelayDuration={0}
                disableHoverableContent={isLive}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Primitive.ChannelWrapper>
                      <Primitive.ChannelContainer>
                        <Primitive.Channel href={slug}>
                          <Primitive.ChannelAvatar
                            className={!isLive ? "channel--offline" : undefined}
                          >
                            <Primitive.AvatarWrapper>
                              <Primitive.Avatar src={image} alt={channelName} />
                            </Primitive.AvatarWrapper>
                          </Primitive.ChannelAvatar>

                          {isExpand && (
                            <Primitive.ChannelDetailsWrapper>
                              <Primitive.ChannelDetailContainer>
                                <Primitive.ChannelNameWrapper>
                                  <Primitive.ChannelName>
                                    <p title={channelName}>{channelName}</p>
                                  </Primitive.ChannelName>

                                  {isLive && (
                                    <Primitive.ChannelCurrentCategory>
                                      <p title={category}>{category}</p>
                                    </Primitive.ChannelCurrentCategory>
                                  )}
                                </Primitive.ChannelNameWrapper>

                                <Primitive.ChannelLiveViewWrapper>
                                  {isLive && (
                                    <Primitive.ChannelLiveViewContainer>
                                      <Primitive.LiveIcon></Primitive.LiveIcon>
                                      <Primitive.Seo>Live</Primitive.Seo>
                                      <Primitive.TotalLiveView>
                                        <span>{formatViewCount(view!)}</span>
                                        <Primitive.Seo>
                                          {formatViewCount(view!)} Viewers
                                        </Primitive.Seo>
                                      </Primitive.TotalLiveView>
                                    </Primitive.ChannelLiveViewContainer>
                                  )}

                                  {!isLive && (
                                    <Primitive.OfflineText>
                                      Offline
                                    </Primitive.OfflineText>
                                  )}
                                </Primitive.ChannelLiveViewWrapper>
                              </Primitive.ChannelDetailContainer>
                            </Primitive.ChannelDetailsWrapper>
                          )}
                        </Primitive.Channel>
                      </Primitive.ChannelContainer>
                    </Primitive.ChannelWrapper>
                  </TooltipTrigger>

                  <Primitive.TooltipBody
                    align={"start"}
                    side={"right"}
                    sideOffset={8}
                  >
                    <Primitive.TooltipContentWrapper $isLive={isLive}>
                      {isLive ? (
                        <>
                          {!isExpand && isScreenWidthAbove1200 && (
                            <Primitive.TooltipTextCollapse>
                              {channelName} · {category}
                            </Primitive.TooltipTextCollapse>
                          )}

                          <Primitive.TooltipText>{title}</Primitive.TooltipText>

                          {!isExpand && isScreenWidthAbove1200 && (
                            <Primitive.TooltipLiveCollapse>
                              <div></div>
                              <span>
                                Live | {formatViewCount(view!)} Viewers
                              </span>
                            </Primitive.TooltipLiveCollapse>
                          )}
                        </>
                      ) : (
                        <Primitive.TooltipLinkWrapper href={slug}>
                          <Primitive.TooltipLinkContainer>
                            <Primitive.TooltipLinkText>
                              See all recent videos
                            </Primitive.TooltipLinkText>
                          </Primitive.TooltipLinkContainer>
                        </Primitive.TooltipLinkWrapper>
                      )}
                    </Primitive.TooltipContentWrapper>
                  </Primitive.TooltipBody>
                </Tooltip>
              </TooltipProvider>
            </Primitive.ChannelContainer>
          )
        )}
      </Primitive.ChannelsGroup>

      {isExpand && isScreenWidthAbove1200 ? (
        <Primitive.ShowMoreWrapper>
          <Primitive.ShowMoreBtn
            onClick={() => setIsShowMore((showMore) => !showMore)}
          >
            {isShowMore ? "Show Less" : "Show More"}
          </Primitive.ShowMoreBtn>
        </Primitive.ShowMoreWrapper>
      ) : (
        <Primitive.Divider />
      )}
    </Primitive.SideNavbarSection>
  )
}
