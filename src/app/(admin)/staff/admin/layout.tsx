import * as React from "react"

import styles from "@/styles/application/admin/layout.module.scss"

import "@/styles/vendors/admin.scss"

import { AdminMainNav } from "@/components/layouts/admin/admin-side-nav"
import { AdminSiteHeader } from "@/components/layouts/admin/admin-site-header"
import SimpleBar from "@/components/simplebar"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className={styles["admin-layout"]}>
      <AdminMainNav />

      <main className={styles["main-layout"]}>
        <AdminSiteHeader />

        <>{children}</>
      </main>
    </div>
  )
}
