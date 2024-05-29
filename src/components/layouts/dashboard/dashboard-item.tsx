"use client"

import * as React from "react"
import Link from "next/link"
import type { MainNavItem } from "@/types"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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

  // if the side-nav is currently expanded or not in mobile screen solution
  if (isExpand && isScreenWidthAbove1200) {
    return (
      <div
        {...props}
        className={styles["content-container"]}
        style={{
          transitionProperty: "transform, opacity, height",
          transitionTimingFunction: "ease",
        }}
      >
        <div className={styles["content-item-wrapper"]}>
          <Link href={"/"} className={styles["content-item-container"]}>
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
    <Link href={"/"} className={styles["content-item-container"]}>
      <div className={styles["content-item-overlay-collapse"]}>
        <div className={styles["svg-wrapper"]}>
          <div className={styles["svg-container"]}>{Icon && <Icon />}</div>
        </div>
      </div>
    </Link>
  )
}

export function DashboardItemGroup({ item, options }: DashboardItemProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const { isExpand, isScreenWidthAbove1200 } = options

  const Icon = Icons[item.icon!]

  if (isExpand && isScreenWidthAbove1200) {
    return (
      <>
        <div
          className={styles["content-container"]}
          style={{
            transitionProperty: "transform, opacity, height",
            transitionTimingFunction: "ease",
          }}
        >
          <div className={styles["content-item-wrapper"]}>
            <Button
              className={cn(
                styles["content-item-container"],
                styles["expand-group-trigger"]
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
    <div className={styles["content-item-container"]}>
      <div className={styles["content-item-overlay-collapse"]}>
        <div className={styles["svg-wrapper"]}>
          <div className={styles["svg-container"]}>
            <Icon />
          </div>
        </div>
      </div>
    </div>
  )
}
