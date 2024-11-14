import TextareaAutosize from "react-textarea-autosize"
import styled from "styled-components"

export const TextArea = styled(TextareaAutosize)`
  display: block;

  color: hsl(var(--foreground));
  background-color: hsl(var(--background));
  background-clip: padding-box;

  width: 100%;

  border-style: solid;
  border-width: 0;
  border-color: transparent;
  border-radius: 4px;

  padding: 5px 10px;

  font-size: 13px;
  line-height: 1.5;

  resize: none;

  appearance: none;

  transition:
    border 100ms ease-in,
    background-color 100ms ease-in;

  box-shadow: inset 0 0 0 1px rgba(222, 222, 227, 0.4);

  &::placeholder {
    font-weight: 600;
  }

  &:hover {
    background-color: hsl(var(--background));

    border-color: rgba(222, 222, 227, 0.4);

    box-shadow: inset 0 0 0 2px rgba(222, 222, 227, 0.4);

    outline: none;
  }

  &:focus {
    background-color: hsl(var(--background));

    border-color: hsl(var(--color-twitch-orange-11));

    outline: none;
    outline-offset: -1px;

    box-shadow:
      0 0 0 2px hsl(var(--color-twitch-orange-11)),
      inset 0 0 0 2px hsl(var(--color-twitch-orange-11));
  }
`
