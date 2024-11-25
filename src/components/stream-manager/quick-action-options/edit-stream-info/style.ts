import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { DialogContent, DialogTitle } from "@/components/ui/dialog"

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

// align-items: center;
// color: #0e0e10;
// display: flex;
// height: 100vh;
// justify-content: center;
// outline: none;
// overflow: hidden;
// pointer-events: none;
// width: 100vw;

export const DialogContentWrapper = styled(DialogContent)`
  background-color: hsl(var(--background));

  max-width: 600px;
  width: 100vw;

  border-width: 0;
  border-radius: 6px;

  padding: 0;

  pointer-events: all;

  & > button {
    right: 10px;
  }
`

export const ContentWrap = styled.div`
  display: flex;

  //max-width: 600px;
  //width: 100vw;
  //max-height: 100vh;
  //height: auto;
  //
  //pointer-events: all;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 600px;
  max-height: 100%;

  border-radius: 6px;
`

export const DialogTitleWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  background-size: cover;

  min-height: 55px;

  padding: 20px 10px 5px 20px;
`

export const DialogTitleContainer = styled(DialogTitle)`
  font-size: 24px;
  line-height: 1.2;
  font-weight: 600;
`

export const DialogContentContainer = styled.div`
  width: 100%;
  height: calc(100% - 6.5rem);

  padding-left: 20px;
  padding-right: 20px;
`

export const DialogContentOverlay = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`

export const EditContentWrapper = styled.div`
  padding: 20px 10px;
`

export const EditContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`

export const EditContentOverlay = styled.div`
  display: flex;
  flex-direction: column;
`
