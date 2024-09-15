import Link from "next/link"
import styled from "styled-components"

export const VideoPreviewPlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: hsl(var(--background));

  height: 100%;
`

export const VideoPreviewPlayerContainer = styled.div`
  position: relative !important;

  height: 100%;

  transition: height 0.295s ease-in-out;
`

export const VideoPlayerLayoutWrapper = styled.div``

export const VideoPlayerLayoutContainer = styled.div`
  position: absolute;
  inset: 0;

  overflow: hidden;
`

export const VideoRefWrapper = styled.div``

export const VideoPlayerDefaultPlayer = styled.div``

export const VideoPlayerOverlay = styled.div`
  position: absolute;
  inset: 0;
`

export const ShortStreamDescriptionWrapper = styled.article`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
`

export const ShortStreamDescriptionContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

export const ShortStreamDescriptionOverlay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  height: 100%;
`

export const StreamDescriptionCategoryWrapper = styled.div`
  display: inline-flex;

  min-width: 0;

  margin-left: 10px;
  margin-right: 10px;
`

export const StreamDescriptionImageWrapper = styled.div`
  flex-shrink: 0;

  width: 60px;
`

export const StreamDescriptionCategoryLink = styled(Link)``

export const StreamDescriptionImageContainer = styled.div`
  position: relative;

  width: 100%;

  overflow: hidden;
`

export const StreamDescriptionImagePlaceholder = styled.div`
  padding-bottom: 133.333%;
`

export const StreamDescriptionImage = styled.img`
  //position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  min-height: 100%;

  border-radius: 4px;

  object-fit: fill;
`

export const StreamDescriptionTitleWrapper = styled.div`
  max-width: 600px;

  margin-right: 10px;
  margin-left: 10px;
`

export const StreamDescriptionTitleContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

export const StreamDescriptionTitleOverlay = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  order: 2;

  width: 100%;
  min-width: 0;
`

export const StreamDescriptionTitleLayout = styled.div`
  margin-bottom: 3px;
`

export const StreamDescriptionTitle = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  color: hsl(var(--foreground-alt));

  font-size: 14px;
  //line-height: 1.2;
  font-weight: 600;

  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
`

export const StreamStatusWrapper = styled.div`
  display: flex;
  align-self: center;

  margin-left: 70px;
`

export const StreamStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  margin-right: 10px;
`

export const StreamStatusText = styled.span`
  position: relative;

  display: inline-block;

  color: #000;
  background-color: #c8c8d0;

  padding: 3px 8px;

  font-size: 55%;
  line-height: initial;
  font-weight: 600;

  text-align: center;
  text-transform: uppercase;

  white-space: nowrap;
  border-radius: 9999px;
`
