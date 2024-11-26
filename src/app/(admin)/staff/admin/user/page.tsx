import * as React from "react"
import { parserPage, parserRows } from "@/utils/common"
import { UserDataTable } from "src/components/tables/user-tables/user-data-table"
import type { SearchParams } from "@/types/common"
import { searchParamsSchema } from "@/lib/validation/params"
import { Separator } from "@/components/ui/separator"
import { columns } from "@/components/tables/user-tables/column"
import styles from "@/styles/application/admin/users/page.module.scss"
import AddUser from "@/app/(admin)/staff/admin/user/_components/add-user"
import BreadcrumbComponent from "@/app/(admin)/staff/admin/user/_components/breadcrumb"

interface SearchPageProps {
  searchParams: SearchParams
}

export default function UserPage({ searchParams }: SearchPageProps) {
  const { q, page, rows } = searchParamsSchema.parse(searchParams)

  const pageNumber = parserPage(page)
  const rowsNumber = parserRows(rows, 50)

  return (
    <div className={styles["page-layout-wrapper"]}>
      <BreadcrumbComponent />

      <div className={styles["page-header-wrapper"]}>
        <div className={styles["page-header-text-wrapper"]}>
          <h2>User (10)</h2>
          <p>Manage users and view their roles</p>
        </div>

        <AddUser />
      </div>

      <Separator className={styles["separator"]} />

      <UserDataTable
        searchKey="name"
        columns={columns}
        data={[]}
        totalUsers={0}
        page={pageNumber}
        rows={rowsNumber}
      />
    </div>
  )
}
