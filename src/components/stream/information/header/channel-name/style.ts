import Link from "next/link"
import styled from "styled-components"

export const ChannelNameWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ChannelNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`

export const ChannelNameLink = styled(Link)`
  &:hover {
    color: hsl(var(--color-twitch-orange-12));

    text-decoration: underline;
  }
`

export const ChannelName = styled.h1`
  color: hsl(var(--foreground));

  font-size: 18px;
  line-height: 1.2;
  font-weight: 600;
`

export const VerifiedPartnerIndicatorWrapper = styled.div`
  display: flex;
  gap: 2px;

  margin-left: 2px;
`

export const VerifiedPartnerIndicatorContainer = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
`

export const VerifiedPartnerIcon = styled.div`
  display: inline-flex;
  align-items: center;

  width: 16px;
  height: 16px;

  fill: hsl(var(--color-twitch-orange-11));
`
