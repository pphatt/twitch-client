import styled from "styled-components"

export const LiveInfoActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 0;
  flex-shrink: 1;
`

export const LiveInfoActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap-reverse;

  width: 100%;

  margin-top: 5px;
  margin-left: 10px;
`

export const LiveInfoActionOverlay = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`

export const ViewAndTimeCountWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ViewCountWrapper = styled.div`
  margin-right: 10px;
`

export const ViewCountContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ViewCountIconWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: hsl(var(--color-red-11));
  }
`

export const ViewCountTextWrapper = styled.p`
  color: hsl(var(--color-red-11));

  font-weight: 600;

  span {
    font-feature-settings: "tnum";
  }
`

export const LiveActionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-right: 10px;
`
