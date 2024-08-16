import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const SideNavBar = styled.div`
  flex-shrink: 0;

  background-color: hsl(var(--background-alt));

  height: 100%;
`

export const SideNavBarWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`

export const SideNavBarContainer = styled.div`
  position: relative;

  display: flex;

  height: 100%;

  overflow: hidden;
`

export const ContentLayout = styled.div`
  position: relative;

  width: calc(100% - 10px);

  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
`

export const SideNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: calc(100% - 15px);

  margin: 10px 10px 5px;
`

export const SideNavHeaderText = styled.h1`
  font-size: 13px;
  line-height: 1.2;
  font-weight: 600;

  text-transform: uppercase;
`

export const CollapseToggle = styled(Button)`
  color: hsl(var(--foreground));
  background-color: transparent;

  width: 30px;
  height: 30px;

  border-radius: var(--radius);

  padding: 0;

  user-select: none;

  &:hover {
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

export const ContentWrapper = styled.div`
  position: relative;
`
