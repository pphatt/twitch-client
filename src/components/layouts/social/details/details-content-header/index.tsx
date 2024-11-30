"use client"

import * as React from "react"

import {
  DetailsContentHeaderContainer,
  DetailsContentHeaderOverlay,
  DetailsContentHeaderText,
  DetailsContentHeaderTextWrapper,
  DetailsContentHeaderWrapper,
  DetailsContentInnerHeaderContainer,
  DetailsContentInnerHeaderOverlay,
  DetailsContentInnerHeaderWrapper,
} from "@/components/layouts/social/details/details-content-header/style"

export default function DetailsContentHeader() {
  return (
    <DetailsContentHeaderWrapper>
      <DetailsContentHeaderContainer>
        <DetailsContentHeaderOverlay>
          <DetailsContentInnerHeaderWrapper>
            <DetailsContentInnerHeaderContainer>
              <DetailsContentInnerHeaderOverlay>
                <DetailsContentHeaderTextWrapper>
                  <DetailsContentHeaderText>
                    Post Details Page
                  </DetailsContentHeaderText>
                </DetailsContentHeaderTextWrapper>
              </DetailsContentInnerHeaderOverlay>
            </DetailsContentInnerHeaderContainer>
          </DetailsContentInnerHeaderWrapper>
        </DetailsContentHeaderOverlay>
      </DetailsContentHeaderContainer>
    </DetailsContentHeaderWrapper>
  )
}
