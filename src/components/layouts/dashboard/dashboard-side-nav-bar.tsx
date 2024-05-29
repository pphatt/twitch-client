"use client"

import * as React from "react"
import type { MainNavItem } from "@/types"

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
import { Icons } from "@/components/icons"
import {
  DashboardItem,
  DashboardItemGroup,
} from "@/components/layouts/dashboard/dashboard-item"
import styles from "@/styles/components/layouts/dashboard/dashboard-side-nav-bar.module.scss"

interface DashboardSideNavBarProps {
  sites: MainNavItem[]
}

export default function DashboardSideNavBar({
  sites,
}: DashboardSideNavBarProps) {
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
              {isExpand && isScreenWidthAbove1200 && (
                <div className={styles["side-nav-header"]}>
                  <h1 className={styles["side-nav-header-text"]}>
                    Creator Dashboard
                  </h1>

                  <TooltipProvider delayDuration={200} skipDelayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          className={styles["collapse-toggle"]}
                          onClick={() => setIsExpand(!isExpand)}
                        >
                          <div className={styles["svg-wrapper"]}>
                            <div className={styles["svg-container"]}>
                              <Icons.collapse className={styles["svg"]} />
                            </div>
                          </div>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side={"right"} sideOffset={15}>
                        <p>Collapse</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )}

              {(!isExpand || !isScreenWidthAbove1200) && (
                <TooltipProvider delayDuration={200} skipDelayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className={styles["collapse-toggle--collapse"]}
                        onClick={() => setIsExpand(!isExpand)}
                      >
                        <div className={styles["svg-wrapper"]}>
                          <div className={styles["svg-container"]}>
                            <Icons.expandArrow className={styles["svg"]} />
                          </div>
                        </div>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side={"right"} sideOffset={10}>
                      <p>Expand</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}

              <div className={styles["content-wrapper"]}>
                {sites.map((site, index) => {
                  if (site.items) {
                    return (
                      <DashboardItemGroup
                        item={site}
                        key={index}
                        options={{ isExpand, isScreenWidthAbove1200 }}
                      />
                    )
                  }

                  return (
                    <DashboardItem
                      item={site}
                      key={index}
                      options={{ isExpand, isScreenWidthAbove1200 }}
                    />
                  )
                })}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
