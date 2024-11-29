import * as React from "react"
import { unstable_noStore as noStore } from "next/cache"
import { cookies } from "next/headers"
import { parserPage, parserRows } from "@/utils/common"
import { AdminUsersRequest } from "@modules/core/presentation/endpoints/admin/users/admin.users.request"
import { AdminRepository } from "@modules/user/infrastructure/repository/admin.repository"
import { UserDataTable } from "src/components/tables/user-tables/user-data-table"

import type { SearchParams } from "@/types/common"
import { searchParamsSchema } from "@/lib/validation/params"
import { Separator } from "@/components/ui/separator"
import { columns } from "@/components/tables/user-tables/column"
import styles from "@/styles/application/admin/users/page.module.scss"
import AddUser from "@/app/(admin)/staff/admin/user/_components/add-user"
import BreadcrumbComponent from "@/app/(admin)/staff/admin/user/_components/breadcrumb"
import ExportDataBtn from "@/app/(admin)/staff/admin/user/_components/export-data-btn"

interface SearchPageProps {
  searchParams: SearchParams
}

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function UserPage({ searchParams }: SearchPageProps) {
  noStore()

  const { q, page, rows } = searchParamsSchema.parse(searchParams)

  const pageNumber = parserPage(page)
  const rowsNumber = parserRows(rows, 50)

  const accessToken = cookies().get("access-token")?.value

  const { data } = await AdminUsersRequest.getAllUsers({
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    },
  })

  const users = data.data

  return (
    <div className={styles["page-layout-wrapper"]}>
      <BreadcrumbComponent />

      <div className={styles["page-header-wrapper"]}>
        <div className={styles["page-header-text-wrapper"]}>
          <h2>Users ({users.length})</h2>
          <p>Manage users and view their roles</p>
        </div>

        <div className={styles["action-wrapper"]}>
          <AddUser />
          <ExportDataBtn />
        </div>
      </div>

      <Separator className={styles["separator"]} />

      <UserDataTable
        searchKey="name"
        columns={columns}
        data={users}
        totalUsers={users.length}
        page={pageNumber}
        rows={rowsNumber}
      />
    </div>
  )
}
