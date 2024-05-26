import * as React from "react"
import Link from "next/link"
import { type IChannelsData } from "@/types"
import { useQuery } from "@tanstack/react-query"

import { recommendedLiveChannelsData } from "@/config/data"
import { formatViewCount, sleep } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"
import styles from "@/styles/components/recommend-live-channel-side-bar.module.scss"

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
    <div className={styles["side-navbar-section"]}>
      {isExpand && isScreenWidthAbove1200 ? (
        <div className={styles["side-navbar-section-header"]}>
          <h2>Recommended Channels</h2>
        </div>
      ) : (
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className={styles["side-navbar-section-header-collapse"]}>
                <div>
                  <Icons.recommendedCollapse />
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>Recommended Channels</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      <div className={styles["channels-group"]}>
        {channels?.map(
          ({ channelName, title, category, view, image }, index) => (
            <div key={index}>
              <TooltipProvider
                delayDuration={0}
                skipDelayDuration={0}
                disableHoverableContent={true}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className={styles["channel-wrapper"]}>
                      <div className={styles["channel-container"]}>
                        <Link href={"/"} className={styles["channel"]}>
                          <div className={styles["channel-avatar"]}>
                            <picture className={styles["avatar-wrapper"]}>
                              <img
                                src={image}
                                alt={channelName}
                                className={styles["avatar"]}
                              />
                            </picture>
                          </div>

                          {isExpand && (
                            <div className={styles["channel-details-wrapper"]}>
                              <div
                                className={styles["channel-details-container"]}
                              >
                                <div className={styles["channel-name-wrapper"]}>
                                  <div className={styles["channel-name"]}>
                                    <p title={channelName}>{channelName}</p>
                                  </div>
                                  <div
                                    className={
                                      styles["channel-current-category"]
                                    }
                                  >
                                    <p title={category}>{category}</p>
                                  </div>
                                </div>

                                <div
                                  className={
                                    styles["channel-live-view-wrapper"]
                                  }
                                >
                                  <div
                                    className={
                                      styles["channel-live-view-container"]
                                    }
                                  >
                                    <div className={styles["live-icon"]}></div>
                                    <p className={styles["seo"]}>Live</p>
                                    <div className={styles["total-live-view"]}>
                                      <span>{formatViewCount(view)}</span>
                                      <p className={styles["seo"]}>
                                        {formatViewCount(view)} Viewers
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </Link>
                      </div>
                    </div>
                  </TooltipTrigger>

                  <TooltipContent
                    align={"start"}
                    side={"right"}
                    sideOffset={8}
                    className={styles["tooltip-body"]}
                  >
                    <div className={styles["tooltip-content"]}>
                      {!isExpand && isScreenWidthAbove1200 && (
                        <p className={styles["tooltip-text-collapse"]}>
                          {channelName} · {category}
                        </p>
                      )}

                      <p className={styles["tooltip-text"]}>{title}</p>

                      {!isExpand && isScreenWidthAbove1200 && (
                        <div className={styles["tooltip-live-collapse"]}>
                          <div
                            className={styles["tooltip-live-collapse"]}
                          ></div>
                          <span>Live | {formatViewCount(view)} Viewers</span>
                        </div>
                      )}
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )
        )}
      </div>

      {isExpand && isScreenWidthAbove1200 && (
        <div className={styles["show-more-wrapper"]}>
          <Button
            className={styles["show-more-btn"]}
            onClick={() => setIsShowMore((showMore) => !showMore)}
          >
            {isShowMore ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  )
}
