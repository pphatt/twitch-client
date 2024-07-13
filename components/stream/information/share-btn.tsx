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
import { Hint } from "@/components/hint"
import { Icons } from "@/components/icons"
import styles from "@/styles/components/stream/information/share-btn.module.scss"

export default function ShareStreamBtn() {
  return (
    <DropdownMenu modal={false}>
      <Hint
        label={"Share"}
        delayDuration={0}
        skipDelayDuration={0}
        side={"bottom"}
        sideOffset={6}
        avoidCollisions={false}
        className={styles["share-btn-tooltip-wrapper"]}
      >
        <DropdownMenuTrigger asChild>
          <Button className={styles["share-btn-wrapper"]}>
            <div className={styles["share-btn-container"]}>
              <div className={styles["share-btn-overlay"]}>
                <Icons.share />
              </div>
            </div>
          </Button>
        </DropdownMenuTrigger>
      </Hint>

      <DropdownMenuContent
        side={"top"}
        sideOffset={8}
        align={"end"}
        className={styles["share-content-wrapper"]}
      >
        <p className={styles["share-title"]}>Share via</p>

        <div className={styles["share-content-container"]}>
          {SHARE_LINK.map(({ name, slug, className, icon, link }, index) => {
            const Icon = Icons[icon]

            return (
              <div className={styles["social-button-wrapper"]} key={index}>
                <Hint
                  delayDuration={0}
                  skipDelayDuration={0}
                  hideWhenDetached={true}
                  side={"bottom"}
                  sideOffset={6}
                  avoidCollisions={false}
                  className={styles["share-btn-tooltip-wrapper"]}
                  label={name}
                >
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
                              className={styles["social-button__icon-wrapper"]}
                            >
                              <Icon />
                            </figure>
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                </Hint>

                <div className={styles["social-button__text-wrapper"]}>
                  <p className={styles["social-button__text"]}>{name}</p>
                </div>
              </div>
            )
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
