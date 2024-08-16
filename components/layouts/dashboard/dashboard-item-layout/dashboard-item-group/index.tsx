"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import {
  DashboardItem,
  type DashboardItemProps,
} from "@/components/layouts/dashboard/dashboard-item-layout/dashboard-item"
import {
  ArrowSVGContainer,
  ArrowSVGWrapper,
  ContentItemContainerBtn,
  DropdownContentContainer,
  DropdownContentWrapper as DropdownMenuContent,
  ExpandArrowWrapper,
  GroupContainer,
} from "@/components/layouts/dashboard/dashboard-item-layout/dashboard-item-group/style"
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

export function DashboardItemGroup({ item, options }: DashboardItemProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const { isExpand, isScreenWidthAbove1200 } = options

  const Icon = Icons[item.icon!]

  const pathname = usePathname()

  const isCurrentRoute = React.useMemo(() => {
    return item.items?.some((item) => pathname.includes(item.slug!))
  }, [item.items, pathname])

  const route = React.useMemo(() => {
    return pathname.split("/").splice(0, 3).join("/")
  }, [pathname])

  React.useEffect(() => setIsOpen(false), [isExpand])

  if (isExpand && isScreenWidthAbove1200) {
    return (
      <>
        <ContentContainer
          style={{
            marginTop: "2px",
            transitionProperty: "transform, opacity, height",
            transitionTimingFunction: "ease",
          }}
        >
          <ContentItemWrapper>
            <ContentItemContainerBtn
              className={cn({
                [`${styles["current-active"]}`]: isCurrentRoute && !isOpen,
              })}
              onClick={() => setIsOpen(!isOpen)}
              data-state={isOpen ? "open" : "closed"}
            >
              <ContentItemOverlay>
                <ContentItemSVGWrapper>
                  <ContentItemSVGContainer>
                    {Icon && <Icon />}
                  </ContentItemSVGContainer>
                </ContentItemSVGWrapper>

                <ContentItemTextWrapper>{item.title}</ContentItemTextWrapper>

                <ExpandArrowWrapper>
                  <SVGWrapper>
                    <SVGContainer>
                      <Icons.expandArrow />
                    </SVGContainer>
                  </SVGWrapper>
                </ExpandArrowWrapper>
              </ContentItemOverlay>
            </ContentItemContainerBtn>
          </ContentItemWrapper>
        </ContentContainer>

        {isOpen &&
          item.items?.map((item, index) => (
            <DashboardItem
              key={index}
              item={item}
              options={{ isExpand, isScreenWidthAbove1200 }}
            />
          ))}
      </>
    )
  }

  return (
    <GroupContainer style={{ marginTop: "2px" }}>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <ContentItemContainerBtn
            className={cn({
              [`${styles["current-active"]}`]: isCurrentRoute,
            })}
            onClick={() => setIsOpen(!isOpen)}
            data-state={isOpen ? "open" : "closed"}
          >
            <SVGContentWrapper
              className={cn({
                [`${styles["current-active"]}`]: isCurrentRoute,
              })}
            >
              <SVGContentContainer>
                <SVGWrapper>
                  <SVGContainer>
                    <Icon />
                  </SVGContainer>
                </SVGWrapper>
              </SVGContentContainer>
            </SVGContentWrapper>
          </ContentItemContainerBtn>
        </DropdownMenuTrigger>

        <DropdownMenuContent side={"right"} align={"start"} sideOffset={10}>
          {item.items?.map((item, index) => (
            <DropdownContentContainer key={index}>
              <ContentItemContainerLink
                href={item.slug ? `${route.concat(item.slug)}` : "/"}
                className={cn({
                  [`${styles["current-active"]}`]: item.slug
                    ? pathname.includes(item.slug)
                    : false,
                })}
              >
                <ContentItemOverlay>
                  <ContentItemTextWrapper>{item.title}</ContentItemTextWrapper>
                </ContentItemOverlay>
              </ContentItemContainerLink>
            </DropdownContentContainer>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <ArrowSVGWrapper>
        <ArrowSVGContainer>
          <Icons.smallArrow />
        </ArrowSVGContainer>
      </ArrowSVGWrapper>
    </GroupContainer>
  )
}
