"use client"

import * as React from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { useEditLayout } from "@/store/state/dashboard"

/*
 * Reset editing state when navigating to another route
 * */
export default function EditLayoutContext({
  children,
}: {
  children: React.ReactNode
}) {
  const { setIsEditing } = useEditLayout()

  const pathname = usePathname()
  const searchParams = useSearchParams()

  React.useEffect(() => {
    setIsEditing(false)
  }, [pathname, searchParams, setIsEditing])

  return <>{children}</>
}
