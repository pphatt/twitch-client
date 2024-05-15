import * as React from "react"

import { SiteHeader } from "@/components/layouts/site-header"

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <SiteHeader />
      <main>{children}</main>
    </div>
  )
}
