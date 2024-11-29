import Link from "next/link"
import styled, { css } from "styled-components"

import { Button } from "@/components/ui/button"
import { TooltipContent } from "@/components/ui/tooltip"

/*
 * Share between component:
 * - followed-channel-side-bar
 * - recommend-live-channel-side-bar
 * */

export const SideNavbarSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const SideNavbarSectionHeader = styled.div`
  padding-top: 5px;
  margin: 10px;

  h2 {
    font-size: 13px;
    line-height: 1.2;
    font-weight: 600;

    text-transform: uppercase;
  }
`

export const SideNavbarSectionHeaderCollapse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;

  color: hsl(var(--foreground-alt-2));

  padding-top: 10px;
  padding-bottom: 10px;

  div {
    display: inline-flex;
    align-items: center;

    width: 20px;
    height: 20px;

    fill: currentColor;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

export const ChannelsGroup = styled.div`
  position: relative;
`

export const ChannelWrapper = styled.div`
  opacity: 1;

  transform: scale(1);

  transition-delay: 0ms;
  transition-duration: 150ms;
  transition-timing-function: ease;
  transition-property: transform, opacity;
`

export const ChannelContainer = styled.div`
  position: relative;
`

export const Channel = styled(Link)`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  width: 100%;
  height: 42px;

  padding: 5px 10px;

  &:hover {
    background-color: hsl(var(--background-alt-2));
  }

  &:visited {
    color: hsl(var(--color-twitch-orange-11));
  }
`

export const ChannelAvatar = styled.div`
  display: flex;
  align-items: center;

  &.channel--offline {
    filter: grayscale(100%) contrast(85%);
    opacity: 0.8;
  }
`

export const AvatarWrapper = styled.picture`
  position: relative;

  background-color: inherit;

  width: 30px;
  max-height: 100%;
  height: 30px;
`

export const Avatar = styled.img`
  display: block;

  width: 100%;

  border-radius: 9999px;

  //optional
  height: 100%;
  object-position: top;
  object-fit: cover;
`

export const ChannelDetailsWrapper = styled.div`
  width: 100%;

  margin-left: 10px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ChannelDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ChannelNameWrapper = styled.div`
  width: 100%;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ChannelName = styled.div`
  display: flex;
  align-items: center;

  p {
    flex-grow: 1;

    color: hsl(var(--foreground-alt));

    font-size: 14px;
    line-height: 1.2;
    font-weight: 600;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export const ChannelCurrentCategory = styled.div`
  padding-right: 5px;

  p {
    color: hsl(var(--foreground-alt-2));

    font-size: 13px;
    line-height: 1.2;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export const ChannelLiveViewWrapper = styled.div`
  flex-shrink: 0;

  min-width: 28px;

  margin-left: 5px;
`

export const ChannelLiveViewContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LiveIcon = styled.div`
  position: relative;

  display: inline-block;

  background-color: hsl(var(--color-fill-live));

  width: 8px;
  height: 8px;

  border-radius: 9999px;
`

export const Seo = styled.p`
  position: absolute;
  clip: rect(0px, 0px, 0px, 0px);

  width: 1px;
  height: 1px;

  font-size: 13px;
  line-height: 1.2;

  border: none;

  margin: -1px;
  padding: 0;

  overflow: hidden;
`

export const TotalLiveView = styled.div`
  margin-left: 5px;

  span {
    color: hsl(var(--foreground-alt));
    font-size: 13px;
  }
`

export const OfflineText = styled.span`
  display: flex;
  align-items: center;

  color: hsl(var(--foreground-alt));
  font-size: 13px;
`

export const TooltipBody = styled(TooltipContent)`
  min-width: 160px;
  max-width: 90vw;

  padding: 5px;
`

export const TooltipContentWrapper = styled.div<{
  $isLive?: boolean
}>`
  ${({ $isLive }) => {
    if ($isLive) {
      return css`
        min-width: 200px;

        padding-left: 5px;
        padding-right: 5px;
      `
    }
  }}
`

export const TooltipTextCollapse = styled.p`
  color: hsl(var(--color-twitch-orange-11));

  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: normal !important;
`

export const TooltipText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: hsl(var(--foreground));

  max-width: 200px;

  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: normal !important;
`

export const TooltipLiveCollapse = styled.div`
  display: flex;
  align-items: center;

  div {
    position: relative;

    display: inline-block;

    background-color: hsl(var(--color-fill-live));

    width: 8px;
    height: 8px;

    border-radius: 9999px;
  }

  span {
    color: hsl(var(--foreground-alt-2));

    padding-left: 5px;

    white-space: nowrap;
  }
`

export const TooltipLinkWrapper = styled(Link)`
  display: block;

  width: 100%;

  border-radius: var(--radius);

  &:hover {
    background-color: rgba(83, 83, 95, 0.48);
  }

  &:active {
    background-color: rgba(83, 83, 95, 0.55);
  }
`

export const TooltipLinkContainer = styled.div`
  padding: 5px;

  text-align: center;
`

export const TooltipLinkText = styled.p`
  color: hsl(var(--foreground));

  font-size: 13px;
  line-height: 1.5;
`

export const ShowMoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  padding: 8px 10px 5px;

  line-height: 1.7;

  text-align: left;

  text-transform: capitalize;

  overflow: hidden;
`

export const ShowMoreBtn = styled(Button)`
  color: hsl(var(--color-twitch-orange-11));
  background: transparent;

  height: fit-content;

  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`

export const Divider = styled.div`
  background-color: rgb(36 39 44);

  height: 0.125rem;

  margin-top: 5px;
  margin-left: 8px;
  margin-right: 8px;
`
