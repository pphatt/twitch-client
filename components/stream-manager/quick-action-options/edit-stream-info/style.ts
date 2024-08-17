import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const EditStreamInfoBtn = styled(Button)`
  color: #fff;
  background: #ff6740 !important;

  width: 100%;
  height: 100px;

  border-radius: 4px;

  padding: 0;

  user-select: none;

  transition: background-color 0.15s ease-in-out;
`

export const BtnInnerLayoutWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 10px;
`

export const BtnIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  height: 100%;
`

export const BtnIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  opacity: 1;

  transition-delay: 0ms;
  transition-duration: 150ms;
  transition-timing-function: ease;
  transition-property: none;
  transform: translateY(0px);
`

export const BtnIconFigure = styled.figure`
  display: inline-flex;
  align-items: center;

  svg {
    fill: currentColor;
  }
`

export const EditStreamTextWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 100%;
`

export const EditStreamTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`

export const EditStreamTextOverlay = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-end;
`

export const EditStreamText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 14px;
  line-height: 1.5;
  font-weight: 600;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`
