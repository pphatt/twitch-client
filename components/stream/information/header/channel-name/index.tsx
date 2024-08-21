import * as React from "react"

import type { LiveChannelDataI } from "@/config/data"
import { Icons } from "@/components/icons"
import {
  ChannelName,
  ChannelNameContainer,
  ChannelNameLink,
  ChannelNameWrapper,
  VerifiedPartnerIcon,
  VerifiedPartnerIndicatorContainer,
  VerifiedPartnerIndicatorWrapper,
} from "@/components/stream/information/header/channel-name/style"

interface ChannelNameProps {
  username?: string
  channel: LiveChannelDataI
}

export default function ChannelNameComp({
  username,
  channel,
}: ChannelNameProps) {
  return (
    <ChannelNameWrapper>
      <ChannelNameContainer>
        <ChannelNameLink href={`/${username}`}>
          <ChannelName>{channel?.channel.name}</ChannelName>
        </ChannelNameLink>

        <VerifiedPartnerIndicatorWrapper>
          <VerifiedPartnerIndicatorContainer>
            <VerifiedPartnerIcon>
              <Icons.verifiedPartner aria-label="Verified Partner" />
            </VerifiedPartnerIcon>
          </VerifiedPartnerIndicatorContainer>
        </VerifiedPartnerIndicatorWrapper>
      </ChannelNameContainer>
    </ChannelNameWrapper>
  )
}
