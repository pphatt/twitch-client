import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const AccountRecoveryWrapper = styled.div`
  max-width: 460px;
`

export const TitleText = styled.p`
  font-size: 24px;
  line-height: 1.2;
  font-weight: 600;
`

export const Text2Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`

export const Text2Text = styled.p`
  font-size: 18px;
`

export const LabelWrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
`

export const LabelContainer = styled.div`
  display: inline-flex;
  align-items: center;

  margin-bottom: 5px;
`

export const LabelText = styled.label`
  color: #f7f7f8;

  font-size: 13px;
  font-weight: 600;
`

export const InputWrapper = styled.div`
  position: relative;
`

export const InputComp = styled(Input)`
  background-color: hsl(var(--background));

  max-width: 100%;
  height: 30px;

  //border: transparent;
  border-radius: var(--radius);

  padding: 5px 10px;

  font-size: 13px;
  font-weight: 400;

  appearance: none;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  transition:
    border 100ms ease-in,
    background-color 100ms ease-in;

  box-shadow: inset 0 0 0 1px rgba(222, 222, 227, 0.4);

  &:focus,
  &:focus:hover {
    border-color: hsl(var(--color-twitch-orange-11));

    outline-offset: -1px;

    box-shadow:
      0 0 0 2px hsl(var(--color-twitch-orange-11)),
      inset 0 0 0 2px hsl(var(--color-twitch-orange-11));
  }
`

export const SubmitBtnWrapper = styled.div`
  margin-top: 40px;
`

export const SubmitBtn = styled(Button)<{
  $isSubmitting: boolean
}>`
  color: #fff ${({ $isSubmitting }) => $isSubmitting && "!important"};
  background-color: hsl(var(--color-twitch-orange-11))
    ${({ $isSubmitting }) => $isSubmitting && "!important"};

  max-width: 100%;
  width: 100%;
  height: 30px;

  padding: 5px 8px;

  font-size: 13px;
  font-weight: 600;

  &:disabled {
    color: hsl(var(--foreground-alt-2));

    background-color: rgba(83, 83, 95, 0.38);

    &:hover {
      background-color: rgba(83, 83, 95, 0.38);
    }
  }

  &:not([disabled]):hover:hover {
    background-color: hsl(var(--color-twitch-orange-12));
  }
`
