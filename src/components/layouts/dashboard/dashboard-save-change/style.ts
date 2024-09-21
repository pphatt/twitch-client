import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const LayoutWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-left: 20px;
  margin-right: 20px;
`

export const CancelChangeWrapper = styled.div`
  margin-right: 10px;
`

export const CancelChangeBtn = styled(Button)`
  color: hsl(var(--foreground));
  background-color: rgba(83, 83, 95, 0.38);

  width: max-content;
  height: 30px;

  border-radius: var(--radius);

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  &:hover {
    background-color: rgba(83, 83, 95, 0.48);
  }

  &:active {
    background-color: rgba(83, 83, 95, 0.55);
  }
`

export const CancelChangeBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;

  padding: 0 10px;
`

export const CancelChangeBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
`

export const CancelChangeBtnText = styled.p`
  font-size: 13px;
  line-height: 1.5;
`
