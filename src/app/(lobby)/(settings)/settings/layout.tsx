"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import {
  ContentLayoutContainer,
  ContentLayoutOverlay,
  ContentLayoutWrapper,
} from "@/components/settings/root-page/style"
import {
  LayoutHeaderContainer,
  LayoutHeaderOverlay,
  LayoutHeaderText,
  LayoutHeaderWrapper,
  LinkItemContainer,
  LinkItemOverlay,
  LinkItemText,
  LinkItemTextWrapper,
  LinkItemWrapper,
  LinkListContainer,
  LinkListWrapper,
  MainLayoutWrapper,
  Underline,
  UnderlineWrapper,
} from "@/components/settings/root-layout/style"
import SimpleBar from "@/components/simplebar"

const LINK_MAP = [
  {
    title: "Profile",
    href: "/settings/profile",
  },
  {
    title: "Security and Privacy",
    href: "/settings/security",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const pathname = usePathname()

  return (
    <MainLayoutWrapper>
      <header>
        <LayoutHeaderWrapper>
          <LayoutHeaderContainer>
            <LayoutHeaderOverlay>
              <LayoutHeaderText>Settings</LayoutHeaderText>
            </LayoutHeaderOverlay>

            <div>
              <LinkListWrapper>
                <LinkListContainer>
                  {LINK_MAP.map(({ title, href }, index) => (
                    <LinkItemWrapper $active={pathname === href} key={index}>
                      <LinkItemContainer href={href}>
                        <LinkItemOverlay $paddingBoth={index > 0}>
                          <LinkItemTextWrapper>
                            <LinkItemText>{title}</LinkItemText>
                          </LinkItemTextWrapper>
                        </LinkItemOverlay>
                      </LinkItemContainer>

                      {pathname === href && (
                        <UnderlineWrapper $paddingBoth={index > 0}>
                          <Underline />
                        </UnderlineWrapper>
                      )}
                    </LinkItemWrapper>
                  ))}
                </LinkListContainer>
              </LinkListWrapper>
            </div>
          </LayoutHeaderContainer>
        </LayoutHeaderWrapper>
      </header>

      <SimpleBar forceVisible={"y"}>
        <ContentLayoutWrapper>
          <ContentLayoutContainer>
            <ContentLayoutOverlay>{children}</ContentLayoutOverlay>
          </ContentLayoutContainer>
        </ContentLayoutWrapper>
      </SimpleBar>
    </MainLayoutWrapper>
  )
}
