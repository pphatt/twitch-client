import Link from "next/link"
import styled, { css, keyframes } from "styled-components"

export const MainNavLayoutWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  margin-right: 16px;
`

export const HeaderLogoWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  padding: 10px 0;
  margin-right: 40px;

  cursor: pointer;
`

export const HeaderLogoLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  svg {
    align-self: center;

    width: 40px;
    height: 40px;
  }
`

export const HeaderLogoText = styled.span`
  display: inline-block;

  color: var(--hyl-default-color-brand-p5);

  font-size: 21px;
  line-height: 1.5;
  font-weight: 700;
`

export const HeaderTabWrapper = styled.div`
  display: flex;
`

const fadeInKeyFrame = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

export const HeaderText = styled.p`
  color: rgba(255, 255, 255, 0.45);

  font-size: 16px;
  line-height: 24px;
  font-weight: 700;

  transition: all 0.3s ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 0.85);
  }
`

export const HeaderActiveUnderline = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;

  display: none;

  background: hsl(var(--color-twitch-orange-12));

  width: 16px;
  height: 4px;

  border-radius: 2px;

  opacity: 1;

  transform: translate(-50%, 200%);

  animation: ${fadeInKeyFrame} 0.3s ease-in-out;
`

export const HeaderTab = styled(Link)<{ $active?: boolean }>`
  position: relative;

  margin-right: 24px;

  cursor: pointer;

  ${({ $active }) =>
    $active &&
    css`
      ${HeaderText} {
        color: rgba(255, 255, 255, 0.85);
      }

      ${HeaderActiveUnderline} {
        display: block;

        transition: all 0.3s ease-in-out;
      }
    `}
`

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  width: 608px;
`
