"use client"

import * as React from "react"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"
import type { GetUserPostsResponseDto } from "@modules/user/presentation/http/dto/response/social/get-user-posts.response.dto"
import type { GetSpecificUserByNameResponseDto } from "@modules/user/presentation/http/dto/response/user/get-specific-user-by-name.response.dto"
import { useInfiniteQuery } from "@tanstack/react-query"

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver.hooks"
import { Icons } from "@/components/icons"
import {
  ArticleCardWrapper,
  ArticleContentWrapper,
  ArticleImage,
  ArticleImageWrapper,
  ArticleTitleText,
  ArticleTitleWrapper,
  LeftImageContainer,
  LeftImageWrapper,
} from "@/components/layouts/social/home/post/style"
import PostFooter from "@/components/layouts/social/profile/post-footer"
import PostHeader from "@/components/layouts/social/profile/post-header"
import styles from "@/components/layouts/social/profile/profile-page/style.module.scss"
import ProfileTopbar from "@/components/layouts/social/profile/profile-topbar"
import RightSection from "@/components/layouts/social/profile/right-section"

interface ProfilePageComponentProps {
  isUserProfile: boolean
  friendStatus: string
  user: GetSpecificUserByNameResponseDto
  postsInfo: {
    posts: GetUserPostsResponseDto[]
    totalPosts: number
    totalPage: number
  }
  isUserFollowed: boolean
  isTheSameUser: boolean
}

export default function ProfilePageComponent({
  isUserProfile,
  friendStatus,
  user,
  postsInfo,
  isUserFollowed,
  isTheSameUser,
}: ProfilePageComponentProps) {
  const { posts } = postsInfo

  const [totalPosts, setTotalPost] = React.useState(postsInfo.totalPosts)

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
      queryKey: ["latest-posts"],
      queryFn: async ({ pageParam = 1 }) => {
        const { data: postsListData } = await Social.getUserPosts(
          user.username,
          `page=${pageParam}&limit=10&orderBy=createdAt&order=desc`
        )

        setTotalPost(postsListData.data.totalPosts)

        return postsListData.data.posts
      },
      initialData: () => {
        return {
          pages: [posts],
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

  const postsData = React.useMemo(() => {
    return data?.pages.flatMap((posts) => posts)
  }, [data])

  React.useEffect(() => {
    if (
      middleRowEntry?.isIntersecting &&
      hasNextPage &&
      !isFetchingNextPage &&
      postsData.length < totalPosts
    ) {
      void fetchNextPage()
      return
    }

    if (
      lastRowEntry?.isIntersecting &&
      hasNextPage &&
      !isFetchingNextPage &&
      postsData.length < totalPosts
    ) {
      void fetchNextPage()
      return
    }
  }, [
    middleRowEntry,
    lastRowEntry,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    postsData.length,
    totalPosts,
  ])

  return (
    <div className={styles["root-page-wrapper"]}>
      <ProfileTopbar
        username={user.username}
        displayName={user.displayName}
        avatarUrl={user.image.url}
        bio={user.bio}
        numberOfFollowers={user.numberOfFollowers}
        numberOfFollowings={user.numberOfFollowings}
        numberOfPosts={totalPosts}
        userId={user.id}
        isUserFollowed={isUserFollowed}
        isTheSameUser={isTheSameUser}
        friendStatus={friendStatus}
      />

      <div className={styles["root-page-container"]}>
        <div className={styles["page-content-wrapper"]}>
          <div className={styles["page-content-container"]}>
            <div className={styles["page-content-overlay"]}>
              <div className={styles["page-content-header-wrapper"]}>
                <div className={styles["page-content-header-container"]}>
                  <div className={styles["page-content-header-overlay"]}>
                    <div
                      className={styles["page-content-inner-header-wrapper"]}
                    >
                      <div
                        className={
                          styles["page-content-inner-header-container"]
                        }
                      >
                        <div
                          className={
                            styles["page-content-inner-header-overlay"]
                          }
                        >
                          <div className={styles["header-item-wrapper"]}>
                            <span>Posts</span>
                            <span />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles["posts-list-layout-wrapper"]}>
                {postsData.length === 0 && (
                  <div className={styles["empty-posts-list-wrapper"]}>
                    <p className={styles["empty-posts-list-text"]}>
                      {isUserProfile
                        ? "You haven't posted anything~"
                        : "There's nothing here..."}
                    </p>
                  </div>
                )}

                {postsData.length > 0 && (
                  <>
                    <div className={styles["posts-list-layout-container"]}>
                      {postsData.map(({ user: postUser, info }, index) => (
                        <div
                          className={styles["post-card-outer-wrapper"]}
                          key={index}
                        >
                          <div className={styles["post-card-wrapper"]}>
                            <div
                              ref={
                                index === postsData.length - 5
                                  ? middleRowRef
                                  : index === postsData.length - 1
                                    ? lastRowRef
                                    : null
                              }
                            />

                            <PostHeader
                              postId={info.id}
                              username={postUser.username}
                              avatarUrl={postUser.avatar}
                              createdAt={info.createdAt}
                              isUserProfile={isUserProfile}
                              validateData={refetch}
                            />

                            <ArticleCardWrapper
                              href={`/social/post/${info.id}`}
                            >
                              <ArticleTitleWrapper>
                                <ArticleTitleText>
                                  {info.content}
                                </ArticleTitleText>
                              </ArticleTitleWrapper>

                              <ArticleContentWrapper className="article-card-image__preview">
                                {info.images.length <= 3 &&
                                  info.images.map(({ url }, index) => (
                                    <ArticleImageWrapper
                                      $count={info.images.length}
                                      key={index}
                                    >
                                      <ArticleImage
                                        loading={"lazy"}
                                        decoding={"async"}
                                        src={url}
                                      />
                                    </ArticleImageWrapper>
                                  ))}

                                {info.images.length > 3 &&
                                  info.images
                                    .slice(0, 3)
                                    .map(({ url }, index) => (
                                      <ArticleImageWrapper
                                        $count={info.images.length}
                                        key={index}
                                      >
                                        {index === 2 && (
                                          <LeftImageWrapper>
                                            <LeftImageContainer>
                                              <Icons.images />
                                              <span>
                                                +{info.images.length - 3}
                                              </span>
                                            </LeftImageContainer>
                                          </LeftImageWrapper>
                                        )}

                                        <ArticleImage
                                          loading={"lazy"}
                                          decoding={"async"}
                                          src={url}
                                        />
                                      </ArticleImageWrapper>
                                    ))}
                              </ArticleContentWrapper>
                            </ArticleCardWrapper>

                            <PostFooter
                              postId={info.id}
                              commentCount={info.commentCount}
                              reactions={info.reactions}
                              reactionCount={info.reactionCount}
                              currentReaction={info.currentReaction}
                              validateData={refetch}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className={styles["posts-list-loading-wrapper"]}>
                      {isFetchingNextPage ? (
                        <Icons.spinner
                          className={styles["icon"]}
                          aria-hidden="true"
                        />
                      ) : (
                        <div>That&apos;s all~</div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <RightSection userId={user.id} />
      </div>
    </div>
  )
}
