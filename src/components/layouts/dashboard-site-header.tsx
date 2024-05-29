import * as React from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import styles from "@/styles/components/layouts/dashboard-site-header.module.scss"

import { Icons } from "../icons"
import { Button } from "../ui/button"

const DashboardTitle = dynamic(
  () => import("@/components/layouts/dashboard-title"),
  {
    ssr: false,
    loading: () => {
      return <Skeleton className={styles["title-loading"]} />
    },
  }
)

export default function DashboardSiteHeader() {
  return (
    <nav className={styles["site-header-wrapper"]}>
      <div className={styles["site-header-container"]}>
        <div className={styles["site-header-overlay"]}>
          <div className={styles["site-header-text-wrapper"]}>
            <div className={styles["site-header-btn-wrapper"]}>
              <div className={styles["site-header-btn-container"]}>
                <Button className={styles["site-header-btn"]}>
                  <div>
                    <Icons.hideNavigator />
                  </div>
                </Button>
              </div>
            </div>

            <div className={styles["current-page-title-wrapper"]}>
              <Suspense>
                <DashboardTitle/>
              </Suspense>
            </div>
          </div>

          <div></div>

          <div className={styles["site-header-items"]}>
            <TooltipProvider delayDuration={250} skipDelayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className={styles["additional-item"]}>
                    <div className={styles["additional-item-wrapper"]}>
                      <div className={styles["additional-item-container"]}>
                        <Icons.notify />
                      </div>
                    </div>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className={styles["additional-item"]}>
                    <div className={styles["additional-item-wrapper"]}>
                      <div className={styles["additional-item-container"]}>
                        <Icons.whispers />
                      </div>
                    </div>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Whispers</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className={styles["user-item-wrapper"]}>
              <div className={styles["user-item-container"]}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={"outline"}
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
                  >
                    <ScrollArea className={styles["dropdown-menu-wrapper"]}>
                      <div className={styles["account-item-wrapper"]}>
                        <div className={styles["account-item-container"]}>
                          <div className={styles["account-image-wrapper"]}>
                            <div className={styles["account-image-container"]}>
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

                      <DropdownMenuItem
                        className={styles["dropdown-item"]}
                        asChild
                      >
                        <Link
                          className={styles["dropdown-item-link"]}
                          href={"/"}
                        >
                          <span>Back to Channel</span>
                          <Icons.home style={{ fill: "none" }} />
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        className={styles["dropdown-item"]}
                        asChild
                      >
                        <Link
                          className={styles["dropdown-item-link"]}
                          href={"/"}
                        >
                          <span>Channel</span>
                          <Icons.channel />
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuSeparator
                        className={styles["item-separator"]}
                      />

                      <DropdownMenuItem
                        className={styles["dropdown-item"]}
                        asChild
                      >
                        <Link
                          className={styles["dropdown-item-link"]}
                          href={"/"}
                        >
                          <span>Account Settings</span>
                          <Icons.settings style={{ fill: "none" }} />
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuSeparator
                        className={styles["item-separator"]}
                      />

                      <DropdownMenuItem
                        className={styles["dropdown-item"]}
                        asChild
                      >
                        <Link
                          className={styles["dropdown-item-link"]}
                          href={"/safety"}
                        >
                          <span>Log Out</span>
                          <Icons.logout />
                        </Link>
                      </DropdownMenuItem>
                    </ScrollArea>
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
