import * as React from "react"
import Link from "next/link"
import { SHARE_LINK } from "@/constant"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"
import styles from "@/styles/channel/_components/share-btn.module.scss"

export default function ShareStreamBtn() {
  return (
    <div className={styles["live-action-wrapper"]}>
      <DropdownMenu modal={false}>
        <TooltipProvider delayDuration={0} skipDelayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button className={styles["share-btn-wrapper"]}>
                  <div className={styles["share-btn-container"]}>
                    <div className={styles["share-btn-overlay"]}>
                      <Icons.share />
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>

            <TooltipContent
              side={"bottom"}
              sideOffset={6}
              avoidCollisions={false}
              className={styles["share-btn-tooltip-wrapper"]}
            >
              <p>Share</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenuContent
          side={"top"}
          sideOffset={8}
          align={"end"}
          className={styles["share-content-wrapper"]}
        >
          <p className={styles["share-title"]}>Share via</p>

          <div className={styles["share-content-container"]}>
            {SHARE_LINK.map(({ name, slug, className, icon, link }) => {
              const Icon = Icons[icon]

              return (
                <div className={styles["social-button-wrapper"]}>
                  <TooltipProvider delayDuration={0} skipDelayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className={styles["social-button-container"]}>
                          <div className={styles["social-button-overlay"]}>
                            {link && (
                              <Link
                                href={link}
                                data-a-target={`${slug}-share-button`}
                                aria-label={`Button to share clip to ${name}`}
                                className={cn(
                                  styles["social-link-wrapper"],
                                  className
                                )}
                              >
                                <div
                                  className={cn(
                                    styles[`social-button__icon--${slug}`],
                                    styles["social-button__icon"]
                                  )}
                                >
                                  <figure
                                    className={
                                      styles["social-button__icon-wrapper"]
                                    }
                                  >
                                    <Icon />
                                  </figure>
                                </div>
                              </Link>
                            )}
                          </div>
                        </div>
                      </TooltipTrigger>

                      <TooltipContent
                        hideWhenDetached={true}
                        side={"bottom"}
                        sideOffset={6}
                        avoidCollisions={false}
                        className={styles["share-btn-tooltip-wrapper"]}
                      >
                        <p>{name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <div className={styles["social-button__text-wrapper"]}>
                    <p className={styles["social-button__text"]}>{name}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <div></div>
    </div>
  )
}
