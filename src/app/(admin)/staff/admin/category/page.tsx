import * as React from "react"

import { Separator } from "@/components/ui/separator"
import styles from "@/styles/application/admin/category/page.module.scss"
import BreadcrumbComponent from "@/app/(admin)/staff/admin/category/_components/breadcrumb"
import AddUser from "@/app/(admin)/staff/admin/user/_components/add-user"
import ExportDataBtn from "@/app/(admin)/staff/admin/user/_components/export-data-btn"

export default function ManageCategoryPage() {
  return (
    <div className={styles["page-layout-wrapper"]}>
      <BreadcrumbComponent />

      <div className={styles["page-header-wrapper"]}>
        <div className={styles["page-header-text-wrapper"]}>
          <h2>Category</h2>
          <p>Manage category.</p>
        </div>

        <div className={styles["action-wrapper"]}>
          <AddUser />
          <ExportDataBtn />
        </div>
      </div>

      <Separator className={styles["separator"]} />
    </div>
  )
}
