import * as React from "react"
import Link from "next/link"
import type { MainNavItem, SupportNavItem } from "@/types"

import { Button } from "@/components/ui/button/button"
import {
  DropdownMenuContent,
  DropdownMenuItemContainer,
  DropdownMenuItemLink,
  DropdownMenuItemTitle,
  DropdownMenuItemWrapper,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu-fork/dropdown-menu-fork"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu/dropdown-menu"
import { Icons } from "@/components/icons"
import SimpleBar from "@/components/simplebar"
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
        {items.map(({ title, slug }, index) => (
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
        ))}
      </div>
      <div className={styles["option-items"]}>
        <DropdownMenu modal={false}>
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
            <SimpleBar
              forceVisible={"y"}
              simpleContentWrapperStyle={{
                paddingBottom: "0",
              }}
            >
              <div className={styles["dropdown-menu-wrapper"]}>
                {supportItem.map(({ title, items }, index) => (
                  <div key={index}>
                    <DropdownMenuLabel>{title}</DropdownMenuLabel>

                    {items.map(({ title, href }, index) => (
                      <DropdownMenuItemWrapper key={index}>
                        <DropdownMenuItemLink href={href}>
                          <DropdownMenuItemContainer>
                            <DropdownMenuItemTitle>
                              {title}
                            </DropdownMenuItemTitle>
                          </DropdownMenuItemContainer>
                        </DropdownMenuItemLink>
                      </DropdownMenuItemWrapper>
                    ))}

                    {index !== supportItem.length - 1 && (
                      <DropdownMenuSeparator />
                    )}
                  </div>
                ))}
              </div>
            </SimpleBar>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
