"use client"

import * as React from "react"
import { formatTimeToNow } from "@/utils/common"
import type { PostDetailsDto } from "@modules/user/presentation/http/dto/response/social/get-post-details.response.dto"
import type { GetPostReactionResponseDto } from "@modules/user/presentation/http/dto/response/social/get-post-reaction.response.dto"
import PostFooter from "src/components/layouts/social/details/post-footer"

import FollowUserPostBtn from "@/components/layouts/social/details/follow-user-post-btn"
import { ImageThumbnail } from "@/components/layouts/social/details/image-thumbnail"
import {
  ArticleContentDate,
  ArticleContentDescriptionWrapper,
  ArticleContentHeaderContainer,
  ArticleContentHeaderInfoWrapper,
  ArticleContentHeaderLayoutContainer,
  ArticleContentHeaderLayoutOverlay,
  ArticleContentHeaderLayoutWrapper,
  ArticleContentHeaderOverlay,
  ArticleContentHeaderUserAvatar,
  ArticleContentHeaderUserAvatarContainer,
  ArticleContentHeaderUserAvatarWrapper,
  ArticleContentHeaderUsernameContainer,
  ArticleContentHeaderUsernameText,
  ArticleContentHeaderUsernameWrapper,
  ArticleContentHeaderWrapper,
  ArticleContentLayoutWrapper,
  ArticlePageBodyWrapper,
} from "@/components/layouts/social/details/post-content/style"

interface PostContentProps {
  post: PostDetailsDto
  sortedReactions: GetPostReactionResponseDto[]
  commentsCount: number
  isUserPost: boolean
  isUserFollowed: boolean
  currentUserReactionType: string
}

export default function PostContent({
  post,
  sortedReactions,
  commentsCount,
  isUserPost,
  isUserFollowed,
  currentUserReactionType,
}: PostContentProps) {
  return (
    <ArticlePageBodyWrapper className="article-page__body">
      <ArticleContentHeaderLayoutWrapper>
        <ArticleContentHeaderLayoutContainer>
          <ArticleContentHeaderLayoutOverlay>
            <ArticleContentHeaderWrapper>
              <ArticleContentHeaderContainer>
                <ArticleContentHeaderOverlay>
                  <ArticleContentHeaderUserAvatarWrapper
                    href={`/social/profile/${post.user.username}`}
                  >
                    <ArticleContentHeaderUserAvatarContainer>
                      <ArticleContentHeaderUserAvatar
                        src={
                          post.user.avatar !== ""
                            ? post.user.avatar
                            : "/avatar/user-default-picture.png"
                        }
                      />
                    </ArticleContentHeaderUserAvatarContainer>
                  </ArticleContentHeaderUserAvatarWrapper>

                  <ArticleContentHeaderInfoWrapper>
                    <ArticleContentHeaderUsernameWrapper>
                      <ArticleContentHeaderUsernameContainer
                        href={`/social/profile/${post.user.username}`}
                      >
                        <ArticleContentHeaderUsernameText>
                          {post.user.username}
                        </ArticleContentHeaderUsernameText>
                      </ArticleContentHeaderUsernameContainer>
                    </ArticleContentHeaderUsernameWrapper>

                    <ArticleContentDate>
                      {formatTimeToNow(post.info.createdAt)}
                    </ArticleContentDate>
                  </ArticleContentHeaderInfoWrapper>

                  {!isUserPost && (
                    <FollowUserPostBtn
                      isUserFollowed={isUserFollowed}
                      destinationUserId={post.user.id}
                    />
                  )}
                </ArticleContentHeaderOverlay>
              </ArticleContentHeaderContainer>
            </ArticleContentHeaderWrapper>
          </ArticleContentHeaderLayoutOverlay>
        </ArticleContentHeaderLayoutContainer>
      </ArticleContentHeaderLayoutWrapper>

      <ArticleContentLayoutWrapper>
        <ArticleContentDescriptionWrapper>
          {post.info.content}
        </ArticleContentDescriptionWrapper>

        {post.info.images.length > 0 && (
          <ImageThumbnail slides={post.info.images} />
        )}
      </ArticleContentLayoutWrapper>

      <PostFooter
        postId={post.info.id}
        sortedReactions={sortedReactions}
        commentsCount={commentsCount}
        currentUserReactionType={currentUserReactionType}
      />
    </ArticlePageBodyWrapper>
  )
}
