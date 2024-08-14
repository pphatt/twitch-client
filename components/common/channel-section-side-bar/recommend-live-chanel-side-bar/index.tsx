import * as React from "react"
import { type IChannelsData } from "@/types"
import { useQuery } from "@tanstack/react-query"

import { recommendedLiveChannelsData } from "@/config/data"
import { formatViewCount, sleep } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import * as Primitive from "@/components/common/channel-section-side-bar/style"
import { Icons } from "@/components/icons"

interface RecommendLiveChanelSideBarProps {
  isExpand: boolean
  isScreenWidthAbove1200: boolean
}

export default function RecommendLiveChanelSideBar({
  isExpand,
  isScreenWidthAbove1200,
}: RecommendLiveChanelSideBarProps) {
  const [isShowMore, setIsShowMore] = React.useState(false)

  const { data: dataChannels, isFetching } = useQuery<IChannelsData[]>({
    queryKey: ["recommend-live-channels"],
    queryFn: async () => {
      await sleep(300)
      return recommendedLiveChannelsData.channels
    },
    refetchOnWindowFocus: false,
  })

  const channels = React.useMemo(() => {
    if (!dataChannels) {
      return []
    }

    return dataChannels.slice(0, isShowMore ? 10 : 5)
  }, [dataChannels, isShowMore])

  if (isFetching) {
    return <></>
  }

  return (
    <Primitive.SideNavbarSection>
      {isExpand && isScreenWidthAbove1200 ? (
        <Primitive.SideNavbarSectionHeader>
          <h2>Recommended Channels</h2>
        </Primitive.SideNavbarSectionHeader>
      ) : (
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Primitive.SideNavbarSectionHeaderCollapse>
                <div>
                  <Icons.recommendedCollapse />
                </div>
              </Primitive.SideNavbarSectionHeaderCollapse>
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>Recommended Channels</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      <Primitive.ChannelsGroup>
        {channels?.map(
          ({ channelName, slug, title, category, view, image }, index) => (
            <div key={index}>
              <TooltipProvider
                delayDuration={0}
                skipDelayDuration={0}
                disableHoverableContent={true}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Primitive.ChannelWrapper>
                      <Primitive.ChannelContainer>
                        <Primitive.Channel href={slug}>
                          <Primitive.ChannelAvatar>
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
                                  <Primitive.ChannelCurrentCategory>
                                    <p title={category}>{category}</p>
                                  </Primitive.ChannelCurrentCategory>
                                </Primitive.ChannelNameWrapper>

                                <Primitive.ChannelLiveViewWrapper>
                                  <Primitive.ChannelLiveViewContainer>
                                    <Primitive.LiveIcon></Primitive.LiveIcon>
                                    <Primitive.Seo>Live</Primitive.Seo>
                                    <Primitive.TotalLiveView>
                                      <span>{formatViewCount(view)}</span>
                                      <Primitive.Seo>
                                        {formatViewCount(view)} Viewers
                                      </Primitive.Seo>
                                    </Primitive.TotalLiveView>
                                  </Primitive.ChannelLiveViewContainer>
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
                    <Primitive.TooltipContentWrapper $isLive={true}>
                      {!isExpand && isScreenWidthAbove1200 && (
                        <Primitive.TooltipTextCollapse>
                          {channelName} · {category}
                        </Primitive.TooltipTextCollapse>
                      )}

                      <Primitive.TooltipText>{title}</Primitive.TooltipText>

                      {!isExpand && isScreenWidthAbove1200 && (
                        <Primitive.TooltipLiveCollapse>
                          <div></div>
                          <span>Live | {formatViewCount(view)} Viewers</span>
                        </Primitive.TooltipLiveCollapse>
                      )}
                    </Primitive.TooltipContentWrapper>
                  </Primitive.TooltipBody>
                </Tooltip>
              </TooltipProvider>
            </div>
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
