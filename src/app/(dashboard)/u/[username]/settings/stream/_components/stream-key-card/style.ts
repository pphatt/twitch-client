import styled, { css } from "styled-components"

import { Button } from "@/components/ui/button"

export const BlockContentWrapper = styled.div`
  position: relative;

  display: flex;

  flex-grow: 1;
`

export const ShowButton = styled(Button)`
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

const shareButtonCss = css`
  height: 30px;

  border-radius: var(--radius);

  padding: 10px;
  margin-left: 16px;
`

export const CopyButton = styled(Button)`
  ${shareButtonCss};

  color: #fff;
  background-color: hsl(var(--color-twitch-orange-11));

  &:hover {
    background-color: hsl(var(--color-twitch-orange-12));
  }
`

export const DefaultButton = styled(Button)`
  ${shareButtonCss};

  color: hsl(var(--foreground));
  background-color: rgba(83, 83, 95, 0.38);

  &:hover {
    background-color: rgba(83, 83, 95, 0.48);
  }
`
