import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Layout = styled.div`
  position: relative;
`

export const InputWrapper = styled(Input)`
  padding-right: 40px;
`

export const ShowPasswordButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;

  background-color: transparent;

  height: 100%;

  border-radius: var(--radius);

  padding: 5px 7.5px;

  svg {
    height: 1rem;
    width: 1rem;
  }

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  &:not([disabled]):hover {
    color: initial;
    background-color: rgba(83, 83, 95, 0.48);
  }
`
