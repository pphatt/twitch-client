"use client"

import * as React from "react"
import Link from "next/link"
import { MainNavItem, SupportNavItem } from "@/types"
import { For } from "million/react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Icons } from "@/components/icons"
import styles from "@/styles/components/layouts/main-nav.module.scss"

interface MainNavProps {
  items: MainNavItem[]
  supportItem: SupportNavItem[]
}

export function MainNav({ items, supportItem }: MainNavProps) {
  return (
    <div className={styles["main-nav-wrapper"]}>
      <Link href={"/"} className={styles["home-link"]}>
        <Icons.logo />
      </Link>
      <div className={styles["main-nav-items"]}>
        <For each={items}>
          {({ title, slug }, index) => (
            <div className={styles["item-wrapper"]} key={index}>
              <div className={styles["item-container"]}>
                <Link href={`${slug}`} className={styles["item-link"]}>
                  <div>
                    <div className={styles["item-text-wrapper"]}>
                      <div className={styles["item-text"]}>
                        <p className={styles["text"]}>{title}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </For>
      </div>
      <div className={styles["option-items"]}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className={styles["option-items-trigger"]}>
              <div className={styles["svg-wrapper"]}>
                <div className={styles["svg-container"]}>
                  <Icons.ellipsisVertical />
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align={"start"}
            className={styles["dropdown-menu"]}
            asChild
          >
            <ScrollArea className={styles["dropdown-menu-wrapper"]}>
              <For each={supportItem}>
                {({ title, items }, index) => (
                  <div key={index}>
                    <DropdownMenuLabel className={styles["item-label"]}>
                      {title}
                    </DropdownMenuLabel>

                    <For each={items}>
                      {({ title, href }, index) => (
                        <div
                          className={styles["dropdown-menu-item"]}
                          key={index}
                        >
                          <Link href={href}>{title}</Link>
                        </div>
                      )}
                    </For>

                    {index !== supportItem.length - 1 && (
                      <DropdownMenuSeparator
                        className={styles["item-separator"]}
                      />
                    )}
                  </div>
                )}
              </For>
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
