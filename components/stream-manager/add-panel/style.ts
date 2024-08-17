import styled from "styled-components"

import { Button } from "@/components/ui/button"
import SimpleBar from "@/components/simplebar"

export const MenuLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  height: 100%;

  padding-left: 10px;
  padding-right: 10px;

  svg {
    fill: currentColor;
  }
`

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-width: 340px;
  height: 100%;

  outline: none;
`

export const SimpleBarWrapper = styled(SimpleBar)`
  width: 100%;
`

export const MenuLayout = styled.div`
  width: 100%;
`

export const MenuHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  border-bottom: 1px solid rgba(83, 83, 95, 0.48);

  padding: 20px 10px;
  margin-bottom: 10px;

  h3 {
    font-size: 14px;
    line-height: 1.2;
    font-weight: 600;
  }
`

export const MenuContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  padding-right: 10px;
  padding-left: 10px;
`

export const MenuDescriptionWrapper = styled.div`
  margin-bottom: 10px;
`

export const MenuDescriptionText = styled.p`
  color: hsl(var(--foreground-alt-2));
`

export const MenuContentContainer = styled.div`
  flex-grow: 1;
`

export const MenuContentHeader = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;

  p {
    font-size: 13px;
    line-height: 1.5;
    font-weight: 600;

    text-transform: uppercase;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  margin-bottom: 10px;
`

export const ContentTextWrapper = styled.div`
  display: flex;
  align-items: center;

  background-color: hsl(var(--background-alt-2));

  width: 100%;

  padding: 10px 10px 10px 5px;

  border-radius: calc(var(--radius) + 2px);

  user-select: none;
`

export const ContentTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`

export const ContentText = styled.div`
  display: flex;
  align-items: center;

  margin-left: 15px;

  p {
    font-size: 13px;
    line-height: 1.5;
    font-weight: 600;
  }
`

export const ContentButton = styled(Button)`
  color: hsl(var(--foreground));
  background-color: transparent !important;

  width: 30px;
  height: 30px;

  border-radius: var(--radius);

  padding: 0;

  user-select: none;
`

export const ContentButtonWrapper = styled.div`
  width: 20px;
  height: 20px;

  svg {
    width: 100%;
    min-height: 100%;

    fill: currentcolor;
  }
`

export const AddButtonLayoutWrapper = styled.div`
  padding-left: 5px;
`
