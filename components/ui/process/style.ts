import * as ProgressPrimitive from "@radix-ui/react-progress"
import styled from "styled-components"

export const ProgressPrimitiveRoot = styled(ProgressPrimitive.Root)`
  position: relative;

  background-color: hsl(var(--secondary));

  border-radius: 9999px;

  height: 1rem;
  width: 60%;

  overflow: hidden;

  div {
    background-color: hsl(var(--primary));

    width: 100%;
    height: 100%;

    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }
`
