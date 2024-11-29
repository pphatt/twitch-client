"use client"

import * as React from "react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/bread-crumb"
import { Icons } from "@/components/icons"
import styles from "@/styles/application/admin/users/page.module.scss"

export default function BreadcrumbComponent() {
  return (
    <Breadcrumb>
      <BreadcrumbList className={styles["site-header-breadcrumb-container"]}>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/staff/admin"
            className={styles["site-header-breadcrumb-link"]}
          >
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <Icons.slash />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbPage className={styles["site-header-breadcrumb-span"]}>
            Roles
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
