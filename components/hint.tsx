import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import styles from "@/styles/components/hint.module.scss"

interface HintProps {
  label: string
  children: React.ReactNode
  asChild?: boolean
  delayDuration?: number
  skipDelayDuration?: number
  side?: "top" | "bottom" | "left" | "right"
  sideOffset?: number
  align?: "start" | "center" | "end"
  alignOffset?: number
  avoidCollisions?: boolean
  hideWhenDetached?: boolean
  className?: string
}

export const Hint = ({
  label,
  children,
  className,
  asChild,
  side,
  sideOffset,
  align,
  alignOffset,
  avoidCollisions,
  hideWhenDetached,
}: HintProps) => {
  return (
    <TooltipProvider delayDuration={200} skipDelayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild={asChild || !!children}>
          {children}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          avoidCollisions={avoidCollisions}
          hideWhenDetached={hideWhenDetached}
          className={cn(styles["tooltip-content"], className)}
        >
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
