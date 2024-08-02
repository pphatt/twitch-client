import styled, { css } from "styled-components"

import type { InputProps } from "@/components/ui/input/input"

const InputDefaultVariant = css`
  background-color: hsl(var(--background));

  border-color: hsl(var(--input));
  border-width: 1px;
  border-radius: calc(0.5rem - 2px);

  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;

    box-shadow:
      0 0 0 2px hsl(240 10% 3.9%),
      0 0 0 4px hsl(240 3.7% 15.9%),
      0 0 #0000;
  }
`

const InputDashboardVariant = css`
  color: hsl(var(--foreground));
  background-color: hsl(var(--background));
  background-clip: padding-box;
`

const InputSizeDefault = css`
  max-width: 20rem;
  width: 100%;
  height: 2.5rem;

  font-size: 0.875rem;
  line-height: 1.25rem;
`

const InputSizeDashboard = css`
  max-width: 100%;
  width: 100%;
  height: 30px;

  font-size: 14px;
  line-height: 1.5;
`

export const InputWrapper = styled.input<InputProps>`
  ${({ $variant = "default" }) =>
    $variant === "default" ? InputDefaultVariant : InputDashboardVariant};

  ${({ $size }) =>
    $size === "default" ? InputSizeDefault : InputSizeDashboard};

  display: flex;

  padding: 0.5rem 0.75rem;

  &[type="file"] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    max-width: 20rem;

    &::file-selector-button {
      background-color: transparent;

      border: 0;

      font-weight: 600;
    }
  }
`
