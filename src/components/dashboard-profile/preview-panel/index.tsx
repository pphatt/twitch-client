import * as React from "react"

import {
  BioText,
  FollowerContentText,
  FollowerContentWrapper,
  FollowerDisplayContainer,
  FollowerDisplayOverlay,
  FollowersDisplayWrapper,
  PreviewPanelContentContainer,
  PreviewPanelContentOverlay,
  PreviewPanelContentWrapper,
  PreviewPanelHeaderContainer,
  PreviewPanelHeaderText,
  PreviewPanelHeaderWrapper,
  PreviewPanelLayoutContainer,
  PreviewPanelLayoutOverlay,
  PreviewPanelLayoutWrapper,
  PreviewPanelWrapper,
} from "@/components/dashboard-profile/preview-panel/style"

interface PreviewPanelProps {
  displayName: string
  followers: number
  bio: string
}

export default function PreviewPanel({
  displayName,
  followers,
  bio,
}: PreviewPanelProps) {
  return (
    <PreviewPanelLayoutWrapper>
      <PreviewPanelLayoutContainer>
        <PreviewPanelLayoutOverlay>
          <PreviewPanelContentWrapper>
            <PreviewPanelHeaderWrapper>
              <PreviewPanelHeaderContainer>
                <PreviewPanelHeaderText>
                  About {displayName}
                </PreviewPanelHeaderText>
              </PreviewPanelHeaderContainer>
            </PreviewPanelHeaderWrapper>

            <PreviewPanelContentContainer>
              <PreviewPanelContentOverlay>
                <PreviewPanelWrapper>
                  <FollowersDisplayWrapper>
                    <FollowerDisplayContainer>
                      <FollowerDisplayOverlay>
                        <FollowerContentWrapper>
                          <FollowerContentText>{followers}</FollowerContentText>{" "}
                          followers
                        </FollowerContentWrapper>
                      </FollowerDisplayOverlay>
                    </FollowerDisplayContainer>
                  </FollowersDisplayWrapper>

                  <BioText>{bio}</BioText>
                </PreviewPanelWrapper>
              </PreviewPanelContentOverlay>
            </PreviewPanelContentContainer>
          </PreviewPanelContentWrapper>
        </PreviewPanelLayoutOverlay>
      </PreviewPanelLayoutContainer>
    </PreviewPanelLayoutWrapper>
  )
}
