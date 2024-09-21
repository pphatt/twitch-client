"use client"

import * as React from "react"
import { useDashboardOpen } from "@/store/persistent/dashboard"
import { cn } from "@/utils/common"

import type { MainNavItem } from "@/types/common"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Icons } from "@/components/icons"
import { DashboardItem } from "@/components/layouts/dashboard/dashboard-item-layout/dashboard-item"
import { DashboardItemGroup } from "@/components/layouts/dashboard/dashboard-item-layout/dashboard-item-group"
import {
  CollapseToggle,
  ContentLayout,
  ContentWrapper,
  SideNavBar,
  SideNavBarContainer,
  SideNavBarWrapper,
  SideNavHeader,
  SideNavHeaderText,
  SVGContainer,
  SVGWrapper,
} from "@/components/layouts/dashboard/dashboard-side-nav-bar/style"
import styles from "@/components/layouts/dashboard/dashboard-side-nav-bar/style.module.scss"
import SimpleBar from "@/components/simplebar"

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
    <SideNavBar
      className={cn({
        [`${styles["side-nav--expand"]}`]:
          mode === "default" && isScreenWidthAbove1200,
        [`${styles["side-nav--collapse"]}`]:
          !isExpand || !isScreenWidthAbove1200,
      })}
    >
      <SideNavBarWrapper>
        <SideNavBarContainer>
          <SimpleBar forceVisible={"y"} className={styles["scroll-area"]}>
            <ContentLayout
              className={cn({
                [`${styles["side-nav--expand"]}`]:
                  isExpand && isScreenWidthAbove1200,
                [`${styles["side-nav--collapse"]}`]:
                  !isExpand || !isScreenWidthAbove1200,
              })}
            >
              {isExpand && isScreenWidthAbove1200 && (
                <SideNavHeader>
                  <SideNavHeaderText>Creator Dashboard</SideNavHeaderText>

                  <CollapseToggle
                    aria-label="Collapse Left Navigation"
                    title="Collapse Left Navigation"
                    onClick={() =>
                      mode === "default"
                        ? setMode("compact")
                        : setMode("default")
                    }
                  >
                    <SVGWrapper>
                      <SVGContainer>
                        <Icons.collapse className={styles["svg"]} />
                      </SVGContainer>
                    </SVGWrapper>
                  </CollapseToggle>
                </SideNavHeader>
              )}

              {(!isExpand || !isScreenWidthAbove1200) && (
                <CollapseToggle
                  aria-label="Expand Left Navigation"
                  title="Expand Left Navigation"
                  className={styles["collapse-toggle--collapse"]}
                  onClick={() =>
                    mode === "default" ? setMode("compact") : setMode("default")
                  }
                >
                  <SVGWrapper>
                    <SVGContainer>
                      <Icons.expandArrowFromLine className={styles["svg"]} />
                    </SVGContainer>
                  </SVGWrapper>
                </CollapseToggle>
              )}

              <ContentWrapper>
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
              </ContentWrapper>
            </ContentLayout>
          </SimpleBar>
        </SideNavBarContainer>
      </SideNavBarWrapper>
    </SideNavBar>
  )
}
