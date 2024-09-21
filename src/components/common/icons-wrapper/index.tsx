import * as React from "react"

import {
  IconsContainer,
  IconsOverlay,
  IconsWrap,
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
    <IconsWrap data-side={side}>
      <IconsContainer>
        <IconsOverlay>{children}</IconsOverlay>
      </IconsContainer>
    </IconsWrap>
  )
}
