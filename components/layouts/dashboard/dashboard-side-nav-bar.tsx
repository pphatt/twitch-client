"use client"

import * as React from "react"
import { useDashboardOpen } from "@/store/persistent/dashboard"
import type { MainNavItem } from "@/types"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {
  DashboardItem,
  DashboardItemGroup,
} from "@/components/layouts/dashboard/dashboard-item"
import SimpleBar from "@/components/simplebar"
import styles from "@/styles/components/layouts/dashboard/dashboard-side-nav-bar.module.scss"

interface DashboardSideNavBarProps {
  sites: MainNavItem[]
}

export default function DashboardSideNavBar({
  sites,
}: DashboardSideNavBarProps) {
  const { mode, setMode } = useDashboardOpen()

  const isExpand = React.useMemo(() => mode === "default", [mode])

  const isScreenWidthAbove1200 = useMediaQuery("(min-width: 1200px)")

  if (mode === "hidden") {
    return null
  }

  return (
    <div
      className={cn(styles["side-navbar"], {
        [`${styles["side-nav--expand"]}`]:
          mode === "default" && isScreenWidthAbove1200,
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
              {isExpand && isScreenWidthAbove1200 && (
                <div className={styles["side-nav-header"]}>
                  <h1 className={styles["side-nav-header-text"]}>
                    Creator Dashboard
                  </h1>

                  <Button
                    aria-label="Collapse Left Navigation"
                    title="Collapse Left Navigation"
                    className={styles["collapse-toggle"]}
                    onClick={() =>
                      mode === "default"
                        ? setMode("compact")
                        : setMode("default")
                    }
                  >
                    <div className={styles["svg-wrapper"]}>
                      <div className={styles["svg-container"]}>
                        <Icons.collapse className={styles["svg"]} />
                      </div>
                    </div>
                  </Button>
                </div>
              )}

              {(!isExpand || !isScreenWidthAbove1200) && (
                <Button
                  aria-label="Expand Left Navigation"
                  title="Expand Left Navigation"
                  className={styles["collapse-toggle--collapse"]}
                  onClick={() =>
                    mode === "default" ? setMode("compact") : setMode("default")
                  }
                >
                  <div className={styles["svg-wrapper"]}>
                    <div className={styles["svg-container"]}>
                      <Icons.expandArrowFromLine className={styles["svg"]} />
                    </div>
                  </div>
                </Button>
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
          </SimpleBar>
        </div>
      </div>
    </div>
  )
}
