import * as React from "react"

import type { LiveChannelDataI } from "@/config/data"
import { Icons } from "@/components/icons"
import {
  LiveActionWrapper,
  LiveInfoActionContainer,
  LiveInfoActionOverlay,
  LiveInfoActionWrapper,
  ViewAndTimeCountWrapper,
  ViewCountContainer,
  ViewCountIconWrapper,
  ViewCountTextWrapper,
  ViewCountWrapper,
} from "@/components/stream/information/header/channel-action/style"
import ReportBtn from "@/components/stream/information/report-btn"
import ShareStreamBtn from "@/components/stream/information/share-btn"

interface ChannelActionProps {
  channel: LiveChannelDataI
}

export default function ChannelAction({ channel }: ChannelActionProps) {
  return (
    <LiveInfoActionWrapper>
      <LiveInfoActionContainer>
        <LiveInfoActionOverlay>
          <ViewAndTimeCountWrapper>
            <ViewCountWrapper>
              <ViewCountContainer>
                <ViewCountIconWrapper>
                  <Icons.viewer />
                </ViewCountIconWrapper>

                <ViewCountTextWrapper>
                  <span>
                    {new Intl.NumberFormat("en-US").format(channel.totalView)}
                  </span>
                </ViewCountTextWrapper>
              </ViewCountContainer>
            </ViewCountWrapper>

            <div className={"stream-time-wrapper"}></div>
          </ViewAndTimeCountWrapper>

          <LiveActionWrapper>
            <ShareStreamBtn />

            <ReportBtn />
          </LiveActionWrapper>
        </LiveInfoActionOverlay>
      </LiveInfoActionContainer>
    </LiveInfoActionWrapper>
  )
}
