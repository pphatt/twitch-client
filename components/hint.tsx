import * as React from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface HintProps {
  label: string
  children: React.ReactNode
  asChild?: boolean
  delayDuration?: number
  skipDelayDuration?: number
  side?: "top" | "bottom" | "left" | "right"
  align?: "start" | "center" | "end"
  className?: string
}

export const Hint = ({
  label,
  children,
  className,
  asChild,
  side,
  align,
}: HintProps) => {
  return (
    <TooltipProvider delayDuration={200} skipDelayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild={asChild || children}>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align} className={className}>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
