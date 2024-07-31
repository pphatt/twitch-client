import { Command as CommandPrimitive } from "cmdk"
import styled from "styled-components"

export const CommandPrimitiveWrapper = styled(CommandPrimitive)`
  display: flex;
  flex-direction: column;

  color: hsl(var(--popover-foreground));
  background-color: hsl(var(--popover));

  height: 100%;
  width: 100%;

  border-radius: 0.375rem;

  overflow: hidden;
`

export const CommandPrimitiveInput = styled.div`
  display: flex;
  align-items: center;

  padding-left: 0.75rem;
  padding-right: 0.75rem;

  //border-bottom-width: 1px;

  svg {
    flex-shrink: 0;

    width: 1rem;
    height: 1rem;

    margin-right: 0.5rem;

    opacity: 0.5;
  }

  input {
    display: flex;

    background-color: transparent;

    height: 2.75rem;
    width: 100%;

    border-radius: calc(0.5rem - 2px);

    padding-top: 0.75rem;
    padding-bottom: 0.75rem;

    font-size: 0.875rem;
    line-height: 1.25rem;

    outline: 2px solid transparent;
    outline-offset: 2px;

    &[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`

export const CommandPrimitiveList = styled(CommandPrimitive.List)`
  max-height: 400px;

  overflow: auto;

  -ms-scroll-chaining: none;
  overscroll-behavior: contain;
`

export const CommandPrimitiveEmpty = styled(CommandPrimitive.Empty)`
  font-size: 0.875rem;
  line-height: 1.25rem;

  text-align: center;

  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`

export const CommandPrimitiveGroup = styled(CommandPrimitive.Group)`
  color: hsl(var(--foreground));

  padding: 0.25rem;

  overflow: hidden;

  & [cmdk-group-heading] {
    color: hsl(var(--muted-foreground));

    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 500;

    padding: 0.375rem 0.5rem;
  }
`

export const CommandPrimitiveSeparator = styled(CommandPrimitive.Separator)`
  background-color: hsl(var(--border));

  height: 1px;

  margin-left: -0.25rem;
  margin-right: -0.25rem;
`

export const CommandPrimitiveItem = styled(CommandPrimitive.Item)`
  position: relative;

  display: flex;
  align-items: center;

  border-radius: calc(0.5rem - 4px);

  font-size: 0.875rem;
  line-height: 1.25rem;

  padding: 0.375rem 0.5rem;

  cursor: default;

  outline: 2px solid transparent;
  outline-offset: 2px;

  &[aria-selected="true"] {
    color: hsl(var(--accent-foreground));
    background-color: hsl(var(--accent));
  }

  &[data-disabled="true"] {
    opacity: 0.5%;
    pointer-events: none;
  }
`

export const CommandShortcutWrapper = styled.span`
  color: hsl(var(--muted-foreground));

  font-size: 0.75rem;
  line-height: 1rem;

  letter-spacing: 0.1em;

  margin-left: auto;
`
