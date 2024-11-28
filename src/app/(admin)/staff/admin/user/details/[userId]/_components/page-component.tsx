"use client"

import * as React from "react"
import type { User } from "@modules/user/domain/entity/user.entity"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import styles from "@/styles/application/admin/users/details/page.module.scss"
import BreadcrumbComponent from "@/app/(admin)/staff/admin/user/details/[userId]/_components/breadcrumb"
import EditUser from "@/app/(admin)/staff/admin/user/details/[userId]/_components/edit-user"

interface DetailsUserPageComponentProps {
  user: User
}

export default function DetailsUserPageComponent({
  user,
}: DetailsUserPageComponentProps) {
  return (
    <ScrollArea className={styles["scroll-area"]}>
      <div className={styles["layout-wrapper"]}>
        <BreadcrumbComponent id={user.id} />

        <div className={styles["page-header-wrapper"]}>
          <div className={styles["page-header-text-wrapper"]}>
            <h2>Edit User</h2>
            <p>Edit user</p>
          </div>
        </div>

        <Separator className={styles["separator"]} />

        <EditUser user={user} />
      </div>
    </ScrollArea>
  )
}
