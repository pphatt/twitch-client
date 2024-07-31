"use client"

import * as React from "react"
import { useDashboardOpen } from "@/store/persistent/dashboard"

import { Button } from "@/components/ui/button/button"
import { Icons } from "@/components/icons"
import styles from "@/styles/application/dashboard/_components/hide-navigator-btn.module.scss"

export default function HideNavigatorBtn() {
  const { mode, setMode } = useDashboardOpen()

  return (
    <div className={styles["site-header-btn-wrapper"]}>
      <div className={styles["site-header-btn-container"]}>
        <Button
          className={styles["site-header-btn"]}
          onClick={() =>
            mode === "default" || mode === "compact"
              ? setMode("hidden")
              : setMode("default")
          }
        >
          <div>
            <Icons.hideNavigator />
          </div>
        </Button>
      </div>
    </div>
  )
}
