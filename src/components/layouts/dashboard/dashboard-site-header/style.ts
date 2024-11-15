import Link from "next/link"
import styled from "styled-components"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { ShareDropdownMenuPrimitiveTriggerStyled } from "@/components/ui/dropdown-menu/style"
import { Skeleton } from "@/components/ui/skeleton"
import SimpleBar from "@/components/simplebar"

export const TitleSkeleton = styled(Skeleton)`
  background-color: rgba(83, 83, 95, 0.38);

  width: 100px;
  height: 10px;
`

export const SiteHeaderWrapper = styled.nav`
  position: relative;

  flex-shrink: 0;

  background-color: rgb(36, 39, 44);

  width: 100%;
  height: 50px;

  margin-bottom: 1px;

  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.9),
    0 0 2px rgba(0, 0, 0, 0.9);
`

export const SiteHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
`

export const SiteHeaderOverlay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`

export const SiteHeaderTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  min-width: fit-content;
  height: 100%;

  margin-left: 10px;
`

export const CurrentPageTitleWrapper = styled.div`
  margin-left: 10px;
`

export const StreamManagerLayoutWrapper = styled.div`
  min-width: fit-content;
  height: 100%;
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

  &:hover {
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

export const UserItemContainer = styled.div`
  position: relative;

  display: flex;
  align-items: stretch;
  flex-grow: 1;

  height: 100%;

  padding-left: 5px;
`

export const UserItemTrigger = styled(Button)`
  background-color: transparent !important;

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
export const UserItemTriggerWrapper = styled(Avatar)`
  background-color: hsl(var(--background));

  width: 30px;
  height: 30px;
`

export const UserImage = styled(AvatarImage)`
  display: block;

  width: 100%;

  border-radius: 9999px;

  user-select: none;

  object-fit: cover;
  object-position: top;
`

export const DropdownMenuContentWrapper = styled(DropdownMenuContent)`
  max-width: 90vw;
  min-width: 160px !important;
  max-height: calc(100vh - 5rem);
  height: 100%;

  padding: 0 !important;

  //overflow: auto !important;

  &::-webkit-scrollbar {
    display: none;

    height: 0;
    width: 0;
  }
`

export const DropdownMenuContentContainer = styled(SimpleBar)`
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

export const AccountTextWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5px;

  p {
    color: hsl(var(--foreground-alt-2));

    font-size: 13px;
    line-height: 1.5;
  }
`

export const ItemSeparator = styled(DropdownMenuSeparator)`
  background-color: rgb(83, 83, 95);

  margin: 0.5rem 0.25rem;
`

export const DropdownItem = styled.div`
  ${ShareDropdownMenuPrimitiveTriggerStyled};

  border-radius: 4px;

  padding: 5px;

  cursor: pointer;

  transition: none;

  svg {
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
  justify-content: flex-end !important;
  align-items: center;
`
