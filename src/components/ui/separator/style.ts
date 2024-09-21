import * as SeparatorPrimitive from "@radix-ui/react-separator"
import styled from "styled-components"

export const SeparatorPrimitiveRoot = styled(SeparatorPrimitive.Root)`
  display: none;

  border-bottom-width: 2px;
  border-color: rgb(36 39 44);

  padding: 10px 0;
  margin-top: -20px;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    display: block;
  }

  &[data-orientation="horizontal"] {
    //height: 1px;
    //width: 100%;
  }

  &[data-orientation="vertical"] {
    //height: 100%;
    //width: 1px;
  }
`
