import * as React from "react"
import Link from "next/link"
import type { MainNavItem } from "@/types"

import { Icons } from "@/components/icons"
import styles from "@/styles/components/layouts/main-nav.module.scss"

interface MainNavProps {
  items?: MainNavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className={styles["main-nav-wrapper"]}>
      <Link href={"/"} className={styles["home-link"]}>
        <Icons.logo />
      </Link>
      <div className={styles["main-nav-items"]}>
        {items?.map(({ title, href }) => (
          <div className={styles["item-wrapper"]}>
            <div className={styles["item-container"]}>
              <Link href={`${href}`} className={styles["item-link"]}>
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
      <div></div>
    </div>
  )
}
