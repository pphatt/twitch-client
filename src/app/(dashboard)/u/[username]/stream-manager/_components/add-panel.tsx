"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import styles from "@/styles/dashboard/stream-manager/_components/add-panel.module.scss"

export default function AddPanel() {
  const [isHoverOn, setIsHoverOn] = React.useState(false)

  return (
    <div className={"sm-sliding-edit-menu"}>
      <div className={"sm--edit-menu__container"}>
        <div
          onMouseOver={() => setIsHoverOn(true)}
          onMouseLeave={() => setIsHoverOn(false)}
          className={cn("sm--edit-menu", {
            ["sm--edit-menu__full"]: isHoverOn,
            ["sm--edit-menu__condensed"]: !isHoverOn,
          })}
        >
          <div className={"sm--edit-menu__slider"}>
            <div className={styles["menu-layout-wrapper"]}>
              <Icons.addPanelPlus />
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
