import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import styled, { keyframes } from "styled-components"

import { enterKeyframes } from "@/styles/abstract/_mixins"

const expandUpKeyframe = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: var(--radix-accordion-content-height);
  }
`

const expandDownKeyframe = keyframes`
  0% {
    height: var(--radix-accordion-content-height);
  }
  100% {
    height: 0;
  }
`

export const AccordionPrimitiveItem = styled(AccordionPrimitive.Item)`
  border-bottom-width: 1px;
`

export const AccordionPrimitiveHeader = styled(AccordionPrimitive.Header)`
  display: flex;
`

export const AccordionPrimitiveTrigger = styled(AccordionPrimitive.Trigger)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 0;

  padding-top: 1rem;
  padding-bottom: 1rem;

  font-weight: 500;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &[data-state="open"] {
    svg {
      --tw-rotate: 180deg;

      animation-name: ${enterKeyframes};
    }
  }
`

export const AccordionIcon = styled(ChevronDown)`
  flex-shrink: 0;

  width: 1rem;
  height: 1rem;

  animation-duration: 0.2s;

  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
`

export const AccordionPrimitiveContent = styled(AccordionPrimitive.Content)`
  font-size: 0.875rem;
  line-height: 1.25rem;

  overflow: hidden;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &[data-state="open"] {
    animation: ${expandUpKeyframe} 0.2s ease-out;
  }

  &[data-state="close"] {
    animation: ${expandDownKeyframe} 0.2s ease-out;
  }
`

export const AccordionContentWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 1rem;
`
