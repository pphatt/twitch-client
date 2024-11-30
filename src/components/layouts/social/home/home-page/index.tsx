"use client"

import * as React from "react"

import { Icons } from "@/components/icons"
import FriendList from "@/components/layouts/social/components/friend-list"
import {
  ContentItemSVGWrapper,
  ContentItemText,
  ContentItemWrapper,
  PostNowSideSectionContentContainer,
  PostNowSideSectionContentOverlay,
  PostNowSideSectionContentWrapper,
  PostNowSideSectionHeaderText,
  PostNowSideSectionHeaderTextWrapper,
  PostNowSideSectionHeaderWrapper,
  PostNowSideSectionWrapper,
  RootPageContainerRightContainer,
  RootPageContainerRightOverlay,
  RootPageContainerRightWrapper,
  RootPageContentWrapper,
  RootPageLayoutContainer,
  RootPageLayoutOverlay,
  RootPageLayoutWrapper,
} from "@/components/layouts/social/home/home-page/style"
import Post from "src/components/layouts/social/home/post"

export default function HomePageComponent() {
  return (
    <RootPageLayoutWrapper>
      <RootPageLayoutContainer>
        <RootPageLayoutOverlay>
          <RootPageContentWrapper>
            <div
              style={{
                position: "relative",
              }}
              className="article-list"
            >
              <Post />

              <Post />
            </div>
          </RootPageContentWrapper>
        </RootPageLayoutOverlay>

        <RootPageContainerRightWrapper>
          <RootPageContainerRightContainer>
            <RootPageContainerRightOverlay>
              <div>
                <div>
                  <PostNowSideSectionWrapper>
                    <PostNowSideSectionHeaderWrapper>
                      <PostNowSideSectionHeaderTextWrapper>
                        <PostNowSideSectionHeaderText>
                          Post now~
                        </PostNowSideSectionHeaderText>
                      </PostNowSideSectionHeaderTextWrapper>
                    </PostNowSideSectionHeaderWrapper>

                    <PostNowSideSectionContentWrapper>
                      <PostNowSideSectionContentContainer>
                        <PostNowSideSectionContentOverlay>
                          <ContentItemWrapper href={"/social/create-post"}>
                            <ContentItemSVGWrapper>
                              <Icons.postImage />
                            </ContentItemSVGWrapper>

                            <ContentItemText>Create Post</ContentItemText>
                          </ContentItemWrapper>
                        </PostNowSideSectionContentOverlay>
                      </PostNowSideSectionContentContainer>
                    </PostNowSideSectionContentWrapper>
                  </PostNowSideSectionWrapper>
                </div>

                <div>
                  <FriendList />
                </div>
              </div>
            </RootPageContainerRightOverlay>
          </RootPageContainerRightContainer>
        </RootPageContainerRightWrapper>
      </RootPageLayoutContainer>
    </RootPageLayoutWrapper>
  )
}
