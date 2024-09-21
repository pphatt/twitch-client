import * as React from "react"

import {
  ChannelInfoContentContainer,
  ChannelInfoContentLayout,
  ChannelInfoContentWrapper,
} from "@/components/loading/channel/header-loading/style"

export default function HeaderLoading() {
  return (
    <section
      id="live-channel-stream-information"
      aria-label="Stream Information"
    >
      <ChannelInfoContentWrapper>
        <ChannelInfoContentContainer>
          <ChannelInfoContentLayout />
        </ChannelInfoContentContainer>
      </ChannelInfoContentWrapper>
    </section>
  )
}
