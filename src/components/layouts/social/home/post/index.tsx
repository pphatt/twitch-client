import * as React from "react"
import type { PostDto } from "@modules/user/presentation/http/dto/response/social/post.dto"
import { format, parseISO } from "date-fns"

import { Icons } from "@/components/icons"
import {
  ArticleCardTime,
  ArticleCardWrapper,
  ArticleContentWrapper,
  ArticleImage,
  ArticleImageWrapper,
  ArticleTitleText,
  ArticleTitleWrapper,
  AvatarImageComponent,
  AvatarImageContainer,
  AvatarImageWrapper,
  LeftImageContainer,
  LeftImageWrapper,
  PostHeaderContainer,
  PostHeaderOverlay,
  PostHeaderWrapper,
  PostLayoutWrapper,
  ReactionRowWrapper,
  UserCardInfoWrapper,
  UserCardNameContainer,
  UserCardNameWrapper,
  UserCardTitleName,
} from "@/components/layouts/social/home/post/style"
import PostFooter from "@/components/layouts/social/profile/post-footer"

interface PostProps {
  post: PostDto
  refetch: () => void
}

export default function Post({ post, refetch }: PostProps) {
  const date = parseISO(post.info.createdAt.toString())

  return (
    <PostLayoutWrapper>
      <PostHeaderWrapper>
        <PostHeaderContainer>
          <PostHeaderOverlay>
            <AvatarImageWrapper href={`/social/profile/${post.user.username}`}>
              <AvatarImageContainer>
                <AvatarImageComponent
                  src={
                    post.user.avatar !== ""
                      ? post.user.avatar
                      : "/avatar/user-default-picture.png"
                  }
                />
              </AvatarImageContainer>
            </AvatarImageWrapper>

            <UserCardInfoWrapper>
              <UserCardNameWrapper>
                <UserCardNameContainer
                  href={`/social/profile/${post.user.username}`}
                >
                  <UserCardTitleName title={post.user.username}>
                    {post.user.username}
                  </UserCardTitleName>
                </UserCardNameContainer>
              </UserCardNameWrapper>

              <ArticleCardTime>
                {`${format(date, "dd/MM")} • ${format(date, "h:mm a")}`}
              </ArticleCardTime>
            </UserCardInfoWrapper>
          </PostHeaderOverlay>
        </PostHeaderContainer>
      </PostHeaderWrapper>

      <ArticleCardWrapper href={`/social/post/${post.info.id}`}>
        <ArticleTitleWrapper>
          <ArticleTitleText>{post.info.content}</ArticleTitleText>
        </ArticleTitleWrapper>

        <ArticleContentWrapper className="post-card-image__preview">
          {post.info.images.length <= 3 &&
            post.info.images.map((url, index) => (
              <ArticleImageWrapper $count={post.info.images.length} key={index}>
                <ArticleImage loading={"lazy"} decoding={"async"} src={url} />
              </ArticleImageWrapper>
            ))}

          {post.info.images.length > 3 &&
            post.info.images.slice(0, 3).map((url, index) => (
              <ArticleImageWrapper $count={post.info.images.length} key={index}>
                {index === 2 && (
                  <LeftImageWrapper>
                    <LeftImageContainer>
                      <Icons.images />
                      <span>+{post.info.images.length - 3}</span>
                    </LeftImageContainer>
                  </LeftImageWrapper>
                )}

                <ArticleImage loading={"lazy"} decoding={"async"} src={url} />
              </ArticleImageWrapper>
            ))}
        </ArticleContentWrapper>
      </ArticleCardWrapper>

      <ReactionRowWrapper>
        <PostFooter
          postId={post.info.id}
          commentCount={post.info.commentCount}
          reactions={post.info.reactions}
          reactionCount={post.info.reactionCount}
          currentReaction={post.info.currentReaction}
          validateData={refetch}
        />
      </ReactionRowWrapper>
    </PostLayoutWrapper>
  )
}
