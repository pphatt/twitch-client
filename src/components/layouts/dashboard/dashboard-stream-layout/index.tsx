"use client"

import * as React from "react"
import { DEFAULT_LAYOUT } from "@/constant"
import {
  useEditLayout,
  useEditLayoutState,
  useTempNodeLayout,
} from "@/store/state/dashboard"
import { toast } from "sonner"

import { useMosaicUpdateLayout } from "@/hooks/useMosaicUpdateLayout"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ToastSuccess from "@/components/custom-toast/toast-success"
import { Icons } from "@/components/icons"
import {
  DropdownContent as DropdownMenuContent,
  DropdownMenuItemWrapper as DropdownMenuItem,
  DropdownTrigger,
  DropdownTriggerArrowContainer,
  DropdownTriggerArrowWrapper,
  DropdownTriggerTextWrapper,
  LayoutText,
  UpperText,
} from "@/components/layouts/dashboard/dashboard-stream-layout/style"

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
        <DropdownTrigger>
          <DropdownTriggerTextWrapper>
            <UpperText title={"Stream Manager"}>Stream Manager</UpperText>

            <LayoutText>Layout: Layout 1</LayoutText>
          </DropdownTriggerTextWrapper>

          <DropdownTriggerArrowWrapper>
            <DropdownTriggerArrowContainer>
              {open ? <Icons.arrowUpDashboard /> : <Icons.arrowDownDashboard />}
            </DropdownTriggerArrowContainer>
          </DropdownTriggerArrowWrapper>
        </DropdownTrigger>
      </DropdownMenuTrigger>

      <DropdownMenuContent align={"start"} alignOffset={-15}>
        <DropdownMenuItem asChild>
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

        <DropdownMenuItem asChild>
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
