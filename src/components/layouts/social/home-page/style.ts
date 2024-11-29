import Link from "next/link"
import styled from "styled-components"

export const RootPageLayoutWrapper = styled.div`
  //position: relative;
  //top: 80px;

  position: relative;

  //flex-grow: 1;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  //justify-content: center;
  align-items: center;

  width: 100%;
  min-width: 768px;
  height: 100%;
  //min-height: calc(100% - 80px);

  overflow-y: scroll;

  transition:
    padding-right,
    padding-left 0.3s ease;
`

export const RootPageLayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  max-width: 1208px;
  width: 100%;

  padding: 0 0;
  margin-top: 15px;
`

export const RootPageLayoutOverlay = styled.div`
  flex: 1;

  background: #1b1d2a;

  max-width: 848px;

  border-radius: 16px;
`

export const RootPageContentWrapper = styled.div`
  width: 100%;

  padding-bottom: 40px;
`

export const RootPageContentContainer = styled.div`
  background: #1b1d2a;

  border-radius: 16px 16px 0 0;
`

export const RootPageContainerRightWrapper = styled.div`
  position: sticky;
  top: 15px;

  flex-shrink: 0;

  width: 336px;

  margin-left: 24px;
`

export const RootPageContainerRightContainer = styled.div`
  width: 100%;
`

export const RootPageContainerRightOverlay = styled.div`
  height: 500px;

  & > div {
    width: 336px;

    padding-bottom: 80px;
  }
`

export const PostNowSideSectionWrapper = styled.div`
  background-color: #1b1d2a;

  border-radius: 16px;

  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;
`

export const PostNowSideSectionHeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 24px;

  padding: 0 16px;
  margin-bottom: 12px;
`

export const PostNowSideSectionHeaderTextWrapper = styled.h2`
  flex-grow: 1;

  color: rgba(255, 255, 255, 0.85);

  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
`

export const PostNowSideSectionHeaderText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  max-height: 24px;

  padding-right: 12px;

  font-size: 16px;
  line-height: 24px;

  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const PostNowSideSectionContentWrapper = styled.div`
  position: relative;

  padding: 0 4px;
`

export const PostNowSideSectionContentContainer = styled.div`
  display: flex;
  align-items: stretch;

  width: 100%;

  //padding: 0 12px;
`

export const PostNowSideSectionContentOverlay = styled.div`
  flex: 1;

  cursor: pointer;
`

export const ContentItemWrapper = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: auto;
  height: auto;

  border-radius: 12px;

  padding: 8px 12px;
  margin: 0 4px;

  &:hover {
    background: #343746;
  }
`

export const ContentItemSVGWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(61, 184, 245, 0.2);

  width: 48px;
  height: 48px;

  border-radius: 50%;

  font-size: 22px;

  svg {
    display: inherit;

    width: 1em;
    height: 1em;

    fill: #54d0f8;

    line-height: 1;

    overflow: hidden;
  }
`

export const ContentItemText = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  margin-left: 1rem;

  font-size: 1rem;
  line-height: 20px;
  font-weight: 700;

  text-align: center;

  overflow: hidden;

  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-word;
`

export const RecommendFriendContentWrapper = styled.div`
  position: relative;

  padding: 0 4px;
`

export const RecommendFriendContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
