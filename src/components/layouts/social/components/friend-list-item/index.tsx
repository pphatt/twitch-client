"use client"

import * as React from "react"

import { Icons } from "@/components/icons"
import {
  FollowButton,
  FollowButtonWrapper,
  RecommendFriendItemContainer,
  RecommendFriendItemOverlay,
  RecommendFriendItemWrapper,
  UserAvatarImage,
  UserAvatarImageWrapper,
  UserItemContainer,
  UserItemWrapper,
  UserNameContainer,
  UserNameOverlay,
  UserNameText,
  UserNameWrapper,
} from "@/components/layouts/social/components/friend-list-item/style"

interface FriendListItemProps {
  image: string
  name: string
}

export default function FriendListItem({ image, name }: FriendListItemProps) {
  return (
    <RecommendFriendItemWrapper>
      <RecommendFriendItemContainer>
        <RecommendFriendItemOverlay>
          <div className="user">
            <UserItemWrapper>
              <UserItemContainer href={"/social/profile/1"}>
                <UserAvatarImageWrapper>
                  <UserAvatarImage src={image} alt={""} />
                </UserAvatarImageWrapper>
              </UserItemContainer>

              <UserNameWrapper>
                <UserNameContainer>
                  <UserNameOverlay href={"/social/profile/1"}>
                    <UserNameText>{name}</UserNameText>
                  </UserNameOverlay>
                </UserNameContainer>
              </UserNameWrapper>
            </UserItemWrapper>
          </div>
        </RecommendFriendItemOverlay>
      </RecommendFriendItemContainer>
    </RecommendFriendItemWrapper>
  )
}
