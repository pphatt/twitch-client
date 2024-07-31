"use client"

import * as React from "react"
import { DEFAULT_LAYOUT } from "@/constant"
import {
  useEditLayout,
  useEditLayoutState,
  useTempNodeLayout,
} from "@/store/state/dashboard"
import { toast } from "sonner"

import { useMosaicUpdateLayout } from "@/hooks/use-mosaic-update-layout"
import { Button } from "@/components/ui/button/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu/dropdown-menu"
import ToastSuccess from "@/components/custom-toast/toast-success"
import { Icons } from "@/components/icons"
import styles from "@/styles/components/layouts/dashboard/dashboard-stream-layout.module.scss"

export default function DashboardStreamLayout() {
  const { isEditing, setIsEditing } = useEditLayout()

  const [open, setOpen] = React.useState(false)

  const { layout, debounceUpdateLayout } = useMosaicUpdateLayout()

  const { setTempNodeLayout } = useTempNodeLayout()

  const { setEditLayout } = useEditLayoutState()

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
                setEditLayout(layout)
                setTempNodeLayout(layout)
                setIsEditing(!isEditing)
              }
            }}
          >
            <span>Edit Stream Manager Panels</span>
          </Button>
        </DropdownMenuItem>

        <DropdownMenuItem className={styles["dropdown-item"]} asChild>
          <Button
            onClick={() => {
              debounceUpdateLayout(DEFAULT_LAYOUT, () => {
                toast.custom(() => (
                  <ToastSuccess>Layout 1 updated</ToastSuccess>
                ))
              })
            }}
          >
            <span>Reset to Default</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
