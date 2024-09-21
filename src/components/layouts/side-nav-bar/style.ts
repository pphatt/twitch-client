import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const SideNavbar = styled.div`
  flex-shrink: 0;

  background-color: hsl(var(--background-alt));

  height: 100%;
`

export const SideNavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`

export const SideNavbarContainer = styled.div`
  position: relative;

  display: flex;

  height: 100%;

  overflow: hidden;
`

export const ContentLayout = styled.div`
  position: relative;
`

export const CollapseToggleContainer = styled.div`
  display: inline-flex;
`

export const CollapseToggle = styled(Button)`
  color: hsl(var(--foreground));
  background-color: transparent;

  width: 30px;
  height: 30px;

  border-radius: var(--radius);

  padding: 0;

  user-select: none;

  &:not([disabled]):hover {
    color: hsl(var(--foreground));
    background-color: rgb(71, 79, 84);
  }
`

export const SVGWrapper = styled.div`
  width: 20px;
  height: 20px;

  pointer-events: none;
`

export const SVGContainer = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;
`

export const IconsCollapse = styled(Icons.collapse)`
  fill: currentcolor;
`

export const IconsExpandArrowFromLine = styled(Icons.expandArrowFromLine)`
  fill: currentcolor;
`

export const SideNavbarContents = styled.div`
  flex-grow: 1;
`

export const SideNavbarTitle = styled.div`
  padding-left: 10px;
  padding-top: 10px;
  margin-top: 5px;

  vertical-align: baseline;

  p {
    font-size: 18px;
    line-height: 1.2;
    font-weight: 600;
  }
`
