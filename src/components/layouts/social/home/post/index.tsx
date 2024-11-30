import * as React from "react"

import { LikeBtn } from "@/components/layouts/social/components/like-btn"
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
  FollowButton,
  FollowButtonWrapper,
  HashTagsWrapper,
  HashTagText,
  HashTagWrapper,
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

export default function Post() {
  return (
    <PostLayoutWrapper>
      <PostHeaderWrapper>
        <PostHeaderContainer>
          <PostHeaderOverlay>
            <AvatarImageWrapper href={"/social/article/1"}>
              <AvatarImageContainer>
                <AvatarImageComponent src={"/avatar/kei-avatar.png"} />
              </AvatarImageContainer>
            </AvatarImageWrapper>

            <UserCardInfoWrapper>
              <UserCardNameWrapper>
                <UserCardNameContainer href={"/social/home"}>
                  <UserCardTitleName title="Kei">Kei</UserCardTitleName>
                </UserCardNameContainer>
              </UserCardNameWrapper>

              <ArticleCardTime>19/03 • 5:20 PM</ArticleCardTime>
            </UserCardInfoWrapper>

            <FollowButtonWrapper>
              <FollowButton>Follow</FollowButton>
            </FollowButtonWrapper>
          </PostHeaderOverlay>
        </PostHeaderContainer>
      </PostHeaderWrapper>

      <ArticleCardWrapper href={"/social/article/1"}>
        <ArticleTitleWrapper>
          <ArticleTitleText>Road to Challenger</ArticleTitleText>
        </ArticleTitleWrapper>

        <HashTagsWrapper>
          <HashTagWrapper href={"/social/tags/anime"}>
            <HashTagText>#Anime</HashTagText>
          </HashTagWrapper>

          <HashTagWrapper href={"/social/tags/something"}>
            <HashTagText>#something</HashTagText>
          </HashTagWrapper>
        </HashTagsWrapper>

        <ArticleContentWrapper className="article-card-image__preview">
          <ArticleImageWrapper $count={2}>
            <ArticleImage src={"/avatar/xull-avatar.png"} />
          </ArticleImageWrapper>

          <ArticleImageWrapper $count={2}>
            <ArticleImage src={"/avatar/xull-avatar.png"} />
          </ArticleImageWrapper>
        </ArticleContentWrapper>
      </ArticleCardWrapper>

      <ReactionRowWrapper>
        <LikeBtn likeCount={123} initialLike={true}>
          <span>123 likes</span>
        </LikeBtn>
      </ReactionRowWrapper>
    </PostLayoutWrapper>
  )
}
