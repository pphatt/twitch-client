import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const BlockContentWrapper = styled.div`
  position: relative;

  display: flex;

  flex-grow: 1;
`

export const CopyButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;

  background-color: transparent !important;

  height: 100%;

  padding: 0.5rem 0.75rem;

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
`
