import * as React from "react"

import { StyledBadge, type StyledBadgeProps } from "@/components/ui/badge/style"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    StyledBadgeProps {}

function Badge({ $variant = "default", ...props }: BadgeProps) {
  return <StyledBadge $variant={$variant} {...props} />
}

export { Badge }
