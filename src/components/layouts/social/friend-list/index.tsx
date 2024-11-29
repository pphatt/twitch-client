import * as React from "react"

import FriendListItem from "@/components/layouts/social/friend-list-item"
import {
  PostNowSideSectionHeaderTextWrapper,
  PostNowSideSectionHeaderWrapper,
  PostNowSideSectionWrapper,
  RecommendFriendContentContainer,
  RecommendFriendContentWrapper,
} from "@/components/layouts/social/friend-list/style"

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
          <FriendListItem />

          <FriendListItem />

          <FriendListItem />
        </RecommendFriendContentContainer>
      </RecommendFriendContentWrapper>
    </PostNowSideSectionWrapper>
  )
}
