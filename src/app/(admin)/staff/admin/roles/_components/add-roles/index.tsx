"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Icons } from "@/components/icons"
import styles from "@/app/(admin)/staff/admin/roles/_components/add-roles/style.module.scss"

export default function AddRole() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value)
      }}
    >
      <DialogTrigger asChild>
        <Button $variant="outline" className={styles["add-user-btn"]}>
          <Icons.circlePlus />
          <span>Add new role</span>
        </Button>
      </DialogTrigger>

      <DialogContent className={styles["dialog-content"]}>
        <DialogHeader className={styles["dialog-header"]}>
          <DialogTitle>Add new role</DialogTitle>
          <DialogDescription>
            Add new role here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
