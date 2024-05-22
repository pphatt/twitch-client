"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { directorySite } from "@/config/site"
import { useMounted } from "@/hooks/use-mounted"
import styles from "@/styles/directory/layout.module.scss"

export default function DirectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const mounted = useMounted()

  const pathname = usePathname()

  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["page-container"]}>
        <div className={styles["content-wrapper"]}>
          <div className={styles["content-container"]}>
            {mounted && (
              <section className={styles["layout-wrapper"]}>
                <div className={styles["layout-header"]}>
                  <h1>Browse</h1>
                </div>

                <div className={styles["layout-side-section"]}>
                  <div className={styles["navigation-wrapper"]}>
                    <div className={styles["navigation-container"]}>
                      <ul className={styles["navigation-list"]}>
                        {directorySite.sites.map(({ title, slug }, index) => {
                          const currentTab = pathname === slug

                          return (
                            <li
                              className={styles["list-item"]}
                              data-selected={currentTab}
                              data-index={currentTab ? 0 : -1}
                              key={index}
                            >
                              <Link
                                href={slug}
                                className={styles["list-item-link-wrapper"]}
                              >
                                <p className={styles["list-item-text"]}>
                                  {title}
                                </p>
                              </Link>

                              <div
                                className={
                                  styles["list-item-underline-wrapper"]
                                }
                              >
                                {currentTab && (
                                  <div
                                    className={styles["list-item-underline"]}
                                  ></div>
                                )}
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>

                  <div></div>
                </div>

                <div>{children}</div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
