"use client"

import * as React from "react"

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
  ArticleTitleText,
  ArticleTitleWrapper,
  HashTagsWrapper,
  HashTagText,
  HashTagWrapper,
} from "@/components/layouts/social/details/article-content/style"
import ArticleFooter from "@/components/layouts/social/details/article-foorer"
import { ImageThumbnail } from "@/components/layouts/social/details/image-thumbnail"

export default function PostContent() {
  return (
    <ArticlePageBodyWrapper className="article-page__body">
      <ArticleTitleWrapper>
        <ArticleTitleText>NextJs Auth Flow with middleware</ArticleTitleText>
      </ArticleTitleWrapper>

      <ArticleContentHeaderLayoutWrapper>
        <ArticleContentHeaderLayoutContainer>
          <ArticleContentHeaderLayoutOverlay>
            <ArticleContentHeaderWrapper>
              <ArticleContentHeaderContainer>
                <ArticleContentHeaderOverlay>
                  <ArticleContentHeaderUserAvatarWrapper href={"/social"}>
                    <ArticleContentHeaderUserAvatarContainer>
                      <ArticleContentHeaderUserAvatar
                        src={
                          "https://s120-ava-talk.zadn.vn/d/7/5/d/4/120/aae4fe2e565d553d5f325f2aa0ef2cf1.jpg"
                        }
                      />
                    </ArticleContentHeaderUserAvatarContainer>
                  </ArticleContentHeaderUserAvatarWrapper>

                  <ArticleContentHeaderInfoWrapper>
                    <ArticleContentHeaderUsernameWrapper>
                      <ArticleContentHeaderUsernameContainer href={"/social"}>
                        <ArticleContentHeaderUsernameText>
                          Đặng Viễn Hào
                        </ArticleContentHeaderUsernameText>
                      </ArticleContentHeaderUsernameContainer>
                    </ArticleContentHeaderUsernameWrapper>

                    <ArticleContentDate>29/11</ArticleContentDate>
                  </ArticleContentHeaderInfoWrapper>
                </ArticleContentHeaderOverlay>
              </ArticleContentHeaderContainer>
            </ArticleContentHeaderWrapper>
          </ArticleContentHeaderLayoutOverlay>
        </ArticleContentHeaderLayoutContainer>
      </ArticleContentHeaderLayoutWrapper>

      <ArticleContentLayoutWrapper>
        <ArticleContentDescriptionWrapper>
          Just update new profile picture while travel to Australia.
        </ArticleContentDescriptionWrapper>

        <HashTagsWrapper>
          <HashTagWrapper href={"/social/tags/anime"}>
            <HashTagText>#Programing</HashTagText>
          </HashTagWrapper>

          <HashTagWrapper href={"/social/tags/something"}>
            <HashTagText>#Myself</HashTagText>
          </HashTagWrapper>
        </HashTagsWrapper>

        <ImageThumbnail
          slides={[
            { src: "/article-image/auth-flow.png" },
            {
              src: "https://s120-ava-talk.zadn.vn/d/7/5/d/4/120/aae4fe2e565d553d5f325f2aa0ef2cf1.jpg",
            },
            {
              src: "https://res.cloudinary.com/di6qiyj4o/image/upload/v1732858709/image/user/avatar/2ba90741-7164-46e5-a9bf-2df4d21471dd/hfwrryuxyudij9wpeuy9.png",
            },
            { src: "/article-image/auth-flow.png" },
            { src: "/article-image/auth-flow.png" },
            { src: "/article-image/auth-flow.png" },
            { src: "/article-image/auth-flow.png" },
          ]}
        />
      </ArticleContentLayoutWrapper>

      <ArticleFooter />
    </ArticlePageBodyWrapper>
  )
}
