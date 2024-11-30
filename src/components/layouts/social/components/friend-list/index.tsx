"use client"

import * as React from "react"
import FriendListItem from "src/components/layouts/social/components/friend-list-item"

import {
  PostNowSideSectionHeaderTextWrapper,
  PostNowSideSectionHeaderWrapper,
  PostNowSideSectionWrapper,
  RecommendFriendContentContainer,
  RecommendFriendContentWrapper,
} from "@/components/layouts/social/components/friend-list/style"

export default function FriendList() {
  return (
    <PostNowSideSectionWrapper>
      <PostNowSideSectionHeaderWrapper>
        <PostNowSideSectionHeaderTextWrapper>
          Friends List
        </PostNowSideSectionHeaderTextWrapper>
      </PostNowSideSectionHeaderWrapper>

      <RecommendFriendContentWrapper>
        <RecommendFriendContentContainer>
          <FriendListItem
            image={
              "https://s120-ava-talk.zadn.vn/d/7/5/d/4/120/aae4fe2e565d553d5f325f2aa0ef2cf1.jpg"
            }
            name={"Đặng Viễn Hào"}
          />

          <FriendListItem
            image={"/avatar/misanthrope-avatar.png"}
            name={"Lê Nguyễn Quốc Khánh"}
          />

          <FriendListItem
            image={
              "https://cover-talk.zadn.vn/8/5/0/9/3/f9f532eea9f2f21917b6dc95d3ee3e11.jpg"
            }
            name={"DuyKa"}
          />
        </RecommendFriendContentContainer>
      </RecommendFriendContentWrapper>
    </PostNowSideSectionWrapper>
  )
}
