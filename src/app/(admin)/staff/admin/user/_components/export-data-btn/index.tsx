"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import styles from "@/app/(admin)/staff/admin/user/_components/export-data-btn/style.module.scss"

export default function ExportDataBtn() {
  return (
    <Button $variant="outline" className={styles["export-data-btn"]}>
      <Icons.sheet />
      <span>Export users data from current page</span>
    </Button>
  )
}
