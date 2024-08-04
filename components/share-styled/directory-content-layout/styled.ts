import styled, { css } from "styled-components"

const shareCss = css`
  position: relative;
`

export const ContentSection = styled.div`
  ${shareCss}
`

export const ContentSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 10px;

  visibility: visible;
`

export const ContentSectionHeaderText = styled.h2`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 600;

  a {
    color: hsl(var(--color-twitch-orange-11));

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: hsl(var(--color-twitch-orange-11));
    }
  }
`

export const ContentListWrapper = styled.div`
  ${shareCss}
`

export const ContentListContainer = styled.div`
  display: flex;

  min-width: 100%;

  margin: 0 -5px;

  list-style: none;
`
