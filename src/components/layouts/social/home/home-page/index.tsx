"use client"

import * as React from "react"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"
import type { PostDto } from "@modules/user/presentation/http/dto/response/social/post.dto"
import { useInfiniteQuery } from "@tanstack/react-query"
import Post from "src/components/layouts/social/home/post"

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver.hooks"
import { Icons } from "@/components/icons"
import FriendList from "@/components/layouts/social/components/friend-list"
import EmptyPostScreen from "@/components/layouts/social/details/empty-post-screen"
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

interface HomePageComponentProps {
  feed: PostDto[]
  accessToken: string
}

export default function HomePageComponent({
  feed,
  accessToken,
}: HomePageComponentProps) {
  const middleRow = React.useRef<HTMLDivElement>(null)
  const { ref: middleRowRef, entry: middleRowEntry } = useIntersectionObserver({
    root: middleRow.current,
    threshold: 1,
  })

  const lastRow = React.useRef<HTMLDivElement>(null)
  const { ref: lastRowRef, entry: lastRowEntry } = useIntersectionObserver({
    root: lastRow.current,
    threshold: 1,
  })

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ["latest-feed"],
      queryFn: async ({ pageParam = 1 }) => {
        const { data: feedData } = await Social.getMyFeed(
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
          `page=${pageParam}&limit=10&orderBy=createdAt&order=desc`
        )

        return feedData.data.posts
      },
      initialData: () => {
        return {
          pages: [feed],
          pageParams: [1],
        }
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
        return lastPage.length > 0 ? pages.length + 1 : undefined
      },
      staleTime: 1000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    })

  const feedData = React.useMemo(() => {
    return data?.pages.flatMap((posts) => posts)
  }, [data])

  React.useEffect(() => {
    if (middleRowEntry?.isIntersecting && hasNextPage && !isFetchingNextPage) {
      void fetchNextPage()
      return
    }

    if (lastRowEntry?.isIntersecting && hasNextPage && !isFetchingNextPage) {
      void fetchNextPage()
      return
    }
  }, [
    middleRowEntry,
    lastRowEntry,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  ])

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
              {feedData.length === 0 && <EmptyPostScreen />}

              {feedData.length > 0 &&
                feedData.map((post, index) => (
                  <div key={index}>
                    <div
                      ref={
                        index === feedData.length - 5
                          ? middleRowRef
                          : index === feedData.length - 1
                            ? lastRowRef
                            : null
                      }
                    />
                    <Post post={post} refetch={refetch} />
                  </div>
                ))}
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
