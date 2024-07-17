import * as React from "react"
import Link from "next/link"

import { siteConfig, supportSite } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Hint } from "@/components/hint"
import { Icons } from "@/components/icons"
import AuthDialog from "@/components/layouts/auth-dialog"
import { MainNav } from "@/components/layouts/main-nav"
import { SearchCommandMenu } from "@/components/search-command-menu"
import SimpleBar from "@/components/simplebar"
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
            <div className={styles["auth-wrapper"]}>
              <div className={styles["auth-container"]}>
                <AuthDialog currentTab={"log-in"}>
                  <Button className={styles["login-button"]}>
                    <div className={styles["auth-inner-button"]}>
                      <div>Login</div>
                    </div>
                  </Button>
                </AuthDialog>
              </div>

              <div className={styles["auth-container"]}>
                <AuthDialog currentTab={"sign-up"}>
                  <Button className={styles["sign-up-button"]}>
                    <div className={styles["auth-inner-button"]}>
                      <div>Sign Up</div>
                    </div>
                  </Button>
                </AuthDialog>
              </div>
            </div>
            <div className={styles["user-item-container"]}>
              <DropdownMenu modal={false}>
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
                          </div>
                        </div>
                      </div>

                      <DropdownMenuSeparator
                        className={styles["item-separator"]}
                      />

                      <div className={styles["dropdown-item"]}>
                        <Link
                          className={styles["dropdown-item-link"]}
                          href={"/u/tienphat"}
                        >
                          <span>Channel</span>
                          <Icons.channel />
                        </Link>
                      </div>

                      <div className={styles["dropdown-item"]}>
                        <Link
                          className={styles["dropdown-item-link"]}
                          href={"/u/tienphat/content/video-producer"}
                        >
                          <span>Video Producer</span>
                          <Icons.videoProducer />
                        </Link>
                      </div>

                      <div className={styles["dropdown-item"]}>
                        <Link
                          className={styles["dropdown-item-link"]}
                          href={"/u/tienphat/home"}
                        >
                          <span>Creator Dashboard</span>
                          <Icons.creatorDashboard />
                        </Link>
                      </div>

                      <div className={styles["dropdown-item"]}>
                        <Link
                          className={styles["dropdown-item-link"]}
                          href={"/privacy"}
                        >
                          <span>Privacy Center</span>
                          <Icons.privacy />
                        </Link>
                      </div>

                      <div className={styles["dropdown-item"]}>
                        <Link
                          className={styles["dropdown-item-link"]}
                          href={"/safety"}
                        >
                          <span>Safety</span>
                          <Icons.safety />
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
                          <span>Emote Attribution</span>
                          <Icons.emoteContribution />
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
  )
}
