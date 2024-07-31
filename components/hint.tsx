import * as React from "react"
import * as Tooltip from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"
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
  sideOffset = 3,
  align,
  alignOffset,
  avoidCollisions,
  hideWhenDetached,
}: HintProps) => {
  return (
    <Tooltip.Provider delayDuration={200} skipDelayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild={asChild || !!children}>
          {children}
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
            avoidCollisions={avoidCollisions}
            hideWhenDetached={hideWhenDetached}
            className={cn(styles["tooltip-content"], className)}
          >
            <p>{label}</p>
            <Tooltip.Arrow fill={"white"} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
