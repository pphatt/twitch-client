import Link from "next/link"
import styled from "styled-components"

export const ArticlePageBodyWrapper = styled.div`
  background-color: #1b1d2a;

  border-radius: 0;
`

export const ArticleTitleWrapper = styled.div`
  color: rgba(255, 255, 255, 0.85);

  padding: 16px 24px 0;

  font-weight: 400;
`

export const ArticleTitleText = styled.h1`
  display: inline;

  margin: 0;

  font-size: 22px;
  font-weight: bold;
  line-height: 26px;

  word-wrap: break-word;
  word-break: break-word;
`

export const ArticleContentHeaderLayoutWrapper = styled.div`
  height: 56px;

  margin-top: 16px;
  margin-bottom: 0;
`

export const ArticleContentHeaderLayoutContainer = styled.div`
  background-color: #1b1d2a;

  width: 100%;

  border-radius: 16px 16px 0 0;
`

export const ArticleContentHeaderLayoutOverlay = styled.div`
  display: flex;
  flex-direction: column;

  height: 48px;

  border-bottom: none;

  padding: 0 24px;
`

export const ArticleContentHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`

export const ArticleContentHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  max-width: 100%;

  overflow: visible;
`

export const ArticleContentHeaderOverlay = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  max-width: 100%;

  cursor: auto;
`

export const ArticleContentHeaderUserAvatarWrapper = styled(Link)`
  display: inline-flex;
  align-items: center;

  color: rgba(255, 255, 255, 0.45);
`

export const ArticleContentHeaderUserAvatarContainer = styled.div`
  position: relative;

  display: inline-block;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
`

export const ArticleContentHeaderUserAvatar = styled.img`
  background-color: #1b1d2a;

  width: 100%;
  height: 100%;

  border-radius: 50%;

  vertical-align: top;

  box-shadow: inset 0 0 0 1px #343746;
`

export const ArticleContentHeaderInfoWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;

  margin-left: 12px;

  overflow: hidden;
`

export const ArticleContentDate = styled.p`
  color: rgba(255, 255, 255, 0.45);

  margin-top: 4px;

  font-size: 12px;
  line-height: 16px;
`

export const ArticleContentHeaderUsernameWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ArticleContentHeaderUsernameContainer = styled(Link)`
  display: inline-flex;
  align-items: center;

  color: rgba(255, 255, 255, 0.45);

  max-width: 100%;

  overflow: hidden;
  white-space: nowrap;
`

export const ArticleContentHeaderUsernameText = styled.span`
  color: rgba(255, 255, 255, 0.85);

  font-size: 16px;
  font-weight: bold;
  line-height: 20px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ArticleContentLayoutWrapper = styled.div`
  padding: 0 24px;
  margin-top: 16px;
`

export const ArticleContentDescriptionWrapper = styled.p`
  color: rgba(255, 255, 255, 0.85);

  margin-top: 16px;
  margin-bottom: 24px;

  font-size: 14px;

  white-space: pre-wrap;

  word-wrap: break-word;
  word-break: break-word;
`

export const HashTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
