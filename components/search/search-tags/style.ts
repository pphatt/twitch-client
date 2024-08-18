import styled from "styled-components"

import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export const SearchCategoriesTags = styled.div`
  max-width: 220px;
  min-width: 220px;

  margin-right: 5px;
`

export const CommandWrapper = styled(Command)`
  color: rgb(255 255 255);
  background-color: rgb(23 28 30);

  height: 30px;

  overflow: initial;

  z-index: 51;

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
  height: 100%;

  font-size: 13px;

  padding: 0.5rem 0;

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

  z-index: 50;
`

export const CommandItemWrapper = styled(CommandItem)`
  align-items: initial;

  color: #fff;
  background-color: transparent;

  padding: 0.375rem;

  cursor: pointer;

  transition: background 0.1s ease-out;

  &[aria-selected="true"] {
    color: initial;
    background-color: rgba(83, 83, 95, 0.55);
  }
`
