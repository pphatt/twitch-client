"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import SimpleBar from "@/components/simplebar"
import styles from "@/styles/components/common/shared-layout.module.scss"

interface SharedLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SharedLayout({
  children,
  className,
  ...props
}: SharedLayoutProps) {
  return (
    <main className={cn(styles["page-wrapper"], className)} {...props}>
      <SimpleBar forceVisible={"y"}>
        {children}
      </SimpleBar>
    </main>
  )
}
