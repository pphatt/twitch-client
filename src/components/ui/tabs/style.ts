import * as TabsPrimitive from "@radix-ui/react-tabs"
import styled from "styled-components"

export const TabsPrimitiveList = styled(TabsPrimitive.List)`
  display: inline-flex;
  justify-content: center;
  align-content: center;

  color: hsl(var(--muted-foreground));
  background-color: hsl(var(--muted));

  height: 2.25rem;

  padding: 0.25rem;

  border-radius: 0.5rem;
`

export const TabsPrimitiveTrigger = styled(TabsPrimitive.Trigger)`
  display: inline-flex;
  justify-content: center;
  align-content: center;

  background-color: transparent;

  padding: 0.25rem 0.75rem;

  border-radius: calc(0.5rem - 2px);

  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;

  white-space: nowrap;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &[data-state="active"] {
    color: hsl(var(--foreground));
    background-color: hsl(var(--background));

    box-shadow:
      0 0 #0000,
      0 0 #0000,
      0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px -1px rgba(0, 0, 0, 0.1);
  }

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }

  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;

    box-shadow:
      0 0 0 2px hsl(var(--background)),
      var(--tw-ring-inset) 0 0 0 4px hsl(var(--ring)),
      0 0 #0000;
  }
`

export const TabsPrimitiveContent = styled(TabsPrimitive.Content)`
  margin-top: 0.5rem;

  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;

    box-shadow:
      0 0 0 2px hsl(var(--background)),
      var(--tw-ring-inset) 0 0 0 4px hsl(var(--ring)),
      0 0 #0000;
  }
`
