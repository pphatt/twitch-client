"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import type { GetAllRolesResponseDto } from "@modules/user/presentation/http/dto/response/admin/role/getl-all-roles.response.dto"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Icons } from "@/components/icons"
import styles from "@/components/tables/roles-tables/cell-action/style.module.scss"
import {Checkbox} from "@/components/ui/checkbox";

interface CellActionProps {
  data: GetAllRolesResponseDto
}

export const RoleCellAction: React.FC<CellActionProps> = ({ data }) => {
  const [open, setOpen] = React.useState(false)

  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const onConfirm = () => {
    startTransition(async () => {
      // try {
      //   const req = await deleteUser({ userId: data.id })
      //
      //   if ("success" in req) {
      //     setOpen(false)
      //     router.refresh()
      //
      //     toast.success("Delete user successfully")
      //   } else {
      //     toast.error(req.error)
      //   }
      // } catch (e) {
      //   toast.error("Something went wrong. Try again!")
      // }
    })
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value)
      }}
    >
      <DialogTrigger asChild>
        <Button $variant="outline" className={styles["add-user-btn"]}>
          <span>Authorize</span>
        </Button>
      </DialogTrigger>

      <DialogContent className={styles["dialog-content"]}>
        <DialogHeader className={styles["dialog-header"]}>
          <DialogTitle>Authorize {data.name} role</DialogTitle>
          <DialogDescription>
            Add permissions to role by checking the box.
          </DialogDescription>
        </DialogHeader>

        <form className={styles["form-content"]}>
          <div className={styles["form-item-group"]}>
            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>View role dashboard</span>
            </div>

            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>Create new role</span>
            </div>

            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>Edit role</span>
            </div>

            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>Delete role</span>
            </div>
          </div>

          <div className={styles["form-item-group"]}>
            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>View user dashboard</span>
            </div>

            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>Create new user</span>
            </div>

            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>Edit user</span>
            </div>

            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>Delete user</span>
            </div>
          </div>

          <div className={styles["form-item-group"]}>
            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>View category dashboard</span>
            </div>

            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>Create new category</span>
            </div>

            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>Edit category</span>
            </div>

            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>Delete category</span>
            </div>
          </div>

          <div className={styles["form-item-group"]}>
            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>View post dashboard</span>
            </div>

            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>Create new post</span>
            </div>

            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>Edit post</span>
            </div>

            <div className={styles["form-item-content"]}>
              <div className={styles["checkbox-wrapper"]}>
                <Checkbox/>
              </div>

              <span>Delete post</span>
            </div>
          </div>
        </form>

        <DialogFooter>
          <Button
            className={styles["cancel-btn"]}
            $variant={"outline"}
            type="button"
            onClick={() => {
              setOpen(false)
            }}
            disabled={isPending}
          >
            <span>Cancel</span>
          </Button>

          <Button
            className={styles["submit-btn"]}
            type="submit"
            disabled={isPending}
          >
            {isPending && (
              <Icons.spinner className={styles["icon"]} aria-hidden="true"/>
            )}
            <span>Update</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
