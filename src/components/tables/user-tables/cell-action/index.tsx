"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { User } from "@modules/user/domain/entity/user.entity"
import { AdminRepository } from "@modules/user/infrastructure/repository/admin.repository"
import { Edit, MoreHorizontal, Trash } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserAlertModal } from "@/components/modals/user-alert-modal"
import styles from "@/components/tables/user-tables/cell-action/style.module.scss"

interface CellActionProps {
  data: User
}

export const UserCellAction: React.FC<CellActionProps> = ({ data }) => {
  const [open, setOpen] = React.useState(false)

  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const onConfirm = () => {
    startTransition(async () => {
      try {
        await AdminRepository.deleteUser({ userId: data.id })

        setOpen(false)
        router.refresh()

        toast.success("Delete user successfully")
      } catch (e) {
        toast.error("Something went wrong. Try again!")
      }
    })
  }

  return (
    <>
      <UserAlertModal
        username={data.username}
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={isPending}
      />

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button $variant="ghost" className={styles["action-btn"]}>
            <span className={styles["text"]}>Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className={styles["dropdown-content-wrapper"]}
        >
          <DropdownMenuLabel
            className={styles["dropdown-content-label-wrapper"]}
          >
            Actions
          </DropdownMenuLabel>

          <DropdownMenuSeparator className={styles["dropdown-separator"]} />

          <DropdownMenuItem asChild>
            <Link href={`/staff/admin/user/details/${data.id}`}>
              <Edit className={styles["svg"]} />
              <span>Edit</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className={styles["svg"]} />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
