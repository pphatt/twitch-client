"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import AnimatedLogo from "@/assets/logo/animated-logo"

import {
  HeaderActiveUnderline,
  HeaderLogoLink,
  HeaderLogoText,
  HeaderLogoWrapper,
  HeaderTab,
  HeaderTabWrapper,
  HeaderText,
  MainNavLayoutWrapper,
  SearchBarWrapper,
} from "@/components/layouts/social/components/main-nav/style"

export default function MainNav() {
  const pathname = usePathname()

  return (
    <>
      <MainNavLayoutWrapper>
        <HeaderLogoWrapper>
          <HeaderLogoLink href={"/social/home"}>
            <AnimatedLogo />
            <HeaderLogoText>Twitch media</HeaderLogoText>
          </HeaderLogoLink>
        </HeaderLogoWrapper>

        <HeaderTabWrapper>
          <HeaderTab $active={pathname.includes("home")} href={"/social/home"}>
            <HeaderText>Home</HeaderText>
            <HeaderActiveUnderline />
          </HeaderTab>

          <HeaderTab $active={pathname.includes("post")} href={"/social/home"}>
            <HeaderText>Post</HeaderText>
            <HeaderActiveUnderline />
          </HeaderTab>

          <HeaderTab
            $active={
              pathname.includes("friends") || pathname.includes("profile")
            }
            href={"/social/friends"}
          >
            <HeaderText>Friends</HeaderText>
            <HeaderActiveUnderline />
          </HeaderTab>
        </HeaderTabWrapper>
      </MainNavLayoutWrapper>

      {/* TODO: implement search here */}
      <SearchBarWrapper></SearchBarWrapper>
    </>
  )
}
