import * as LabelPrimitive from "@radix-ui/react-label"
import styled from "styled-components"

export const LabelPrimitiveRootWrapper = styled(LabelPrimitive.Root)`
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 500;

  margin-left: 8px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }
`
