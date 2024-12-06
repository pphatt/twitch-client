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
  slug: string
}

export default function FriendListItem({ image, name, slug }: FriendListItemProps) {
  return (
    <RecommendFriendItemWrapper>
      <RecommendFriendItemContainer>
        <RecommendFriendItemOverlay>
          <div className="user">
            <UserItemWrapper>
              <UserItemContainer href={slug}>
                <UserAvatarImageWrapper>
                  <UserAvatarImage src={image} alt={""} />
                </UserAvatarImageWrapper>
              </UserItemContainer>

              <UserNameWrapper>
                <UserNameContainer>
                  <UserNameOverlay href={slug}>
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
