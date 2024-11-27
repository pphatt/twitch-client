import * as React from "react"

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
  isLive: boolean
  view: number
}

export default function ChannelAction({ isLive, view }: ChannelActionProps) {
  return (
    <LiveInfoActionWrapper>
      <LiveInfoActionContainer>
        <LiveInfoActionOverlay>
          {isLive && (
            <ViewAndTimeCountWrapper>
              <ViewCountWrapper>
                <ViewCountContainer>
                  <ViewCountIconWrapper>
                    <Icons.viewer />
                  </ViewCountIconWrapper>

                  <ViewCountTextWrapper>
                    <span>{new Intl.NumberFormat("en-US").format(view)}</span>
                  </ViewCountTextWrapper>
                </ViewCountContainer>
              </ViewCountWrapper>

              <div className={"stream-time-wrapper"}></div>
            </ViewAndTimeCountWrapper>
          )}

          <LiveActionWrapper>
            <ShareStreamBtn />

            <ReportBtn />
          </LiveActionWrapper>
        </LiveInfoActionOverlay>
      </LiveInfoActionContainer>
    </LiveInfoActionWrapper>
  )
}
