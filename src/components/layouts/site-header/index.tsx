"use client"

import * as React from "react"
import { useAuth } from "@/context/auth.context"

import { siteConfig, supportSite } from "@/config/site"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Hint } from "@/components/common/hint"
import { SearchCommandMenu } from "@/components/common/search-command-menu"
import { Icons } from "@/components/icons"
import AuthDialog from "@/components/layouts/auth-dialog"
import { MainNav } from "@/components/layouts/main-nav"
import {
  AccountDetails,
  AccountImage,
  AccountImageContainer,
  AccountImageWrapper,
  AccountItemContainer,
  AccountItemWrapper,
  AccountText,
  AdditionalItem,
  AdditionalItemContainer,
  AdditionalItemWrapper,
  AuthContainer,
  AuthInnerButton,
  AuthWrapper,
  DropdownItem,
  DropdownItemLink,
  DropdownMenuContentWrapper as DropdownMenuContent,
  DropdownMenuSeparatorWrapper as DropdownMenuSeparator,
  LoginButton,
  SearchWrapper,
  SignUpButton,
  SimpleBarWrapper as SimpleBar,
  SiteHeaderContainer,
  SiteHeaderItems,
  SiteHeaderWrapper,
  UserImage,
  UserItemContainer,
  UserItemTrigger,
  UserItemTriggerWrapper,
  UserItemWrapper,
} from "@/components/layouts/site-header/style"

export function SiteHeader() {
  // NOTE: this is way better than making the app not render everytime
  // const { isAuthenticated } = useAuth() bc we just want isAuthenticated only not the others
  const isAuthenticated = useAuth((store) => store.isAuthenticated)

  return (
    <SiteHeaderWrapper>
      <SiteHeaderContainer>
        <MainNav items={siteConfig.mainNav} supportItem={supportSite.sites} />

        <SearchWrapper>
          <SearchCommandMenu />
        </SearchWrapper>

        <SiteHeaderItems>
          <Hint
            delayDuration={250}
            skipDelayDuration={0}
            label={"Notifications"}
          >
            <AdditionalItem>
              <AdditionalItemWrapper>
                <AdditionalItemContainer>
                  <Icons.notify />
                </AdditionalItemContainer>
              </AdditionalItemWrapper>
            </AdditionalItem>
          </Hint>

          <Hint delayDuration={250} skipDelayDuration={0} label={"Whispers"}>
            <AdditionalItem>
              <AdditionalItemWrapper>
                <AdditionalItemContainer>
                  <Icons.whispers />
                </AdditionalItemContainer>
              </AdditionalItemWrapper>
            </AdditionalItem>
          </Hint>

          <UserItemWrapper>
            {!isAuthenticated && (
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

            {isAuthenticated && (
              <UserItemContainer>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <UserItemTrigger>
                      <UserItemTriggerWrapper>
                        <UserImage
                          alt={"User Avatar"}
                          src={"/avatar/user-default-picture.png"}
                        />
                      </UserItemTriggerWrapper>
                    </UserItemTrigger>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align={"end"} alignOffset={-3} asChild>
                    <SimpleBar
                      forceVisible={"y"}
                      simpleContentWrapperStyle={{
                        paddingBottom: "0",
                      }}
                    >
                      <div style={{ padding: "10px" }}>
                        <AccountItemWrapper>
                          <AccountItemContainer>
                            <AccountImageWrapper>
                              <AccountImageContainer>
                                <AccountImage
                                  src={"/avatar/user-default-picture.png"}
                                  alt={""}
                                />
                              </AccountImageContainer>
                            </AccountImageWrapper>

                            <AccountDetails>
                              <AccountText>tienphat</AccountText>
                            </AccountDetails>
                          </AccountItemContainer>
                        </AccountItemWrapper>

                        <DropdownMenuSeparator />

                        <DropdownItem>
                          <DropdownItemLink href={"/u/tienphat"}>
                            <span>Channel</span>
                            <Icons.channel />
                          </DropdownItemLink>
                        </DropdownItem>

                        <DropdownItem>
                          <DropdownItemLink
                            href={"/u/tienphat/content/video-producer"}
                          >
                            <span>Video Producer</span>
                            <Icons.videoProducer />
                          </DropdownItemLink>
                        </DropdownItem>

                        <DropdownItem>
                          <DropdownItemLink href={"/u/tienphat/home"}>
                            <span>Creator Dashboard</span>
                            <Icons.creatorDashboard />
                          </DropdownItemLink>
                        </DropdownItem>

                        <DropdownItem>
                          <DropdownItemLink href={"/privacy"}>
                            <span>Privacy Center</span>
                            <Icons.privacy />
                          </DropdownItemLink>
                        </DropdownItem>

                        <DropdownItem>
                          <DropdownItemLink href={"/safety"}>
                            <span>Safety</span>
                            <Icons.safety />
                          </DropdownItemLink>
                        </DropdownItem>

                        <DropdownMenuSeparator />

                        <DropdownItem>
                          <DropdownItemLink href={"/safety"}>
                            <span>Emote Attribution</span>
                            <Icons.emoteContribution />
                          </DropdownItemLink>
                        </DropdownItem>

                        <DropdownMenuSeparator />

                        <DropdownItem>
                          <DropdownItemLink href={"/safety"}>
                            <span>Log Out</span>
                            <Icons.logout />
                          </DropdownItemLink>
                        </DropdownItem>
                      </div>
                    </SimpleBar>
                  </DropdownMenuContent>
                </DropdownMenu>
              </UserItemContainer>
            )}
          </UserItemWrapper>
        </SiteHeaderItems>
      </SiteHeaderContainer>
    </SiteHeaderWrapper>
  )
}
