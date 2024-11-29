import * as React from "react"
import { cookies } from "next/headers"
import { parserPage, parserRows } from "@/utils/common"
import { AdminRepository } from "@modules/user/infrastructure/repository/admin.repository"

import type { SearchParams } from "@/types/common"
import { searchParamsSchema } from "@/lib/validation/params"
import { Separator } from "@/components/ui/separator"
import { columns } from "@/components/tables/roles-tables/column"
import { RoleDataTable } from "@/components/tables/roles-tables/roles-data-table"
import styles from "@/styles/application/admin/roles/page.module.scss"
import AddRole from "@/app/(admin)/staff/admin/roles/_components/add-roles"
import BreadcrumbComponent from "@/app/(admin)/staff/admin/roles/_components/breadcrumb"

interface SearchPageProps {
  searchParams: SearchParams
}

export default async function RolesAndPermissionsPage({
  searchParams,
}: SearchPageProps) {
  const { q, page, rows } = searchParamsSchema.parse(searchParams)

  const pageNumber = parserPage(page)
  const rowsNumber = parserRows(rows, 5)

  const accessToken = cookies().get("access-token")?.value

  const roles = await AdminRepository.getAllRoles({ accessToken: accessToken! })

  return (
    <div className={styles["page-layout-wrapper"]}>
      <BreadcrumbComponent />

      <div className={styles["page-header-wrapper"]}>
        <div className={styles["page-header-text-wrapper"]}>
          <h2>Roles ({roles.length})</h2>
          <p>Manage roles and their permissions</p>
        </div>

        <div className={styles["action-wrapper"]}>
          <AddRole />
        </div>
      </div>

      <Separator className={styles["separator"]} />

      <RoleDataTable
        searchKey="name"
        columns={columns}
        data={roles}
        totalUsers={roles.length}
        page={pageNumber}
        rows={rowsNumber}
      />
    </div>
  )
}
