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
} from "@/components/layouts/social/friend-list-item/style"

export default function FriendListItem() {
  return (
    <RecommendFriendItemWrapper>
      <RecommendFriendItemContainer>
        <RecommendFriendItemOverlay>
          <div className="user">
            <UserItemWrapper>
              <UserItemContainer href={"/social/profile/1"}>
                <UserAvatarImageWrapper>
                  <UserAvatarImage
                    src={
                      "https://s120-ava-talk.zadn.vn/d/7/5/d/4/120/aae4fe2e565d553d5f325f2aa0ef2cf1.jpg"
                    }
                    alt={""}
                  />
                </UserAvatarImageWrapper>
              </UserItemContainer>

              <UserNameWrapper>
                <UserNameContainer>
                  <UserNameOverlay href={"/social/profile/1"}>
                    <UserNameText>Đặng Viễn Hào</UserNameText>
                  </UserNameOverlay>
                </UserNameContainer>
              </UserNameWrapper>

              <FollowButtonWrapper>
                <FollowButton>
                  <Icons.plus />
                </FollowButton>
              </FollowButtonWrapper>
            </UserItemWrapper>
          </div>
        </RecommendFriendItemOverlay>
      </RecommendFriendItemContainer>
    </RecommendFriendItemWrapper>
  )
}
