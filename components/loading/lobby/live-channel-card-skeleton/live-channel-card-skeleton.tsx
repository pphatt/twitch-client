"use client"

import * as React from "react"

import {
  AvatarSkeletonContainer,
  AvatarSkeletonWrapper,
  CardImageSkeletonContainer,
  CardImageSkeletonOverlay,
  CardImageSkeletonWrapper,
  CardSkeletonContainer,
  CardSkeletonWrapper,
  CommonSkeletonWrapper,
  ContentSkeletonContainer,
  ContentSkeletonWrapper,
  ContentSmallerSkeletonContainer,
  DescriptionSkeletonContainer,
  DescriptionSkeletonWrapper,
  ImageSkeleton,
  TitleSkeletonWrapper,
} from "@/components/loading/lobby/live-channel-card-skeleton/style"

interface LiveChannelCardSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function LiveChannelCardSkeleton({
  ...props
}: LiveChannelCardSkeletonProps) {
  return (
    <CardSkeletonWrapper {...props}>
      <CardSkeletonContainer>
        <CardImageSkeletonWrapper>
          <CardImageSkeletonOverlay />

          <CardImageSkeletonContainer>
            <ImageSkeleton />
          </CardImageSkeletonContainer>
        </CardImageSkeletonWrapper>

        <DescriptionSkeletonWrapper>
          <DescriptionSkeletonContainer>
            <AvatarSkeletonWrapper>
              <div>
                <AvatarSkeletonContainer />
              </div>
            </AvatarSkeletonWrapper>

            <ContentSkeletonWrapper>
              <ContentSkeletonContainer>
                <TitleSkeletonWrapper />
              </ContentSkeletonContainer>

              <ContentSmallerSkeletonContainer>
                <CommonSkeletonWrapper />
              </ContentSmallerSkeletonContainer>

              <ContentSmallerSkeletonContainer>
                <CommonSkeletonWrapper />
              </ContentSmallerSkeletonContainer>
            </ContentSkeletonWrapper>
          </DescriptionSkeletonContainer>
        </DescriptionSkeletonWrapper>
      </CardSkeletonContainer>
    </CardSkeletonWrapper>
  )
}
