import styled, { css } from "styled-components"

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command/command"

const CommandFocus = css`
  box-shadow:
    0 0 0 2px rgb(255 103 64),
    inset 0 0 0 2px rgb(255 103 64);
`

export const CommandWrapper = styled(Command)<{ $isFocus: boolean }>`
  ${({ $isFocus }) => $isFocus && CommandFocus}

  flex-basis: 400px;

  color: rgb(255 255 255);
  background-color: rgb(23 28 30);

  max-width: 400px;
  height: 2.25rem;

  margin: 0 2rem;

  overflow: initial;

  z-index: 49;

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;

  svg {
    opacity: 1;
  }

  input {
    &::placeholder {
      color: currentColor;
    }
  }
`

export const CommandInputWrapper = styled(CommandInput)`
  height: 2.25rem;

  border-bottom-width: 0;
`

export const CommandListWrapper = styled(CommandList)`
  background-color: rgb(32 34 37);

  min-height: min(600px, var(--cmdk-list-height) + 2px);

  border-radius: var(--radius);

  margin-top: 4px;

  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 1px 2px 0 rgb(0 0 0 / 0.05);
`

export const CommandGroupWrapper = styled(CommandGroup)``

export const CommandItemWrapper = styled(CommandItem)`
  color: #fff;
  background-color: transparent;

  align-items: initial;

  padding: 0.375rem;

  cursor: pointer;

  transition: background 0.1s ease-out;

  &[aria-selected="true"] {
    color: initial;
    background-color: rgba(83, 83, 95, 0.55);
  }
`
