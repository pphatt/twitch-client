"use client"

import * as React from "react"
import { useAuth } from "@/context/auth.context"
import MainNav from "src/components/layouts/social/components/main-nav"

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LogoutButton from "@/components/auth/logout-button"
import { Icons } from "@/components/icons"
import AuthDialog from "@/components/layouts/auth-dialog"
import {
  AuthContainer,
  AuthInnerButton,
  AuthWrapper,
} from "@/components/layouts/site-header/style"
import NotifyBtn from "@/components/layouts/social/home/notify-btn"
import {
  AccountDetails,
  AccountImage,
  AccountImageContainer,
  AccountImageWrapper,
  AccountItemContainer,
  AccountItemWrapper,
  AccountText,
  DropdownItem,
  DropdownItemLink,
  DropdownMenuContentWrapper as DropdownMenuContent,
  DropdownMenuSeparatorWrapper as DropdownMenuSeparator,
  DropdownMenuWrapper,
  HeaderItemContentDropdown,
  HeaderItemTrigger,
  HeaderItemWrapper,
  HiddenTitle,
  LoginButtonExtend as LoginButton,
  PostContentWrapper,
  PostItemBtn,
  PostItemText,
  PostItemWrapper,
  SignUpButtonExtend as SignUpButton,
  SiteHeaderLayoutContainer,
  SiteHeaderLayoutOverlay,
  SiteHeaderLayoutWrapper,
  SVGContainer,
  SVGWrapper,
  UserImage,
  UserItemContainer,
  UserItemTrigger,
  UserItemTriggerWrapper,
  UtilitySectionWrapper,
} from "@/components/layouts/social/site-header/style"
import SimpleBar from "@/components/simplebar"

interface HomeSiteHeaderProps {
  accessToken: string
}

export default function HomeSiteHeader({ accessToken }: HomeSiteHeaderProps) {
  const { profile, authenticated } = useAuth()

  return (
    <SiteHeaderLayoutWrapper>
      <SiteHeaderLayoutContainer>
        <SiteHeaderLayoutOverlay>
          <MainNav />

          <UtilitySectionWrapper>
            {!authenticated && (
              <AuthWrapper>
                <AuthContainer>
                  <AuthDialog currentTab={"log-in"}>
                    <LoginButton>
                      <AuthInnerButton>
                        <div>Login</div>
                      </AuthInnerButton>
                    </LoginButton>
                  </AuthDialog>
                </AuthContainer>

                <AuthContainer>
                  <AuthDialog currentTab={"sign-up"}>
                    <SignUpButton>
                      <AuthInnerButton>
                        <div>Sign Up</div>
                      </AuthInnerButton>
                    </SignUpButton>
                  </AuthDialog>
                </AuthContainer>
              </AuthWrapper>
            )}

            {authenticated && (
              <>
                <HeaderItemWrapper>
                  <HeaderItemContentDropdown>
                    <DropdownMenu modal={false}>
                      <DropdownMenuTrigger asChild>
                        <HeaderItemTrigger>
                          <SVGWrapper>
                            <SVGContainer>
                              <Icons.pen />
                            </SVGContainer>
                          </SVGWrapper>
                        </HeaderItemTrigger>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align={"end"} asChild>
                        <SimpleBar
                          forceVisible={"y"}
                          simpleContentWrapperStyle={{
                            paddingBottom: "0",
                          }}
                        >
                          <DropdownMenuWrapper>
                            <HiddenTitle>Post now~</HiddenTitle>

                            <PostContentWrapper>
                              <PostItemWrapper>
                                <PostItemBtn href={"/social/create-post"}>
                                  <Icons.postImage />

                                  <PostItemText>Post</PostItemText>

                                  <Icons.arrowRight />
                                </PostItemBtn>
                              </PostItemWrapper>
                            </PostContentWrapper>
                          </DropdownMenuWrapper>
                        </SimpleBar>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </HeaderItemContentDropdown>
                </HeaderItemWrapper>

                <NotifyBtn accessToken={accessToken} />

                <HeaderItemWrapper>
                  <HeaderItemContentDropdown>
                    <UserItemContainer>
                      <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                          <UserItemTrigger>
                            <UserItemTriggerWrapper>
                              <UserImage
                                alt={"User Avatar"}
                                src={
                                  authenticated && profile?.image.url
                                    ? profile.image.url
                                    : "/avatar/user-default-picture.png"
                                }
                              />
                            </UserItemTriggerWrapper>
                          </UserItemTrigger>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                          align={"end"}
                          $widthFitContent={true}
                          alignOffset={-3}
                          asChild
                        >
                          <SimpleBar
                            forceVisible={"y"}
                            simpleContentWrapperStyle={{
                              paddingBottom: "0",
                            }}
                          >
                            <div style={{ padding: "10px" }}>
                              <AccountItemWrapper>
                                <AccountItemContainer>
                                  <AccountImageWrapper
                                    href={"/settings/profile"}
                                  >
                                    <AccountImageContainer>
                                      <AccountImage
                                        src={
                                          authenticated && profile?.image.url
                                            ? profile.image.url
                                            : "/avatar/user-default-picture.png"
                                        }
                                        alt={""}
                                      />
                                    </AccountImageContainer>
                                  </AccountImageWrapper>

                                  <AccountDetails>
                                    <AccountText>
                                      {profile?.displayName !== ""
                                        ? profile?.displayName
                                        : profile?.username}
                                    </AccountText>
                                  </AccountDetails>
                                </AccountItemContainer>
                              </AccountItemWrapper>

                              <DropdownMenuSeparator />

                              <DropdownItem>
                                <DropdownItemLink href={`/`}>
                                  <span>Back to twitch</span>
                                  <Icons.home style={{ fill: "none" }} />
                                </DropdownItemLink>
                              </DropdownItem>

                              <DropdownItem>
                                <DropdownItemLink
                                  href={`/social/profile/${profile?.username}`}
                                >
                                  <span>Profile</span>
                                  <Icons.channel />
                                </DropdownItemLink>
                              </DropdownItem>

                              <DropdownMenuSeparator />

                              <LogoutButton />
                            </div>
                          </SimpleBar>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </UserItemContainer>
                  </HeaderItemContentDropdown>
                </HeaderItemWrapper>
              </>
            )}
          </UtilitySectionWrapper>
        </SiteHeaderLayoutOverlay>
      </SiteHeaderLayoutContainer>
    </SiteHeaderLayoutWrapper>
  )
}
