import Link from "next/link"
import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const RecommendFriendItemWrapper = styled.div`
  background: #1b1d2a;

  border-radius: 12px;

  padding: 0 8px;
  margin: 0 8px;

  &:hover {
    background-color: #343746;

    cursor: pointer;
  }
`

export const RecommendFriendItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RecommendFriendItemOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`

export const UserItemWrapper = styled.div`
  display: flex;
  align-items: center;

  max-width: 100%;

  border-radius: 8px;

  padding: 8px 0;
  margin: 4px 0;

  cursor: pointer;
`

export const UserItemContainer = styled(Link)`
  display: inline-flex;
  align-items: center;

  color: rgba(255, 255, 255, 0.45);
`

export const UserAvatarImageWrapper = styled.div`
  position: relative;

  display: inline-block;
  flex-shrink: 0;

  width: 32px;
  height: 32px;
`

export const UserAvatarImage = styled.img`
  background-color: #343746;
  width: 100%;
  height: 100%;

  border-radius: 50%;

  vertical-align: top;
  object-fit: cover;

  box-shadow: inset 0 0 0 1px #1b1d2a;
`

export const UserNameWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;

  margin-left: 12px;

  overflow: hidden;
`

export const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
`

export const UserNameOverlay = styled(Link)`
  display: inline-flex;
  align-items: center;

  color: rgba(255, 255, 255, 0.45);

  max-width: 100%;

  overflow: hidden;
  white-space: nowrap;
`

export const UserNameText = styled.span`
  color: rgba(255, 255, 255, 0.85);

  font-size: 16px;
  font-weight: bold;
  line-height: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const FollowButtonWrapper = styled.div`
  flex-shrink: 0;

  margin-left: 8px;
`

export const FollowButton = styled(Button)`
  flex-shrink: 0;

  color: #fff;
  background-color: hsl(var(--color-twitch-orange-11));

  min-width: 52px;
  height: 30px;

  border-radius: 15px;

  padding: 0 24px;

  font-size: 16px;
  line-height: 30px;

  cursor: pointer;

  &:hover {
    background-color: hsl(var(--color-twitch-orange-12));
  }

  svg {
    width: 20px;
    height: 20px;

    fill: currentColor;
  }
`
