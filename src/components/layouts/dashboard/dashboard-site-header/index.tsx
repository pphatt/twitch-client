"use client"

import * as React from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Hint } from "@/components/common/hint"
import { Icons } from "@/components/icons"
import {
  AccountDetails,
  AccountImage,
  AccountImageContainer,
  AccountImageWrapper,
  AccountItemContainer,
  AccountItemWrapper,
  AccountText,
  AccountTextWrapper,
  AdditionalItem,
  AdditionalItemContainer,
  AdditionalItemWrapper,
  CurrentPageTitleWrapper,
  DropdownItem,
  DropdownItemLink,
  DropdownMenuContentWrapper as DropdownMenuContent,
  ItemSeparator as DropdownMenuSeparator,
  DropdownMenuContentContainer as SimpleBar,
  SiteHeaderContainer,
  SiteHeaderItems,
  SiteHeaderOverlay,
  SiteHeaderTextWrapper,
  SiteHeaderWrapper,
  StreamManagerLayoutWrapper,
  TitleSkeleton,
  UserImage,
  UserItemContainer,
  UserItemTrigger,
  UserItemTriggerWrapper,
  UserItemWrapper,
} from "@/components/layouts/dashboard/dashboard-site-header/style"
import HideNavigatorBtn from "@/app/(dashboard)/_components/hide-navigator-btn"

const DashboardTitle = dynamic(
  () => import("@/components/layouts/dashboard/dashboard-title"),
  {
    ssr: false,
    loading: () => {
      return <TitleSkeleton />
    },
  }
)

const DashboardLayoutControl = dynamic(
  () => import("@/components/layouts/dashboard/dashboard-layout-control")
)

export default function DashboardSiteHeader() {
  return (
    <SiteHeaderWrapper>
      <SiteHeaderContainer>
        <SiteHeaderOverlay>
          <SiteHeaderTextWrapper>
            <HideNavigatorBtn />

            <CurrentPageTitleWrapper>
              <Suspense>
                <DashboardTitle />
              </Suspense>
            </CurrentPageTitleWrapper>

            <StreamManagerLayoutWrapper>
              <Suspense>
                <DashboardLayoutControl />
              </Suspense>
            </StreamManagerLayoutWrapper>
          </SiteHeaderTextWrapper>

          <div></div>

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
              <UserItemContainer>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <UserItemTrigger $variant={"outline"}>
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

                              <AccountTextWrapper>
                                <p>Creator</p>
                              </AccountTextWrapper>
                            </AccountDetails>
                          </AccountItemContainer>
                        </AccountItemWrapper>

                        <DropdownMenuSeparator />

                        <DropdownItem>
                          <DropdownItemLink href={"/"}>
                            <span>Back to Channel</span>
                            <Icons.home style={{ fill: "none" }} />
                          </DropdownItemLink>
                        </DropdownItem>

                        <DropdownItem>
                          <DropdownItemLink href={"/"}>
                            <span>Channel</span>
                            <Icons.channel />
                          </DropdownItemLink>
                        </DropdownItem>

                        <DropdownMenuSeparator />

                        <DropdownItem>
                          <DropdownItemLink href={"/"}>
                            <span>Account Settings</span>
                            <Icons.settings style={{ fill: "none" }} />
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
            </UserItemWrapper>
          </SiteHeaderItems>
        </SiteHeaderOverlay>
      </SiteHeaderContainer>
    </SiteHeaderWrapper>
  )
}
