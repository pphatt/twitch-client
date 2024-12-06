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
import PostAction from "@/components/layouts/social/details/post-action"

interface DetailsContentHeaderProps {
  postId: string
  isUserPost: boolean
  isPostDeleted: boolean
}

export default function DetailsContentHeader({
  postId,
  isUserPost,
  isPostDeleted,
}: DetailsContentHeaderProps) {
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

              {isUserPost && !isPostDeleted && <PostAction postId={postId} />}
            </DetailsContentInnerHeaderContainer>
          </DetailsContentInnerHeaderWrapper>
        </DetailsContentHeaderOverlay>
      </DetailsContentHeaderContainer>
    </DetailsContentHeaderWrapper>
  )
}
