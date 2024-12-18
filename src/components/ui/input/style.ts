import styled, { css } from "styled-components"

import type { InputProps } from "@/components/ui/input/index"

const InputDefaultVariant = css`
  background-color: hsl(var(--background));

  border-width: 1px;
  border-style: solid;
  border-color: rgba(73, 77, 85);
  border-radius: calc(0.5rem - 2px);

  &:focus,
  &:focus-visible {
    background-color: hsl(var(--background));

    border-color: hsla(var(--color-twitch-orange-11));

    outline-offset: -1px;
    outline: none;

    box-shadow:
      0 0 0 2px hsla(var(--color-twitch-orange-11)),
      inset 0 0 0 2px hsla(var(--color-twitch-orange-11));
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

  &:hover {
    border-color: rgba(170, 176, 182);
  }

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

export const errorCss = css`
  border-color: rgba(233, 17, 60);

  box-shadow: inset 0 0 0 1px rgba(233, 17, 60);

  &:hover {
    border-color: rgba(233, 17, 60);
    box-shadow: inset 0 0 0 1px rgba(233, 17, 60);
  }
`
