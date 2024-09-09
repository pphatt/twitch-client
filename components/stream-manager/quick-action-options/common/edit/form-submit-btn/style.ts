import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const EditStreamInfoBtnWrapper = styled.div`
  background-color: hsl(var(--background));

  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 10px;

  box-shadow: 0 -20px 15px #18181b;

  z-index: 10;
`

export const EditStreamInfoBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
`

export const CloseDialogButtonWrapper = styled(Button)`
  position: relative;

  color: hsl(var(--color-hinted-grey-14));
  background-color: hsla(var(--color-opac-gd-1));

  height: 30px;

  border-radius: 4px;

  padding: 0;
  margin-left: 10px;

  font-size: 13px;
  font-weight: 600;

  overflow: hidden;
  white-space: nowrap;
  vertical-align: middle;

  text-decoration: none;

  user-select: none;

  &:hover {
    background-color: hsla(var(--color-background-interactable-hover));
  }
`

export const SaveButtonWrapper = styled(Button)`
  position: relative;

  color: #fff;
  background-color: hsl(var(--color-twitch-orange-11));

  height: 30px;

  border-radius: 4px;

  padding: 0;
  margin-left: 10px;

  font-size: 13px;
  font-weight: 600;

  vertical-align: middle;
  overflow: hidden;
  white-space: nowrap;

  text-decoration: none;

  user-select: none;

  &:hover {
    background-color: hsla(var(--color-twitch-orange-12));
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;

  padding: 0 10px;
`

export const ButtonText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
`
