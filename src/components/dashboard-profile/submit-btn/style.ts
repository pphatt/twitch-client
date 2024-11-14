import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { spinKeyframes } from "@/styles/abstract/_mixins"

export const SubmitBtnWrapper = styled.div`
  background-color: #26262c;

  padding: 20px;
`

export const SubmitBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const StatusLine = styled.div`
  position: absolute;

  width: 1px;
  height: 1px;

  border: none;

  padding: 0;
  margin: -1px;

  clip: rect(0px, 0px, 0px, 0px);

  overflow: hidden;
`

export const SubmitBtnComp = styled(Button)`
  color: #fff;
  background-color: hsl(var(--color-twitch-orange-11));

  height: 30px;

  border-radius: 4px;

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  overflow: hidden;
  text-decoration: none;
  white-space: nowrap;

  vertical-align: middle;

  user-select: none;

  &:hover {
    background-color: hsl(var(--color-twitch-orange-12));
  }

  &:disabled {
    color: hsl(var(--foreground-alt-2));
    background-color: hsla(var(--color-opac-gd-1));

    cursor: not-allowed;

    opacity: 0.5;
  }
`

export const InnerSubmitBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;

  padding: 0 10px;
`

export const InnerSubmitBtnText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
`

export const IconSpinner = styled(Icons.spinner)`
  width: 1rem;
  height: 1rem;

  margin-right: 0.5rem;

  animation-name: ${spinKeyframes};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`
