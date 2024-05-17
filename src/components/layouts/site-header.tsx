import * as React from "react"
import Link from "next/link"

import { siteConfig, supportSite } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/layouts/main-nav"
import { SearchCommandMenu } from "@/components/search-command-menu"
import styles from "@/styles/components/layouts/site-header.module.scss"

export function SiteHeader() {
  return (
    <div className={styles["site-header-wrapper"]}>
      <div className={styles["site-header-container"]}>
        <MainNav items={siteConfig.mainNav} supportItem={supportSite.sites} />
        <div className={styles["search-wrapper"]}>
          <SearchCommandMenu />
        </div>
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
                        src={"user-default-picture.png"}
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
                    <DropdownMenuItem
                      className={styles["dropdown-item"]}
                      asChild
                    >
                      <Link
                        className={styles["dropdown-item-link"]}
                        href={"/u/tienphat"}
                      >
                        <span>Channel</span>
                        <Icons.channel />
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      className={styles["dropdown-item"]}
                      asChild
                    >
                      <Link
                        className={styles["dropdown-item-link"]}
                        href={"/u/tienphat/content/video-producer"}
                      >
                        <span>Video Producer</span>
                        <Icons.videoProducer />
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      className={styles["dropdown-item"]}
                      asChild
                    >
                      <Link
                        className={styles["dropdown-item-link"]}
                        href={"/u/tienphat/home"}
                      >
                        <span>Creator Dashboard</span>
                        <Icons.creatorDashboard />
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      className={styles["dropdown-item"]}
                      asChild
                    >
                      <Link
                        className={styles["dropdown-item-link"]}
                        href={"/privacy"}
                      >
                        <span>Privacy Center</span>
                        <Icons.privacy />
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      className={styles["dropdown-item"]}
                      asChild
                    >
                      <Link
                        className={styles["dropdown-item-link"]}
                        href={"/safety"}
                      >
                        <span>Safety</span>
                        <Icons.safety />
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
                        <span>Emote Attribution</span>
                        <Icons.emoteContribution />
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
  )
}
