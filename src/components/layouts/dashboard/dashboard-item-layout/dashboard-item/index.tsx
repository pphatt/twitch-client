import * as React from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/utils/common"

import type { MainNavItem } from "@/types/common"
import { Icons } from "@/components/icons"
import {
  ContentContainer,
  ContentItemContainerLink,
  ContentItemOverlay,
  ContentItemSVGContainer,
  ContentItemSVGWrapper,
  ContentItemTextWrapper,
  ContentItemWrapper,
  SVGContainer,
  SVGContentContainer,
  SVGContentWrapper,
  SVGWrapper,
} from "@/components/layouts/dashboard/dashboard-item-layout/style"
import styles from "@/components/layouts/dashboard/dashboard-item-layout/style.module.scss"

export interface DashboardItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  item: MainNavItem
  options: {
    isExpand: boolean
    isScreenWidthAbove1200: boolean
  }
}

export function DashboardItem({ item, options, ...props }: DashboardItemProps) {
  const { isExpand, isScreenWidthAbove1200 } = options

  const Icon = Icons[item.icon!]

  const pathname = usePathname()

  const isCurrentRoute = React.useMemo(() => {
    return item.slug ? pathname.includes(item.slug) : false
  }, [item.slug, pathname])

  const route = React.useMemo(() => {
    return pathname.split("/").splice(0, 3).join("/")
  }, [pathname])

  // if the side-nav is currently expanded or not in mobile screen solution
  if (isExpand && isScreenWidthAbove1200) {
    return (
      <ContentContainer
        {...props}
        style={{
          marginTop: "2px",
          transitionProperty: "transform, opacity, height",
          transitionTimingFunction: "ease",
        }}
      >
        <ContentItemWrapper>
          <ContentItemContainerLink
            href={item.slug ? `${route.concat(item.slug)}` : "/"}
            className={cn({
              [`${styles["current-active"]}`]: isCurrentRoute,
            })}
          >
            <ContentItemOverlay>
              <ContentItemSVGWrapper>
                <ContentItemSVGContainer>
                  {Icon && <Icon />}
                </ContentItemSVGContainer>
              </ContentItemSVGWrapper>

              <ContentItemTextWrapper>{item.title}</ContentItemTextWrapper>
            </ContentItemOverlay>
          </ContentItemContainerLink>
        </ContentItemWrapper>
      </ContentContainer>
    )
  }

  return (
    <ContentItemContainerLink
      aria-label={item.title}
      title={item.title}
      style={{ marginTop: "2px" }}
      href={item.slug ? `${route.concat(item.slug)}` : "/"}
      className={cn({
        [`${styles["current-active"]}`]: isCurrentRoute,
      })}
    >
      <SVGContentWrapper
        className={cn({
          [`${styles["current-active"]}`]: isCurrentRoute,
        })}
      >
        <SVGContentContainer>
          <SVGWrapper>
            <SVGContainer>{Icon && <Icon />}</SVGContainer>
          </SVGWrapper>
        </SVGContentContainer>
      </SVGContentWrapper>
    </ContentItemContainerLink>
  )
}
