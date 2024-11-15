import styled, { css } from "styled-components"

import { Input, type InputError } from "@/components/ui/input"
import { errorCss } from "@/components/ui/input/style"

export const DisplayNameInputComp = styled(Input)<InputError>`
  color: hsl(var(--foreground));
  background-color: hsl(var(--background));
  background-clip: padding-box;

  max-width: 100%;
  width: 100%;
  height: 30px;

  border: 0 solid transparent;

  padding: 5px 10px;

  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;

  appearance: none;

  transition:
    border 100ms ease-in,
    background-color 100ms ease-in;

  box-shadow: inset 0 0 0 1px rgba(222, 222, 227, 0.4);

  &:hover {
    border-color: rgba(222, 222, 227, 0.4);

    outline: none;

    box-shadow: inset 0 0 0 2px rgba(222, 222, 227, 0.4);
  }

  &:disabled {
    background-color: hsla(var(--color-opac-gl-1));

    opacity: 0.5;

    pointer-events: none;
  }

  ${({ $error }) =>
    $error &&
    css`
      border-color: #ff4f4d;

      box-shadow: inset 0 0 0 1px #ff4f4d;

      &:hover {
        border-color: #ff4f4d;
        box-shadow: inset 0 0 0 1px #ff4f4d;
      }
    `};

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
