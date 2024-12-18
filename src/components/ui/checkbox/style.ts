import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import styled from "styled-components"

export const CheckboxPrimitiveRoot = styled(CheckboxPrimitive.Root)`
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;

  width: 1rem;
  height: 1rem;

  border-width: 1px;
  border-color: hsl(var(--primary));
  border-radius: calc(0.5rem - 4px);

  cursor: pointer;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    color: currentColor;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }

  &[data-state="checked"] {
    color: hsl(var(--primary-foreground));
    background-color: hsl(var(--primary));
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
