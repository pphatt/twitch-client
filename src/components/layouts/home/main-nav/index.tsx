"use client"

import * as React from "react"
import AnimatedLogo from "@/assets/logo/animated-logo"

import {
  HeaderActiveUnderline,
  HeaderLogoLink,
  HeaderLogoText,
  HeaderLogoWrapper,
  HeaderTab,
  HeaderTabWrapper,
  HeaderText,
  MainNavLayoutWrapper, SearchBarWrapper,
} from "@/components/layouts/home/main-nav/style"

export default function MainNav() {
  return (
    <>
      <MainNavLayoutWrapper>
        <HeaderLogoWrapper>
          <HeaderLogoLink href={"/"}>
            <AnimatedLogo />
            <HeaderLogoText>Twitch media</HeaderLogoText>
          </HeaderLogoLink>
        </HeaderLogoWrapper>

        <HeaderTabWrapper>
          <HeaderTab $active={true} href={"/social/home"}>
            <HeaderText>Home</HeaderText>
            <HeaderActiveUnderline />
          </HeaderTab>

          <HeaderTab href={"/social/home/post"}>
            <HeaderText>Post</HeaderText>
            <HeaderActiveUnderline />
          </HeaderTab>
        </HeaderTabWrapper>
      </MainNavLayoutWrapper>

      {/* TODO: implement search here */}
      <SearchBarWrapper></SearchBarWrapper>
    </>
  )
}
