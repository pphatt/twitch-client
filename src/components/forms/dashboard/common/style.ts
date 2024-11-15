import styled from "styled-components"
import {FormLabel} from "@/components/ui/form";

export const RowWrapper = styled.div`
  width: 100%;

  padding: 20px;

  &:not(:first-child) {
    border-top: 1px solid hsla(var(--color-opac-gd-2));
  }
`

export const RowOverlay = styled.div`
  position: relative;

  display: flex;
  flex-grow: 1;
  flex-flow: column;

  font-size: 13px;
`

export const RowTextWrapper = styled.div`
  flex-shrink: 0;
`

export const RowContainer = styled.div`
  container: container / inline-size;

  width: 100%;

  @container container (min-width: ${"768px"}) {
    ${RowOverlay} {
      flex-direction: row;
      gap: 10px;
    }

    ${RowTextWrapper} {
      width: 180px;
    }
  }
`

export const RowTextContainer = styled.div`
  margin-bottom: 5px;
`

export const RowText = styled(FormLabel)`
  color: hsl(var(--color-hinted-grey-15));

  font-weight: 700;
`

export const RowInputWrapper = styled.div`
  flex-grow: 1;
`

export const RowInputContainer = styled.div`
  display: flex;

  width: 100%;
`

export const InputWrapper = styled.div`
  flex-grow: 1;
`

export const InputDescriptionWrapper = styled.div`
  margin-top: 10px;
`

export const InputDescriptionText = styled.p`
  color: hsl(var(--foreground-alt));
`
