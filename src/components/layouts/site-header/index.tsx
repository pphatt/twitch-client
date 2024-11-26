"use client"

import * as React from "react"
import { useAuth } from "@/context/auth.context"
import { TokenPayload } from "@modules/user/application/command/auth/jwt/token.payload"
import { jwtDecode } from "jwt-decode"

import { siteConfig, supportSite } from "@/config/site"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LogoutButton from "@/components/auth/logout-button"
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

interface SiteHeaderProps {
  accessToken: string | undefined
}

export function SiteHeader({ accessToken }: SiteHeaderProps) {
  const { profile, authenticated } = useAuth()
  const [role, setRole] = React.useState("")

  React.useEffect(() => {
    if (accessToken) {
      const decoded = jwtDecode<TokenPayload>(accessToken)
      setRole(decoded.role![0] ?? "")
    }
  }, [accessToken])

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
                            <AccountImageWrapper href={"/settings/profile"}>
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

                        {role === "Admin" && (
                          <>
                            <DropdownMenuSeparator />

                            <DropdownItem>
                              <DropdownItemLink href={`/staff/admin`}>
                                <span>Admin Dashboard</span>
                                <Icons.admin />
                              </DropdownItemLink>
                            </DropdownItem>
                          </>
                        )}

                        <DropdownMenuSeparator />

                        <DropdownItem>
                          <DropdownItemLink href={`/u/${profile?.username}`}>
                            <span>Channel</span>
                            <Icons.channel />
                          </DropdownItemLink>
                        </DropdownItem>

                        <DropdownItem>
                          <DropdownItemLink
                            href={`/u/${profile?.username}/home`}
                          >
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

                        <DropdownMenuSeparator />

                        <DropdownItem>
                          <DropdownItemLink href={`/settings/profile`}>
                            <span>Settings</span>
                            <Icons.siteHeaderSettings />
                          </DropdownItemLink>
                        </DropdownItem>

                        <DropdownMenuSeparator />

                        <LogoutButton />
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
