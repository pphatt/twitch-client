"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import FollowedChannelSideBar from "@/components/followed-channel-side-bar"
import { Icons } from "@/components/icons"
import RecommendLiveChanelSideBar from "@/components/recommend-live-chanel-side-bar"
import styles from "@/styles/components/layouts/side-nav-bar.module.scss"

export default function SideNavBar() {
  const [isExpand, setIsExpand] = React.useState(true)

  const isScreenWidthAbove1200 = useMediaQuery("(min-width: 1200px)")

  return (
    <div
      className={cn(styles["side-navbar"], {
        [`${styles["side-nav--expand"]}`]: isExpand && isScreenWidthAbove1200,
        [`${styles["side-nav--collapse"]}`]: !isExpand,
      })}
    >
      <div className={styles["side-navbar-wrapper"]}>
        <div className={styles["side-navbar-container"]}>
          <ScrollArea className={styles["scroll-area"]}>
            <div
              className={cn(styles["content-layout"], {
                [`${styles["side-nav--expand"]}`]:
                  isExpand && isScreenWidthAbove1200,
                [`${styles["side-nav--collapse"]}`]:
                  !isExpand || !isScreenWidthAbove1200,
              })}
            >
              <TooltipProvider delayDuration={200} skipDelayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={cn({
                        [`${styles["collapse-toggle-wrapper--expand"]}`]:
                          isExpand && isScreenWidthAbove1200,
                        [`${styles["collapse-toggle-wrapper--collapse"]}`]:
                          !isExpand || !isScreenWidthAbove1200,
                      })}
                    >
                      <div className={styles["collapse-toggle-container"]}>
                        <Button
                          className={styles["collapse-toggle"]}
                          onClick={() => setIsExpand(!isExpand)}
                        >
                          <div className={styles["svg-wrapper"]}>
                            <div className={styles["svg-container"]}>
                              {isExpand && isScreenWidthAbove1200 ? (
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
                    <p>
                      {isExpand && isScreenWidthAbove1200
                        ? "Collapse"
                        : "Expand"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div className={styles["side-navbar-contents"]}>
                {isExpand && isScreenWidthAbove1200 && (
                  <div className={styles["side-navbar-title"]}>
                    <p>For You</p>
                  </div>
                )}

                <FollowedChannelSideBar
                  isExpand={isExpand}
                  isScreenWidthAbove1200={isScreenWidthAbove1200}
                />

                <RecommendLiveChanelSideBar
                  isExpand={isExpand}
                  isScreenWidthAbove1200={isScreenWidthAbove1200}
                />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
