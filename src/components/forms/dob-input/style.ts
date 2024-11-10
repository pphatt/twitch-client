import styled from "styled-components"

import { Input, type InputError } from "@/components/ui/input"
import { errorCss } from "@/components/ui/input/style"

export const Layout = styled.div`
  position: relative;
`

export const InputWrapper = styled(Input)<InputError>`
  position: relative;

  display: flex;

  max-width: 100% !important;
  width: 100%;
  height: 2.25rem;

  margin-top: 8px;

  border-width: 2px;
  border-style: solid;
  border-color: rgba(73, 77, 85);
  border-radius: 0.25rem;

  padding-left: 0.75rem;
  padding-right: 0.75rem;

  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;

  appearance: none;

  outline: 2px solid transparent;
  outline-offset: 2px;

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  animation-duration: 0.2s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $error }) => $error && errorCss};

  &:hover {
    border-color: rgba(170, 176, 182);
  }

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    right: 0.75rem;
  }
`
