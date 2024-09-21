import styled from "styled-components"

export const ToastSuccessLayoutWrapper = styled.div`
  display: inline-block;

  color: #000;
  background-color: hsl(var(--color-background-success));

  max-width: 520px;
  min-width: 280px;
  min-height: 50px;

  padding: 10px !important;

  border-radius: var(--radius);

  text-align: center;

  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.5),
    0 0 8px rgba(0, 0, 0, 0.4);
`

export const ToastSuccessLayoutContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`

export const ToastSuccessLayoutOverlay = styled.div`
  display: flex;
  flex: 1;
`

export const IconWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: flex-start;
  flex-grow: 0;
  flex-shrink: 0;

  margin-top: 5px;
`

export const IconContainer = styled.div`
  margin-right: 5px;
  margin-left: 5px;
`

export const IconOverlay = styled.div`
  display: inline-flex;
  align-items: center;

  width: 20px;
  height: 20px;

  fill: currentColor;

  svg {
    width: 20px;
    height: 20px;
  }
`

export const ToastTextWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  min-height: 30px;
`

export const ToastTextContainer = styled.div`
  flex-grow: 1;

  margin-right: 10px;
  margin-left: 5px;
`

export const ToastText = styled.p`
  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
`
