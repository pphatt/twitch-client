"use client"

import * as React from "react"

import {
  ActivityFeedLayoutContainer,
  ActivityFeedLayoutWrapper,
  SMText,
  SMTextContainer,
  SMTextWrapper,
  Text,
  TextWrapper,
} from "@/components/stream-manager/panel/activity-feed/style"

export default function ActivityFeed() {
  return (
    <ActivityFeedLayoutWrapper>
      <ActivityFeedLayoutContainer>
        <TextWrapper>
          <Text>It&apos;s quiet. Too quiet...</Text>
        </TextWrapper>

        <SMTextWrapper>
          <SMTextContainer>
            <SMText>
              We&apos;ll show your new follows, subs, cheers, and raids activity
              here.
            </SMText>
          </SMTextContainer>
        </SMTextWrapper>
      </ActivityFeedLayoutContainer>
    </ActivityFeedLayoutWrapper>
  )
}
