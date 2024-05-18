"use client"

import * as React from "react"
import Link from "next/link"

import { channelsData } from "@/config/data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"
import styles from "@/styles/components/layouts/side-nav-bar.module.scss"

export function SideNavBar() {
  const [isExpand, setIsExpand] = React.useState(true)

  return (
    <div
      className={cn(styles["side-navbar"], {
        [`${styles["side-nav--expand"]}`]: isExpand,
        [`${styles["side-nav--collapse"]}`]: !isExpand,
      })}
    >
      <div className={styles["side-navbar-wrapper"]}>
        <div className={styles["side-navbar-container"]}>
          <ScrollArea className={styles["scroll-area"]}>
            <div
              className={cn(styles["content-layout"], {
                [`${styles["side-nav--expand"]}`]: isExpand,
                [`${styles["side-nav--collapse"]}`]: !isExpand,
              })}
            >
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={cn({
                        [`${styles["collapse-toggle-wrapper--expand"]}`]:
                          isExpand,
                        [`${styles["collapse-toggle-wrapper--collapse"]}`]:
                          !isExpand,
                      })}
                    >
                      <div className={styles["collapse-toggle-container"]}>
                        <Button
                          className={styles["collapse-toggle"]}
                          onClick={() => setIsExpand(!isExpand)}
                        >
                          <div className={styles["svg-wrapper"]}>
                            <div className={styles["svg-container"]}>
                              {isExpand ? (
                                <Icons.collapse className={styles["svg"]} />
                              ) : (
                                <Icons.expandArrow className={styles["svg"]} />
                              )}
                            </div>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side={"right"}>
                    <p>{isExpand ? "Collapse" : "Expand"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div className={styles["side-navbar-contents"]}>
                {isExpand && (
                  <div className={styles["side-navbar-title"]}>
                    <p>For You</p>
                  </div>
                )}

                <div className={styles["side-navbar-section"]}>
                  {isExpand ? (
                    <div className={styles["side-navbar-section-header"]}>
                      <h2>Recommended Channels</h2>
                    </div>
                  ) : (
                    <TooltipProvider delayDuration={200}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            className={
                              styles["side-navbar-section-header-collapse"]
                            }
                          >
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
                    {channelsData.channels.map(
                      (
                        { channelName, title, category, view, image },
                        index
                      ) => (
                        <div key={index}>
                          <TooltipProvider
                            delayDuration={0}
                            skipDelayDuration={0}
                          >
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className={styles["channel-wrapper"]}>
                                  <div className={styles["channel-container"]}>
                                    <Link
                                      href={"/"}
                                      className={styles["channel"]}
                                    >
                                      <div className={styles["channel-avatar"]}>
                                        <picture
                                          className={styles["avatar-wrapper"]}
                                        >
                                          <img
                                            src={image}
                                            alt={channelName}
                                            className={styles["avatar"]}
                                          />
                                        </picture>
                                      </div>

                                      {isExpand && (
                                        <div
                                          className={
                                            styles["channel-details-wrapper"]
                                          }
                                        >
                                          <div
                                            className={
                                              styles[
                                                "channel-details-container"
                                              ]
                                            }
                                          >
                                            <div
                                              className={
                                                styles["channel-name-wrapper"]
                                              }
                                            >
                                              <div
                                                className={
                                                  styles["channel-name"]
                                                }
                                              >
                                                <p title={channelName}>
                                                  {channelName}
                                                </p>
                                              </div>
                                              <div
                                                className={
                                                  styles[
                                                    "channel-current-category"
                                                  ]
                                                }
                                              >
                                                <p title={category}>
                                                  {category}
                                                </p>
                                              </div>
                                            </div>

                                            <div
                                              className={
                                                styles[
                                                  "channel-live-view-wrapper"
                                                ]
                                              }
                                            >
                                              <div
                                                className={
                                                  styles[
                                                    "channel-live-view-container"
                                                  ]
                                                }
                                              >
                                                <div
                                                  className={
                                                    styles["live-icon"]
                                                  }
                                                ></div>
                                                <p className={styles["seo"]}>
                                                  Live
                                                </p>
                                                <div
                                                  className={
                                                    styles["total-live-view"]
                                                  }
                                                >
                                                  <span>
                                                    {Intl.NumberFormat(
                                                      "en-US",
                                                      {
                                                        notation: "compact",
                                                        maximumFractionDigits: 1,
                                                      }
                                                    )
                                                      .format(view)
                                                      .replace(/\.\d*/, "") ??
                                                      "Not available"}
                                                  </span>
                                                  <p className={styles["seo"]}>
                                                    {Intl.NumberFormat(
                                                      "en-US",
                                                      {
                                                        notation: "compact",
                                                        maximumFractionDigits: 1,
                                                      }
                                                    )
                                                      .format(view)
                                                      .replace(/\.\d*/, "") ??
                                                      "Not available"}{" "}
                                                    Viewers
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
                                className={styles["tooltip-body"]}
                              >
                                <div className={styles["tooltip-content"]}>
                                  {!isExpand && (
                                    <p
                                      className={
                                        styles["tooltip-text-collapse"]
                                      }
                                    >
                                      {channelName} · {category}
                                    </p>
                                  )}

                                  <p className={styles["tooltip-text"]}>
                                    {title}
                                  </p>

                                  {!isExpand && (
                                    <div
                                      className={
                                        styles["tooltip-live-collapse"]
                                      }
                                    >
                                      <div
                                        className={
                                          styles["tooltip-live-collapse"]
                                        }
                                      ></div>
                                      <span>
                                        Live |{" "}
                                        {Intl.NumberFormat("en-US", {
                                          notation: "compact",
                                          maximumFractionDigits: 1,
                                        })
                                          .format(view)
                                          .replace(/\.\d*/, "") ??
                                          "Not available"}{" "}
                                        Viewers
                                      </span>
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
                  <div></div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
