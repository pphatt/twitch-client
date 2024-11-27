import Link from "next/link"
import styled from "styled-components"

export const LiveInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  flex-shrink: 1;
`

export const LiveInfoOverlay = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-bottom: 5px;
`

export const LiveDescriptionWrapper = styled.div`
  margin-top: 5px;
`

export const LiveDescriptionText = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;

  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-word;

  overflow: hidden;
`

export const StreamGameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const StreamGameContainer = styled.div`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;

  margin-right: 10px;
`

export const StreamGameLink = styled(Link)`
  color: hsl(var(--color-twitch-orange-11));

  text-decoration: none;

  &:hover {
    color: hsl(var(--color-twitch-orange-12));

    text-decoration: underline;
  }
`

export const StreamGame = styled.span`
  font-size: 14px;
`

export const StreamGameTagsWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 5px;
`

export const StreamGameTagsContainer = styled.div`
  display: inline-block;
`

export const StreamGameTagWrapper = styled.div`
  display: inline-block;

  margin-right: 5px;
  margin-bottom: 5px;

  font-size: 12px;

  vertical-align: middle;
`

export const StreamGameTagLink = styled.div`
  display: inline-block;

  color: rgb(168 177 184);
  //background-color: rgb(23 28 30);

  max-width: 100%;
  height: 20px;

  border: 2px solid transparent;
  border-radius: 9999px;

  font-weight: 600;

  //&:hover {
  //  color: rgb(209 213 219);
  //  background-color: rgb(34 41 44);
  //}
`

export const StreamGameTagContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 0 8px;

  font-size: 12px;
`

export const StreamGameTagOverlay = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:after {
    content: "";
    display: block;
  }
`
