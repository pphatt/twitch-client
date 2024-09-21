import styled, { css } from "styled-components"

const shareCss = css`
  margin-top: 20px;
`

export const TermLayoutWrapper = styled.div`
  ${shareCss}
`

export const TermText = styled.p`
  color: hsl(var(--foreground-alt-2));

  font-size: 12px;

  a {
    color: hsl(var(--color-twitch-orange-11));

    text-decoration: underline;
  }
`

export const SubmitLayoutWrapper = styled.div`
  ${shareCss}
`
