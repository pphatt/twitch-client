"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

export default function RefreshAccessToken() {
  const router = useRouter()

  React.useEffect(() => {
    router.refresh()
  }, [router])

  return null
}
