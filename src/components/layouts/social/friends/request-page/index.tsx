"use client"

import * as React from "react"
import type { ListRequestFriendItemResponseDto } from "@modules/user/presentation/http/dto/response/social/friend-requests.response.dto"

import { Icons } from "@/components/icons"
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
import FriendItem from "@/components/layouts/social/friends/request-friend-item"

interface RequestPageComponentProps {
  friends: ListRequestFriendItemResponseDto[]
}

export default function RequestPageComponent({
  friends,
}: RequestPageComponentProps) {
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
                List Friends Request
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
                    List request friend is empty
                  </div>
                )}

                {friends.map(({ sender }, index) => (
                  <FriendItem
                    key={index}
                    image={sender.avatar}
                    name={sender.username}
                    friendId={sender.senderId}
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
