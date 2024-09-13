import * as React from "react"
import * as Tooltip from "@radix-ui/react-tooltip"

import { TooltipContent } from "@/components/common/hint/style"

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
  disableHoverableContent?: boolean
  container?: HTMLElement
  className?: string

  /* used for addition state management outside the hint component. */
  forceVisible?: boolean
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
  hideWhenDetached = true,
  disableHoverableContent,
  container,
  forceVisible,
}: HintProps) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Tooltip.Provider
      delayDuration={200}
      skipDelayDuration={0}
      disableHoverableContent={disableHoverableContent}
    >
      <Tooltip.Root open={forceVisible && open} onOpenChange={setOpen}>
        <Tooltip.Trigger asChild={asChild || !!children}>
          {children}
        </Tooltip.Trigger>

        <Tooltip.Portal container={container}>
          <TooltipContent
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
            avoidCollisions={avoidCollisions}
            hideWhenDetached={hideWhenDetached}
            className={className}
          >
            <p>{label}</p>
            <Tooltip.Arrow fill={"white"} />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
