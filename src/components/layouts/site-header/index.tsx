"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"

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

export function SiteHeader({ username }: { username: string | null }) {
  const router = useRouter()

  const [user, setUserProfile] = React.useState<{ id: string } | null>()
  const [isPending, startTransition] = React.useTransition()

  const authenticated = !!username

  const searchParams = useSearchParams()

  const isRedirected = searchParams.get("redirected")

  React.useEffect(() => {
    if (authenticated) {
      if (isRedirected === "true") {
        router.refresh()
      }
    }
  }, [authenticated, isRedirected, router, searchParams])

  React.useEffect(() => {
    console.log("isPending", isPending)

    startTransition(async () => {
      // if (authenticated) {
      //   try {
      //     const response = await authAxiosInstance.get(UserProfileNextAPI)
      //
      //     const { id } = response.data as { id: string }
      //
      //     setUserProfile({ id })
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }
    })
  }, [])

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
                            authenticated
                              ? "/avatar/user-default-picture.png"
                              : ""
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
                            <AccountImageWrapper>
                              <AccountImageContainer>
                                <AccountImage
                                  src={"/avatar/user-default-picture.png"}
                                  alt={""}
                                />
                              </AccountImageContainer>
                            </AccountImageWrapper>

                            <AccountDetails>
                              <AccountText>{username}</AccountText>
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
                          <DropdownItemLink href={"/emote-contribute"}>
                            <span>Emote Attribution</span>
                            <Icons.emoteContribution />
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
