import React from "react"

import { SkeletonWrapper } from "@/components/ui/skeleton/style"

function Skeleton({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <SkeletonWrapper {...props} />
}

export { Skeleton }
