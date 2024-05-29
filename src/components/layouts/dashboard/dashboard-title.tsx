"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

export default function DashboardTitle() {
  const pathname = usePathname()

  return (
    <p>
      <span>{pathname}</span>
    </p>
  )
}
