"use client"

import * as React from "react"

import { ShellLoader } from "@/components/loading/spinner-loading/style"

interface SpinnerLoadingProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SpinnerLoading({ ...props }: SpinnerLoadingProps) {
  return (
    <ShellLoader {...props}>
      <ShellLoader />
    </ShellLoader>
  )
}
