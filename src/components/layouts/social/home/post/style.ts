import Link from "next/link"
import styled, { css } from "styled-components"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export const PostLayoutWrapper = styled.div`
  //background-color: #1b1d2a;

  border-radius: unset;
  border-bottom: 1px solid #0c0f1d;

  padding: 24px;
  margin-bottom: 0;
`

export const PostHeaderWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PostHeaderContainer = styled.div`
  display: flex;
  align-items: center;

  max-width: 100%;
  width: 100%;
`

export const PostHeaderOverlay = styled.div`
  display: flex;
  align-items: center;

  max-width: 100%;
  width: 100%;

  cursor: pointer;
`

export const AvatarImageWrapper = styled(Link)`
  display: inline-flex;
  align-items: center;

  color: rgba(255, 255, 255, 0.45);
`

export const AvatarImageContainer = styled(Avatar)`
  position: relative;

  display: inline-block;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
`

export const AvatarImageComponent = styled(AvatarImage)`
  background-color: #1b1d2a;

  width: 100%;
  height: 100%;

  border-radius: 50%;

  vertical-align: top;

  box-shadow: inset 0 0 0 1px #343746;
`

export const UserCardInfoWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;

  margin-left: 12px;

  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
`

export const UserCardNameWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const UserCardNameContainer = styled(Link)`
  display: inline-flex;
  align-items: center;

  color: rgba(255, 255, 255, 0.45);

  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
`

export const UserCardTitleName = styled.span`
  color: rgba(255, 255, 255, 0.85);

  font-size: 16px;
  font-weight: bold;
  line-height: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const ArticleCardTime = styled.p`
  color: rgba(255, 255, 255, 0.45);

  margin-top: 4px;

  font-size: 12px;
  line-height: 16px;
`

export const FollowButtonWrapper = styled.div`
  margin-left: 8px;
`

export const FollowButton = styled(Button)`
  flex-shrink: 0;

  color: #fff;
  background-color: hsl(var(--color-twitch-orange-11));

  width: auto;
  min-width: 88px;
  height: 30px;

  border-radius: 15px;

  padding: 0 24px;

  font-size: 12px;
  line-height: 30px;

  cursor: pointer;

  transition-duration: 0.2s;
  transition-property: background-color, color;

  &:not([disabled]):hover {
    background-color: hsl(var(--color-twitch-orange-12));
  }
`

export const ArticleCardWrapper = styled(Link)`
  display: block;
`

export const ArticleTitleWrapper = styled.h3`
  display: -webkit-box;

  max-height: 72px;

  margin-top: 8px;

  line-height: 24px;

  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-word;
`

export const ArticleTitleText = styled.span`
  color: rgba(255, 255, 255, 0.85);

  font-size: 16px;
  font-weight: bold;

  vertical-align: top;

  word-wrap: break-word;
  word-break: break-word;
`

export const ArticleContentWrapper = styled.div`
  margin-top: 5px;
`

export const ArticleImageWrapper = styled.div<{
  $count: number
}>`
  position: relative;

  display: inline-block;

  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;

  width: 32%;

  border-radius: 12px;

  cursor: pointer;

  &:nth-of-type(n + 2) {
    margin-left: 8px;
  }

  &:before {
    content: "";

    display: block;

    padding-top: 100%;
  }

  &:after {
    content: "";

    position: absolute;
    inset: 0;

    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;

    pointer-events: none;

    z-index: 1;
  }

  ${({ $count }) =>
    $count === 1 &&
    css`
      width: calc(100%);

      background-size: 70% !important;
    `}

  ${({ $count }) =>
    $count === 2 &&
    css`
      width: calc(49%);

      background-size: 70% !important;
    `}

    ${({ $count }) =>
    $count >= 3 &&
    css`
      background-size: 70% !important;
    `}
`

export const ArticleContentFooterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-top: 16px;
`

export const ArticleContentFooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;

  width: 100%;
  height: 24px;
`

export const ArticleViewCountWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;

  width: 84px;

  svg {
    color: rgba(255, 255, 255, 0.25);

    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;

    color: rgba(255, 255, 255, 0.45);

    margin-left: 8px;

    font-size: 12px;
    line-height: 16px;
  }
`

export const ArticleCommentCountWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;

  width: 84px;

  margin-left: 8px;
`

export const ArticleCommentCountContainer = styled(Link)`
  position: relative;

  display: inline-flex;
  align-items: center;

  svg {
    color: rgba(255, 255, 255, 0.25);

    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;

    color: rgba(255, 255, 255, 0.45);

    margin-left: 8px;

    font-size: 12px;
    line-height: 16px;
  }
`

export const LeftImageWrapper = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;

  display: flex;
  align-items: center;
  gap: 0 4px;

  z-index: 10;
`

export const LeftImageContainer = styled.span`
  display: flex;
  align-items: center;

  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);

  height: 14px;

  border-radius: 12px;

  padding: 0 8px;
  margin-left: 4px;

  font-size: 12px;

  svg {
    color: #fff;

    width: 12px;
    height: 12px;

    margin-right: 3px;
  }
`

export const ArticleImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  border-radius: 12px;

  object-fit: cover;
  object-position: center;
`

export const HashTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 8px;
  margin-bottom: 8px;
`

export const HashTagWrapper = styled(Link)`
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;

  color: #556de5;

  margin-right: 16px;

  cursor: pointer;

  &:hover {
    span {
      color: #9aa6ff;

      text-decoration: underline;
    }
  }
`

export const HashTagText = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  max-height: 20px;

  font-size: 14px;
  line-height: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`

export const ReactionRowWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-top: 16px;
`
