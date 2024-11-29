"use client"

import * as React from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import styles from "@/app/(admin)/staff/admin/roles/_components/add-permissions-dialog/style.module.scss"
import {ListTodo} from "lucide-react";
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";

export default function AddPermissionsDialog() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value)
      }}
    >
      <DialogTrigger asChild>
        <DropdownMenuItem>
          <ListTodo className={styles["svg"]} />
          <span>Authorize</span>
        </DropdownMenuItem>
      </DialogTrigger>

      <DialogContent className={styles["dialog-content"]}>
        <DialogHeader className={styles["dialog-header"]}>
          <DialogTitle>Authorize</DialogTitle>
          <DialogDescription>
            Add permissions to role by checking the box.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
