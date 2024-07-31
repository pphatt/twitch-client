"use client"

import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button/button"
import FollowedChannelSideBar from "@/components/followed-channel-side-bar"
import { Hint } from "@/components/hint"
import { Icons } from "@/components/icons"
import RecommendLiveChanelSideBar from "@/components/recommend-live-chanel-side-bar"
import SimpleBar from "@/components/simplebar"
import styles from "@/styles/components/layouts/side-nav-bar.module.scss"

export default function SideNavBar() {
  const { isSocialColumnOpen, setIsSocialColumnOpen } = useCacheLayout()

  const isExpand = React.useMemo(() => isSocialColumnOpen, [isSocialColumnOpen])

  const isScreenWidthAbove1200 = useMediaQuery("(min-width: 1200px)")

  const label = React.useMemo(() => {
    return isExpand && isScreenWidthAbove1200 ? "Collapse" : "Expand"
  }, [isExpand, isScreenWidthAbove1200])

  return (
    <div
      className={cn(styles["side-navbar"], {
        [`${styles["side-nav--expand"]}`]: isExpand && isScreenWidthAbove1200,
        [`${styles["side-nav--collapse"]}`]:
          !isExpand || !isScreenWidthAbove1200,
      })}
    >
      <div className={styles["side-navbar-wrapper"]}>
        <div className={styles["side-navbar-container"]}>
          <SimpleBar forceVisible={"y"} className={styles["scroll-area"]}>
            <div
              className={cn(styles["content-layout"], {
                [`${styles["side-nav--expand"]}`]:
                  isExpand && isScreenWidthAbove1200,
                [`${styles["side-nav--collapse"]}`]:
                  !isExpand || !isScreenWidthAbove1200,
              })}
            >
              <Hint
                delayDuration={200}
                skipDelayDuration={0}
                side={"right"}
                label={label}
              >
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
                      onClick={setIsSocialColumnOpen}
                    >
                      <div className={styles["svg-wrapper"]}>
                        <div className={styles["svg-container"]}>
                          {isExpand && isScreenWidthAbove1200 ? (
                            <Icons.collapse className={styles["svg"]} />
                          ) : (
                            <Icons.expandArrowFromLine
                              className={styles["svg"]}
                            />
                          )}
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
              </Hint>

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
          </SimpleBar>
        </div>
      </div>
    </div>
  )
}
