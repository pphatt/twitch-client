import * as React from "react"

import SharedLayout from "@/components/common/shared-layout"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SharedLayout>{children}</SharedLayout>
}
