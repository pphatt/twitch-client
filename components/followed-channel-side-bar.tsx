import * as React from "react"
import Link from "next/link"
import type { IFollowChannelsData } from "@/types"
import { useQuery } from "@tanstack/react-query"

import { followedChannels } from "@/config/data"
import { cn, formatViewCount, orderFollowedChannel, sleep } from "@/lib/utils"
import { Button } from "@/components/ui/button/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"
import styles from "@/styles/components/share/side-bar-content.module.scss"

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
    <div className={styles["side-navbar-section"]}>
      {isExpand && isScreenWidthAbove1200 ? (
        <div className={styles["side-navbar-section-header"]}>
          <h2>Followed Channels</h2>
        </div>
      ) : (
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className={styles["side-navbar-section-header-collapse"]}>
                <div>
                  <Icons.followedCollapse />
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>Followed Channels</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      <div className={styles["channels-group"]}>
        {channels.map(
          (
            { channelName, slug, title, isLive, category, view, image },
            index
          ) => (
            <div key={index}>
              <TooltipProvider
                delayDuration={0}
                skipDelayDuration={0}
                disableHoverableContent={isLive}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className={styles["channel-wrapper"]}>
                      <div className={styles["channel-container"]}>
                        <Link href={slug} className={styles["channel"]}>
                          <div
                            className={cn(styles["channel-avatar"], {
                              [`${styles["channel--offline"]}`]: !isLive,
                            })}
                          >
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

                                  {isLive && (
                                    <div
                                      className={
                                        styles["channel-current-category"]
                                      }
                                    >
                                      <p title={category}>{category}</p>
                                    </div>
                                  )}
                                </div>

                                <div
                                  className={
                                    styles["channel-live-view-wrapper"]
                                  }
                                >
                                  {isLive && (
                                    <div
                                      className={
                                        styles["channel-live-view-container"]
                                      }
                                    >
                                      <div
                                        className={styles["live-icon"]}
                                      ></div>
                                      <p className={styles["seo"]}>Live</p>
                                      <div
                                        className={styles["total-live-view"]}
                                      >
                                        <span>{formatViewCount(view!)}</span>
                                        <p className={styles["seo"]}>
                                          {formatViewCount(view!)} Viewers
                                        </p>
                                      </div>
                                    </div>
                                  )}

                                  {!isLive && (
                                    <span className={styles["offline-text"]}>
                                      Offline
                                    </span>
                                  )}
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
                    <div
                      className={isLive ? styles["tooltip-content"] : undefined}
                    >
                      {isLive ? (
                        <>
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
                              <span>
                                Live | {formatViewCount(view!)} Viewers
                              </span>
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={slug}
                          className={styles["tooltip-link-wrapper"]}
                        >
                          <div className={styles["tooltip-link-container"]}>
                            <p className={styles["tooltip-link-text"]}>
                              See all recent videos
                            </p>
                          </div>
                        </Link>
                      )}
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )
        )}
      </div>

      {isExpand && isScreenWidthAbove1200 ? (
        <div className={styles["show-more-wrapper"]}>
          <Button
            className={styles["show-more-btn"]}
            onClick={() => setIsShowMore((showMore) => !showMore)}
          >
            {isShowMore ? "Show Less" : "Show More"}
          </Button>
        </div>
      ) : (
        <div className={styles["divider"]}></div>
      )}
    </div>
  )
}
