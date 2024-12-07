import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const ChannelActionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`

export const ChannelActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: nowrap;
`

export const ChannelActionOverlay = styled.div`
  position: relative;

  display: flex;

  overflow: hidden;
`

export const FollowButtonLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 4px;

  overflow: hidden;
`

export const FollowButtonLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FollowButtonLayoutOverlay = styled.div`
  display: inline-flex;

  background-color: var(--color-background-accent-alt-2);

  border-radius: 4px;

  overflow: hidden;
`

export const FollowButton = styled(Button)`
  color: #fff;
  background-color: hsl(var(--color-twitch-orange-11));

  width: 100%;
  height: 30px;

  border-radius: 4px;

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  overflow: hidden;
  vertical-align: middle;

  user-select: none;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    background-color: hsl(var(--color-twitch-orange-12));
  }
`

export const UnFollowButton = styled(Button)`
  color: #efeff1;
  background-color: rgba(83, 83, 95, 0.38);

  width: 100%;
  height: 30px;

  border-radius: 4px;

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  overflow: hidden;
  vertical-align: middle;

  user-select: none;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    background-color: #ffaaa8;
  }
`

export const FollowButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;

  padding: 0 10px;
`

export const FollowButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
`

export const FollowButtonOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FollowIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  margin-right: 5px;
`

export const UnFollowIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`

export const FollowIconContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: currentColor;
  }
`

export const FollowText = styled.div`
  opacity: 1;
  transition: all 200ms ease 0ms;
`
