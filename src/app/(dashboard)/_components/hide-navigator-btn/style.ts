import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const SiteHeaderButtonWrapper = styled.div`
  position: relative;
`

export const SiteHeaderButtonContainer = styled.div`
  display: inline-flex;
`

export const SiteHeaderButton = styled(Button)`
  background-color: rgba(83, 83, 95, 0.48) !important;

  width: 36px;
  height: 36px;

  border-radius: calc(var(--radius) + 2px);

  padding: 6px;

  div {
    display: inline-flex;
    align-items: center;

    width: 24px;
    height: 24px;

    fill: currentColor;
  }

  svg {
    height: 24px;
    width: 24px;
  }
`
