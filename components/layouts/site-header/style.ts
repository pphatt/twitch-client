import Link from "next/link"
import styled from "styled-components"

import { Button } from "@/components/ui/button/button"
import {
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu/dropdown-menu"
import SimpleBar from "@/components/simplebar"

export const SiteHeaderWrapper = styled.div`
  flex-shrink: 0;

  height: 50px;
`

export const SiteHeaderContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: nowrap;

  height: 100%;

  background-color: rgb(36 39 44);

  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.9),
    0 0 2px rgba(0, 0, 0, 0.9);
`

export const SearchWrapper = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
  flex-shrink: 1;

  width: 100%;

  @media (min-width: 768px) {
    display: flex;
  }
`

export const SiteHeaderItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 2;

  width: 100%;
`

export const AdditionalItem = styled(Button)`
  color: hsl(var(--foreground));
  background-color: transparent;

  width: 30px;
  height: 30px;

  border-radius: var(--radius);

  padding: 0;

  margin-left: 5px;
  margin-right: 5px;

  user-select: none;

  cursor: pointer;

  &:not([disabled]):hover {
    color: hsl(var(--foreground));
    background-color: rgb(71 79 84);
  }
`

export const AdditionalItemWrapper = styled.div`
  width: 20px;
  height: 20px;

  pointer-events: none;
`

export const AdditionalItemContainer = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;

  fill: currentColor;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const UserItemWrapper = styled.div`
  display: flex;

  height: 100%;

  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 10px;
`

export const AuthWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

export const AuthContainer = styled.div`
  padding-left: 5px;
  padding-right: 5px;
`

export const LoginButton = styled(Button)`
  color: hsl(var(--foreground));
  background-color: rgba(83, 83, 95, 0.38) !important;

  height: 30px;

  border-radius: var(--radius);

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  user-select: none;

  vertical-align: middle;

  overflow: hidden;
  text-decoration: none;
  white-space: nowrap;
`

export const SignUpButton = styled(Button)`
  color: #fff;
  background-color: hsl(var(--color-twitch-orange-11));

  height: 30px;

  border-radius: var(--radius);

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  user-select: none;

  vertical-align: middle;

  overflow: hidden;
  text-decoration: none;
  white-space: nowrap;

  &:not([disabled]):hover {
    background-color: hsl(var(--color-twitch-orange-12));
  }
`

export const AuthInnerButton = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;

  padding: 0 10px;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 0;
  }
`

export const UserItemContainer = styled.div`
  position: relative;

  display: flex;
  align-items: stretch;
  flex-grow: 1;

  height: 100%;

  padding-left: 5px;
`

export const UserItemTrigger = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  width: 30px;
  height: 30px;

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

export const UserItemTriggerWrapper = styled.div`
  background-color: hsl(var(--background));
`

export const UserImage = styled.img`
  display: block;

  width: 100%;

  border-radius: 9999px;

  user-select: none;
`

export const DropdownMenuContentWrapper = styled(DropdownMenuContent)`
  max-width: 90vw;
  min-width: 160px !important;
  max-height: calc(100vh - 5rem);
  height: 100%;

  padding: 0;

  //overflow: auto !important;

  &::-webkit-scrollbar {
    display: none;

    height: 0;
    width: 0;
  }
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

export const AccountImageWrapper = styled.div`
  margin-right: 10px;
`

export const AccountImageContainer = styled.div`
  position: relative;

  width: 40px;
  max-height: 100%;
  height: 40px;
`

export const AccountImage = styled.img`
  display: block;

  width: 100%;

  border-radius: 9999px;
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

export const DropdownItem = styled.div`
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
    color: initial;
    //background-color: rgba(83, 83, 95, 0.48) ;
    background-color: rgb(71 79 84);
  }

  &:active {
    color: initial;
    background-color: rgba(83, 83, 95, 0.55);
  }
`

export const DropdownItemLink = styled(Link)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
`
