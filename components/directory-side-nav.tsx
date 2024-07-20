"use client"

import * as React from "react"
import { Suspense } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { NavItem } from "@/types"

import { DirectorySearch } from "@/components/search/directory-search"
import styles from "@/styles/components/directory-side-nav.module.scss"

interface DirectorySideNavProps {
  sites: NavItem[]
}

export default function DirectorySideNav({ sites }: DirectorySideNavProps) {
  const pathname = usePathname()

  return (
    <>
      <div className={styles["layout-header"]}>
        <h1>Browse</h1>
      </div>

      <div className={styles["layout-side-section"]}>
        <div className={styles["navigation-wrapper"]}>
          <div className={styles["navigation-container"]}>
            <ul className={styles["navigation-list"]}>
              {sites.map(({ title, slug }, index) => {
                const currentTab = pathname === slug

                return (
                  <li
                    className={styles["list-item"]}
                    data-selected={currentTab}
                    data-index={currentTab ? 0 : -1}
                    key={index}
                  >
                    <Link
                      href={slug!}
                      className={styles["list-item-link-wrapper"]}
                    >
                      <p className={styles["list-item-text"]}>{title}</p>
                    </Link>

                    <div className={styles["list-item-underline-wrapper"]}>
                      {currentTab && (
                        <div className={styles["list-item-underline"]}></div>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <section className={styles["options-wrapper"]}>
          <div className={styles["options-container"]}>
            <Suspense>
              <DirectorySearch slug={pathname} />
            </Suspense>

            <div className={styles["sort-by-options-wrapper"]}></div>
          </div>
        </section>
      </div>
    </>
  )
}
