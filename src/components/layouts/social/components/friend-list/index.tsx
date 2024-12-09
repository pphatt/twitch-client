"use client"

import * as React from "react"
import type { MyListFriendItemResponseDto } from "@modules/user/presentation/http/dto/response/social/my-list-friend.response.dto"
import FriendListItem from "src/components/layouts/social/components/friend-list-item"

import {
  PostNowSideSectionHeaderTextWrapper,
  PostNowSideSectionHeaderWrapper,
  PostNowSideSectionWrapper,
  RecommendFriendContentContainer,
  RecommendFriendContentWrapper,
} from "@/components/layouts/social/components/friend-list/style"

interface FriendListProps {
  listFriendData: MyListFriendItemResponseDto[]
}

export default function FriendList({ listFriendData }: FriendListProps) {
  return (
    <PostNowSideSectionWrapper>
      <PostNowSideSectionHeaderWrapper>
        <PostNowSideSectionHeaderTextWrapper>
          Friends List
        </PostNowSideSectionHeaderTextWrapper>
      </PostNowSideSectionHeaderWrapper>

      <RecommendFriendContentWrapper>
        <RecommendFriendContentContainer>
          {listFriendData.map(({ username, avatar }, index) => (
            <FriendListItem
              key={index}
              image={
                avatar !== "" ? avatar : "/avatar/user-default-picture.png"
              }
              name={username}
              slug={`/social/profile/${username}`}
            />
          ))}
        </RecommendFriendContentContainer>
      </RecommendFriendContentWrapper>
    </PostNowSideSectionWrapper>
  )
}
