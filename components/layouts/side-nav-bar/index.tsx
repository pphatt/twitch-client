"use client"

import * as React from "react"
import { cn } from "@/lib"
import { useCacheLayout } from "@/store/persistent/layout"

import { useMediaQuery } from "@/hooks/useMediaQuery"
import FollowedChannelSideBar from "@/components/common/channel-section-side-bar/followed-channel-side-bar"
import RecommendLiveChanelSideBar from "@/components/common/channel-section-side-bar/recommend-live-chanel-side-bar"
import { Hint } from "@/components/common/hint"
import {
  CollapseToggle,
  CollapseToggleContainer,
  ContentLayout,
  IconsCollapse,
  IconsExpandArrowFromLine,
  SideNavbar,
  SideNavbarContainer,
  SideNavbarContents,
  SideNavbarTitle,
  SideNavbarWrapper,
  SVGContainer,
  SVGWrapper,
} from "@/components/layouts/side-nav-bar/style"
import styles from "@/components/layouts/side-nav-bar/style.module.scss"
import SimpleBar from "@/components/simplebar"

export default function SideNavBar() {
  const { isSocialColumnOpen, setIsSocialColumnOpen } = useCacheLayout()

  const isExpand = React.useMemo(() => isSocialColumnOpen, [isSocialColumnOpen])

  const isScreenWidthAbove1200 = useMediaQuery("(min-width: 1200px)")

  const label = React.useMemo(() => {
    return isExpand && isScreenWidthAbove1200 ? "Collapse" : "Expand"
  }, [isExpand, isScreenWidthAbove1200])

  return (
    <SideNavbar
      className={cn({
        [`${styles["side-nav--expand"]}`]: isExpand && isScreenWidthAbove1200,
        [`${styles["side-nav--collapse"]}`]:
          !isExpand || !isScreenWidthAbove1200,
      })}
    >
      <SideNavbarWrapper>
        <SideNavbarContainer>
          <SimpleBar forceVisible={"y"} className={styles["scroll-area"]}>
            <ContentLayout
              className={cn({
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
                  <CollapseToggleContainer>
                    <CollapseToggle onClick={setIsSocialColumnOpen}>
                      <SVGWrapper>
                        <SVGContainer>
                          {isExpand && isScreenWidthAbove1200 ? (
                            <IconsCollapse />
                          ) : (
                            <IconsExpandArrowFromLine />
                          )}
                        </SVGContainer>
                      </SVGWrapper>
                    </CollapseToggle>
                  </CollapseToggleContainer>
                </div>
              </Hint>

              <SideNavbarContents>
                {isExpand && isScreenWidthAbove1200 && (
                  <SideNavbarTitle>
                    <p>For You</p>
                  </SideNavbarTitle>
                )}

                <FollowedChannelSideBar
                  isExpand={isExpand}
                  isScreenWidthAbove1200={isScreenWidthAbove1200}
                />

                <RecommendLiveChanelSideBar
                  isExpand={isExpand}
                  isScreenWidthAbove1200={isScreenWidthAbove1200}
                />
              </SideNavbarContents>
            </ContentLayout>
          </SimpleBar>
        </SideNavbarContainer>
      </SideNavbarWrapper>
    </SideNavbar>
  )
}
