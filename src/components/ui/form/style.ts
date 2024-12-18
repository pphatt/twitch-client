import type { FieldError } from "react-hook-form"
import styled from "styled-components"

import { Index } from "@/components/ui/label"

export const FormItemWrapper = styled.div`
  margin-top: 0.5rem;
`

export const FormLabelWrapper = styled(Index).attrs<{
  $error: FieldError | undefined
}>({})`
  color: ${(props) => props.$error && "rgba(242, 112, 138)"} !important;
`

export const FormDescriptionWrapper = styled.p`
  color: hsl(240 5% 64.9%);

  font-size: 0.875rem;
  line-height: 1.25rem;
`

export const FormMessageWrapper = styled.p`
  color: rgba(242, 112, 138);

  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
`
