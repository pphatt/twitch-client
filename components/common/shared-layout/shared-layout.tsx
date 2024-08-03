"use client"

import * as React from "react"

import { ShareLayoutWrapper } from "@/components/common/shared-layout/style"
import SimpleBar from "@/components/simplebar"

interface SharedLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SharedLayout({
  children,
  ...props
}: SharedLayoutProps) {
  return (
    <ShareLayoutWrapper {...props}>
      <SimpleBar forceVisible={"y"}>{children}</SimpleBar>
    </ShareLayoutWrapper>
  )
}
