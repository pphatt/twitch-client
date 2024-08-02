"use client"

import * as React from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton/skeleton"
import { Hint } from "@/components/hint"
import SimpleBar from "@/components/simplebar"
import styles from "@/styles/components/layouts/dashboard/dashboard-site-header.module.scss"
import HideNavigatorBtn from "@/app/(dashboard)/_components/hide-navigator-btn"

import { Icons } from "../../icons"
import { Button } from "../../ui/button/button"

const DashboardTitle = dynamic(
  () => import("@/components/layouts/dashboard/dashboard-title"),
  {
    ssr: false,
    loading: () => {
      return <Skeleton className={styles["title-loading"]} />
    },
  }
)

const DashboardLayoutControl = dynamic(
  () => import("@/components/layouts/dashboard/dashboard-layout-control")
)

export default function DashboardSiteHeader() {
  return (
    <nav className={styles["site-header-wrapper"]}>
      <div className={styles["site-header-container"]}>
        <div className={styles["site-header-overlay"]}>
          <div className={styles["site-header-text-wrapper"]}>
            <HideNavigatorBtn />

            <div className={styles["current-page-title-wrapper"]}>
              <Suspense>
                <DashboardTitle />
              </Suspense>
            </div>

            <div className={styles["stream-manager-layout-wrapper"]}>
              <Suspense>
                <DashboardLayoutControl />
              </Suspense>
            </div>
          </div>

          <div></div>

          <div className={styles["site-header-items"]}>
            <Hint
              delayDuration={250}
              skipDelayDuration={0}
              label={"Notifications"}
            >
              <Button className={styles["additional-item"]}>
                <div className={styles["additional-item-wrapper"]}>
                  <div className={styles["additional-item-container"]}>
                    <Icons.notify />
                  </div>
                </div>
              </Button>
            </Hint>

            <Hint delayDuration={250} skipDelayDuration={0} label={"Whispers"}>
              <Button className={styles["additional-item"]}>
                <div className={styles["additional-item-wrapper"]}>
                  <div className={styles["additional-item-container"]}>
                    <Icons.whispers />
                  </div>
                </div>
              </Button>
            </Hint>

            <div className={styles["user-item-wrapper"]}>
              <div className={styles["user-item-container"]}>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      $variant={"outline"}
                      className={styles["user-item-trigger"]}
                    >
                      <div className={styles["user-item-trigger-wrapper"]}>
                        <img
                          alt={"User Avatar"}
                          src={"/avatar/user-default-picture.png"}
                          className={styles["user-image"]}
                        />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align={"end"}
                    alignOffset={-3}
                    className={styles["dropdown-menu"]}
                    asChild
                  >
                    <SimpleBar
                      forceVisible={"y"}
                      className={styles["dropdown-menu-wrapper"]}
                      simpleContentWrapperStyle={{
                        paddingBottom: "0",
                      }}
                    >
                      <div style={{ padding: "10px" }}>
                        <div className={styles["account-item-wrapper"]}>
                          <div className={styles["account-item-container"]}>
                            <div className={styles["account-image-wrapper"]}>
                              <div
                                className={styles["account-image-container"]}
                              >
                                <img
                                  className={styles["account-image"]}
                                  src={"/avatar/user-default-picture.png"}
                                  alt={""}
                                />
                              </div>
                            </div>
                            <div className={styles["account-details"]}>
                              <p className={styles["account-text"]}>tienphat</p>
                              <div className={styles["account-text-wrapper"]}>
                                <p>Creator</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <DropdownMenuSeparator
                          className={styles["item-separator"]}
                        />

                        <div className={styles["dropdown-item"]}>
                          <Link
                            className={styles["dropdown-item-link"]}
                            href={"/"}
                          >
                            <span>Back to Channel</span>
                            <Icons.home style={{ fill: "none" }} />
                          </Link>
                        </div>

                        <div className={styles["dropdown-item"]}>
                          <Link
                            className={styles["dropdown-item-link"]}
                            href={"/"}
                          >
                            <span>Channel</span>
                            <Icons.channel />
                          </Link>
                        </div>

                        <DropdownMenuSeparator
                          className={styles["item-separator"]}
                        />

                        <div className={styles["dropdown-item"]}>
                          <Link
                            className={styles["dropdown-item-link"]}
                            href={"/"}
                          >
                            <span>Account Settings</span>
                            <Icons.settings style={{ fill: "none" }} />
                          </Link>
                        </div>

                        <DropdownMenuSeparator
                          className={styles["item-separator"]}
                        />

                        <div className={styles["dropdown-item"]}>
                          <Link
                            className={styles["dropdown-item-link"]}
                            href={"/safety"}
                          >
                            <span>Log Out</span>
                            <Icons.logout />
                          </Link>
                        </div>
                      </div>
                    </SimpleBar>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
