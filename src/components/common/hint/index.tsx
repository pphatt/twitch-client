"use client"

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
  container?: HTMLElement | null
  className?: string

  /* used for addition state management outside the hint component. */
  forceVisible?: boolean

  /*
   * this means for keep the tooltip open after a click or a keyboard event
   * https://github.com/radix-ui/primitives/issues/2029#issuecomment-2086452005
   *  */
  keepAlive?: boolean
}

export const Hint = ({
  label,
  children,
  className,
  asChild,
  delayDuration = 200,
  skipDelayDuration = 0,
  side,
  sideOffset = 3,
  align,
  alignOffset,
  avoidCollisions,
  hideWhenDetached = true,
  disableHoverableContent,
  container,
  forceVisible,
  keepAlive = false,
}: HintProps) => {
  const triggerRef = React.useRef(null)

  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (forceVisible !== undefined) {
      setOpen(forceVisible && open)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceVisible])

  return (
    <Tooltip.Provider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
      disableHoverableContent={disableHoverableContent}
    >
      <Tooltip.Root open={open} onOpenChange={setOpen}>
        <Tooltip.Trigger
          ref={triggerRef}
          onClick={(event) => {
            if (keepAlive) event.preventDefault()
          }}
          asChild={asChild || !!children}
        >
          {children}
        </Tooltip.Trigger>

        <Tooltip.Portal
          container={container}
          forceMount={open ? true : undefined}
        >
          <TooltipContent
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
            avoidCollisions={avoidCollisions}
            hideWhenDetached={hideWhenDetached}
            className={className}
            onPointerDownOutside={(event) => {
              if (!triggerRef.current && keepAlive) {
                return
              }

              // @ts-expect-error eslint-disable-next-line @typescript-eslint/no-unsafe-call
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              if (triggerRef?.current?.contains(event.target))
                event.preventDefault()
            }}
          >
            <p>{label}</p>
            <Tooltip.Arrow fill={"white"} />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
