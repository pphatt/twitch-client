"use client"

import * as React from "react"

import { GlobalStyle } from "@/styles/base/_base"
import { GlobalColorTheme } from "@/styles/theme/_default"

export function GlobalStyleProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GlobalStyle />
      <GlobalColorTheme />

      <>{children}</>
    </>
  )
}
