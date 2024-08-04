import * as React from "react"

import {
  Icons,
  IconsContainer,
  IconsOverlay,
} from "@/components/common/icons-wrapper/style"

interface IconsWrapperProps {
  children?: React.ReactNode
  side?: "left" | "right"
}

export default function IconsWrapper({
  children,
  side = "right",
}: IconsWrapperProps) {
  return (
    <Icons data-side={side}>
      <IconsContainer>
        <IconsOverlay>{children}</IconsOverlay>
      </IconsContainer>
    </Icons>
  )
}
