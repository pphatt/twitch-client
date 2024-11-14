import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

export const UsernameInputComp = styled(Input)`
  color: hsl(var(--foreground));
  background-color: hsl(var(--background));
  background-clip: padding-box;

  max-width: 100%;
  width: 100%;
  height: 30px;

  border-style: solid;
  border-width: 0;
  border-color: transparent;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  padding: 5px 10px;

  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;

  appearance: none;

  transition:
    border 100ms ease-in,
    background-color 100ms ease-in;

  box-shadow: inset 0 0 0 1px rgba(222, 222, 227, 0.4);

  &:hover {
    box-shadow: inset 0 0 0 1px rgba(222, 222, 227, 0.4);
  }

  &:disabled {
    background-color: hsla(var(--color-opac-gl-1));

    opacity: 0.5;

    pointer-events: none;
  }
`

export const EditButtonWrapper = styled.div`
  flex-shrink: 0;
`

export const EditButton = styled(Button)`
  color: hsl(var(--foreground));
  background-color: hsla(var(--color-opac-gd-1));

  height: 30px;

  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  vertical-align: middle;

  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;

  user-select: none;

  &:hover {
    background-color: hsla(var(--color-opac-gd-2));

    text-decoration: none;
  }
`

export const EditButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 4px;
`

export const EditButtonOverlay = styled.div`
  display: inline-flex;
  align-items: center;

  width: 20px;
`

export const InnerEditButtonWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;
`

export const InnerEditButtonContainer = styled.div`
  position: relative;

  width: 100%;

  overflow: hidden;
`

export const InnerEditButtonPlaceholder = styled.div`
  padding-bottom: 100%;
`

export const EditButtonSVG = styled(Icons.pen)`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  min-height: 100%;

  fill: currentcolor;
`
