import Link from "next/link"
import styled, { css } from "styled-components"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { DropdownMenuContent } from "@/components/ui/dropdown-menu-fork"
import {
  LoginButton,
  SignUpButton,
} from "@/components/layouts/site-header/style"
import SimpleBar from "@/components/simplebar"

export const SiteHeaderLayoutWrapper = styled.div`
  //position: fixed;
  //top: 0;

  background-color: #0c0f1d;

  width: 100%;

  border-bottom: 1px solid #0c0f1d;

  z-index: 50;
`

export const SiteHeaderLayoutContainer = styled.div`
  background-color: #1b1d2a;
`

export const SiteHeaderLayoutOverlay = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;

  padding: 0 40px;
  margin: 0 auto;
`

export const UtilitySectionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`

export const LoginButtonExtend = styled(LoginButton)`
  color: rgba(255, 255, 255, 0.85);
  background-color: #242734;

  height: 36px;

  font-size: 16px;

  &:hover {
    color: rgba(255, 255, 255);
    background-color: #343746;
  }
`

export const SignUpButtonExtend = styled(SignUpButton)`
  height: 36px;

  font-size: 16px;
`

export const HeaderItemWrapper = styled.div`
  position: relative;

  margin-right: 24px;
`

export const HeaderItemContentDropdown = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
`

export const HeaderItemTrigger = styled(Button)`
  color: hsl(var(--foreground));
  background-color: transparent;

  width: 36px;
  height: 36px;

  border-radius: 4px;

  padding: 0;

  user-select: none;

  cursor: pointer;

  &:not([disabled]):hover {
    color: hsl(var(--foreground));
    background-color: #343746;
  }

  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;

    box-shadow: none;
  }
`

export const SVGWrapper = styled.div`
  width: 24px;
  height: 24px;

  pointer-events: none;
`

export const SVGContainer = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;

  fill: currentColor;

  svg {
    height: 100%;
    width: 100%;
  }
`

export const DropdownMenuContentWrapper = styled(DropdownMenuContent)<{
  $widthFitContent?: boolean
}>`
  background-color: #1b1d2a !important;

  ${({ $widthFitContent }) =>
    $widthFitContent
      ? css`
          width: 230px !important;
        `
      : css`
          width: 364px !important;
        `};

  border-radius: 16px !important;

  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.8) !important;

  & button {
    &:hover {
      color: rgba(255, 255, 255);
      background-color: #343746;
    }
  }
`

export const DropdownMenuWrapper = styled.div`
  padding: 16px;
`

export const HiddenTitle = styled.div`
  display: none;

  color: rgba(255, 255, 255, 0.65);

  margin-bottom: 8px;

  font-size: 12px;
  line-height: 1;
  font-weight: bold;
`

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PostItemWrapper = styled.div`
  display: inline-block;
  flex-shrink: 0;

  width: 100%;
  height: 56px;

  margin-bottom: 8px;
  margin-left: 0;

  font-size: 14px;

  cursor: pointer;

  &:hover {
    & > a {
      color: rgba(255, 255, 255);
      background-color: #343746;
    }
  }
`

export const PostItemBtn = styled(Link)`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;

  color: rgba(255, 255, 255, 0.85);
  background-color: #242734;

  width: 100%;
  height: 100%;

  border-radius: 8px;

  padding: 0 14px 0 16px;

  transition-duration: 0.2s;
  transition-property: background-color, color;

  svg:first-child {
    display: inherit;
    flex-shrink: 0;

    width: 1em;
    height: 1em;

    margin-right: 16px;

    font-size: 30px;
    line-height: 1;

    overflow: hidden;
  }

  svg {
    fill: currentColor;
  }
`

export const PostItemText = styled.span`
  flex-grow: 1;

  font-size: 16px;
  line-height: 20px;
  font-weight: bold;

  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const UserItemContainer = styled.div`
  position: relative;

  display: flex;
  align-items: stretch;
  flex-grow: 1;

  height: 100%;
`

export const UserItemTrigger = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  width: 36px;
  height: 36px;

  padding: 0;

  border-width: 0;
  border-radius: 9999px;

  cursor: pointer;

  overflow: hidden;

  &:focus-visible {
    outline: none;

    box-shadow: none;
  }
`

export const UserItemTriggerWrapper = styled(Avatar)`
  background-color: hsl(var(--background));

  width: 32px;
  height: 32px;
`

export const UserImage = styled(AvatarImage)`
  display: block;

  width: 100%;

  border-radius: 9999px;

  user-select: none;

  object-fit: cover;
  object-position: top;
`

export const SimpleBarWrapper = styled(SimpleBar)`
  height: 100%;
`

export const AccountItemWrapper = styled.div`
  width: 100%;
`

export const AccountItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin: 5px;
`

export const AccountImageWrapper = styled(Link)`
  margin-right: 10px;
`

export const AccountImageContainer = styled(Avatar)`
  position: relative;

  width: 40px;
  max-height: 100%;
  height: 40px;
`

export const AccountImage = styled(AvatarImage)`
  display: block;

  width: 100%;

  border-radius: 9999px;

  object-fit: cover;
  object-position: top;
`

export const AccountDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const AccountText = styled.p`
  color: hsl(var(--foreground));

  font-size: 14px;
  line-height: 1.5;
  font-weight: 600;
`

export const DropdownMenuSeparatorWrapper = styled(DropdownMenuSeparator)`
  background-color: rgb(83, 83, 95);

  margin: 0.5rem 0.25rem;
`

export const shareCss = css`
  position: relative;

  display: flex;
  align-items: center;

  border-radius: 4px;

  padding: 5px;

  font-size: 0.875rem;
  line-height: 1.25rem;

  outline: 2px solid transparent;
  outline-offset: 2px;

  cursor: pointer;

  transition: none;

  svg {
    display: block;
    vertical-align: middle;

    width: 20px;
    height: 20px;

    margin-right: 5px;

    fill: #fff;
  }

  &:hover,
  &:focus {
    color: rgba(255, 255, 255);
    background-color: #343746;
  }

  &:active {
    color: rgba(255, 255, 255);
    background-color: #343746;
  }
`

export const DropdownItem = styled.div`
  ${shareCss}
`

export const DropdownItemLink = styled(Link)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
`
