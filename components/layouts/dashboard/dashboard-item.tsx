"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { MainNavItem } from "@/types"
import { For } from "million/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import styles from "@/styles/components/layouts/dashboard/dashboard-item.module.scss"

interface DashboardItemProps extends React.HTMLAttributes<HTMLDivElement> {
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
      <div
        {...props}
        className={styles["content-container"]}
        style={{
          marginTop: "2px",
          transitionProperty: "transform, opacity, height",
          transitionTimingFunction: "ease",
        }}
      >
        <div className={styles["content-item-wrapper"]}>
          <Link
            href={item.slug ? `${route.concat(item.slug)}` : "/"}
            className={cn(styles["content-item-container"], {
              [`${styles["current-active"]}`]: isCurrentRoute,
            })}
          >
            <div className={styles["content-item-overlay"]}>
              <div className={styles["content-item-svg-wrapper"]}>
                <div className={styles["content-item-svg-container"]}>
                  {Icon && <Icon />}
                </div>
              </div>

              <div className={styles["content-item-text-wrapper"]}>
                {item.title}
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <Link
      aria-label={item.title}
      title={item.title}
      style={{ marginTop: "2px" }}
      href={item.slug ? `${route.concat(item.slug)}` : "/"}
      className={cn(styles["content-item-container"], {
        [`${styles["current-active"]}`]: isCurrentRoute,
      })}
    >
      <div
        className={cn(styles["svg-content-wrapper"], {
          [`${styles["current-active"]}`]: isCurrentRoute,
        })}
      >
        <div className={styles["svg-content-container"]}>
          <div className={styles["svg-wrapper"]}>
            <div className={styles["svg-container"]}>{Icon && <Icon />}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

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
        <div
          className={styles["content-container"]}
          style={{
            marginTop: "2px",
            transitionProperty: "transform, opacity, height",
            transitionTimingFunction: "ease",
          }}
        >
          <div className={styles["content-item-wrapper"]}>
            <Button
              className={cn(
                styles["content-item-container"],
                styles["expand-group-trigger"],
                { [`${styles["current-active"]}`]: isCurrentRoute && !isOpen }
              )}
              onClick={() => setIsOpen(!isOpen)}
              data-state={isOpen ? "open" : "closed"}
            >
              <div className={styles["content-item-overlay"]}>
                <div className={styles["content-item-svg-wrapper"]}>
                  <div className={styles["content-item-svg-container"]}>
                    {Icon && <Icon />}
                  </div>
                </div>

                <div className={styles["content-item-text-wrapper"]}>
                  {item.title}
                </div>

                <div className={styles["expand-arrow-wrapper"]}>
                  <div className={styles["svg-wrapper"]}>
                    <div className={styles["svg-container"]}>
                      <Icons.expandArrow />
                    </div>
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </div>

        {isOpen && item.items && (
          <For each={item.items}>
            {(item, index) => (
              <DashboardItem
                key={index}
                item={item}
                options={{ isExpand, isScreenWidthAbove1200 }}
              />
            )}
          </For>
        )}
      </>
    )
  }

  return (
    <div className={styles["group-container"]} style={{ marginTop: "2px" }}>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            className={cn(
              styles["content-item-container"],
              styles["expand-group-trigger"],
              { [`${styles["current-active"]}`]: isCurrentRoute }
            )}
            onClick={() => setIsOpen(!isOpen)}
            data-state={isOpen ? "open" : "closed"}
          >
            <div
              className={cn(styles["svg-content-wrapper"], {
                [`${styles["current-active"]}`]: isCurrentRoute,
              })}
            >
              <div className={styles["svg-content-container"]}>
                <div className={styles["svg-wrapper"]}>
                  <div className={styles["svg-container"]}>
                    <Icon />
                  </div>
                </div>
              </div>
            </div>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          side={"right"}
          align={"start"}
          sideOffset={10}
          className={styles["dropdown-content-wrapper"]}
        >
          {item.items && (
            <For each={item.items}>
              {(item, index) => (
                <div
                  className={styles["dropdown-content-container"]}
                  key={index}
                >
                  <Link
                    href={item.slug ? `${route.concat(item.slug)}` : "/"}
                    className={cn(styles["content-item-container"], {
                      [`${styles["current-active"]}`]: item.slug
                        ? pathname.includes(item.slug)
                        : false,
                    })}
                  >
                    <div className={styles["content-item-overlay"]}>
                      <div className={styles["content-item-text-wrapper"]}>
                        {item.title}
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </For>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className={styles["arrow-svg-wrapper"]}>
        <div className={styles["arrow-svg-container"]}>
          <Icons.smallArrow />
        </div>
      </div>
    </div>
  )
}
