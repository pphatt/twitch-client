"use client"

import * as React from "react"
import { useEditLayout } from "@/store/state/dashboard"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import styles from "@/styles/components/layouts/dashboard/dashboard-stream-layout.module.scss"

export default function DashboardStreamLayout() {
  const { isEditing, setIsEditing } = useEditLayout()

  const [open, setOpen] = React.useState(false)

  return (
    <DropdownMenu
      modal={false}
      open={open}
      onOpenChange={() => setOpen((state) => !state)}
    >
      <DropdownMenuTrigger asChild>
        <Button className={styles["dropdown-trigger"]}>
          <div className={styles["dropdown-trigger-text-wrapper"]}>
            <p title={"Stream Manager"} className={styles["upper-text"]}>
              Stream Manager
            </p>
            <p className={styles["layout-text"]}>Layout: Layout 1</p>
          </div>

          <div className={styles["dropdown-trigger-arrow-wrapper"]}>
            <div className={styles["dropdown-trigger-arrow-container"]}>
              {open ? <Icons.arrowUpDashboard /> : <Icons.arrowDownDashboard />}
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={"start"}
        alignOffset={-15}
        className={styles["dropdown-content"]}
      >
        <DropdownMenuItem className={styles["dropdown-item"]} asChild>
          <Button
            disabled={isEditing ?? true}
            onClick={() => {
              if (!isEditing) {
                setIsEditing(!isEditing)
              }
            }}
          >
            <span>Edit Stream Manager Panels</span>
          </Button>
        </DropdownMenuItem>

        <DropdownMenuItem className={styles["dropdown-item"]} asChild>
          <Button>
            <span>Reset to Default</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
