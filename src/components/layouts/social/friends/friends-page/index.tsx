"use client"

import * as React from "react"
import type { MyListFriendItemResponseDto } from "@modules/user/presentation/http/dto/response/social/my-list-friend.response.dto"

import { Icons } from "@/components/icons"
import FriendItem from "@/components/layouts/social/friends/friend-item"
import {
  ContentItemSVGWrapper,
  ContentItemText,
  ContentItemWrapper,
  FriendListContentContainer,
  FriendListContentWrapper,
  PostNowSideSectionContentContainer,
  PostNowSideSectionContentOverlay,
  PostNowSideSectionContentWrapper,
  PostNowSideSectionHeaderText,
  PostNowSideSectionHeaderTextWrapper,
  PostNowSideSectionHeaderWrapper,
  PostNowSideSectionWrapper,
  RootPageContainerLeftContainer,
  RootPageContainerLeftOverlay,
  RootPageContainerLeftWrapper,
  RootPageContentWrapper,
  RootPageLayoutContainer,
  RootPageLayoutOverlay,
  RootPageLayoutWrapper,
} from "@/components/layouts/social/friends/friends-page/style"

interface FriendsPageComponentsProps {
  friends: MyListFriendItemResponseDto[]
}

export default function FriendsPageComponent({
  friends,
}: FriendsPageComponentsProps) {
  return (
    <RootPageLayoutWrapper>
      <RootPageLayoutContainer>
        <RootPageContainerLeftWrapper>
          <RootPageContainerLeftContainer>
            <RootPageContainerLeftOverlay>
              <div>
                <div>
                  <PostNowSideSectionWrapper>
                    <PostNowSideSectionHeaderWrapper>
                      <PostNowSideSectionHeaderTextWrapper>
                        <PostNowSideSectionHeaderText>
                          Friend
                        </PostNowSideSectionHeaderText>
                      </PostNowSideSectionHeaderTextWrapper>
                    </PostNowSideSectionHeaderWrapper>

                    <PostNowSideSectionContentWrapper>
                      <PostNowSideSectionContentContainer>
                        <PostNowSideSectionContentOverlay>
                          <ContentItemWrapper href={"/social/friends"}>
                            <ContentItemSVGWrapper>
                              <Icons.listFriend />
                            </ContentItemSVGWrapper>

                            <ContentItemText>List Friends</ContentItemText>
                          </ContentItemWrapper>

                          <ContentItemWrapper href={"/social/friends/requests"}>
                            <ContentItemSVGWrapper>
                              <Icons.friendRequest />
                            </ContentItemSVGWrapper>

                            <ContentItemText>Friend Request</ContentItemText>
                          </ContentItemWrapper>
                        </PostNowSideSectionContentOverlay>
                      </PostNowSideSectionContentContainer>
                    </PostNowSideSectionContentWrapper>
                  </PostNowSideSectionWrapper>
                </div>
              </div>
            </RootPageContainerLeftOverlay>
          </RootPageContainerLeftContainer>
        </RootPageContainerLeftWrapper>

        <RootPageLayoutOverlay>
          <RootPageContentWrapper>
            <PostNowSideSectionHeaderWrapper>
              <PostNowSideSectionHeaderTextWrapper>
                Friends List
              </PostNowSideSectionHeaderTextWrapper>
            </PostNowSideSectionHeaderWrapper>

            <FriendListContentWrapper>
              <FriendListContentContainer>
                {friends.length === 0 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "14px",
                    }}
                  >
                    List friend is empty
                  </div>
                )}

                {friends.map(({ userId, username, isFriend, avatar }, index) => (
                  <FriendItem
                    key={index}
                    image={avatar}
                    name={username}
                    friendId={userId}
                    isFriend={isFriend}
                  />
                ))}
              </FriendListContentContainer>
            </FriendListContentWrapper>
          </RootPageContentWrapper>
        </RootPageLayoutOverlay>
      </RootPageLayoutContainer>
    </RootPageLayoutWrapper>
  )
}
