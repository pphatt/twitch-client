"use client"

import * as React from "react"
// import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"
import { DragHandleDots2Icon } from "@radix-ui/react-icons";

import {
  ResizableHandleGripWrapper,
  ResizablePrimitivePanelGroup,
  ResizablePrimitivePanelResizeHandle,
} from "@/components/ui/resizable/style"

const ResizablePanelGroup = ({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitivePanelGroup {...props} />
)
ResizablePanelGroup.displayName = "ResizablePanelGroup"

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitivePanelResizeHandle {...props}>
    {withHandle && (
      <ResizableHandleGripWrapper>
        <DragHandleDots2Icon />
      </ResizableHandleGripWrapper>
    )}
  </ResizablePrimitivePanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
