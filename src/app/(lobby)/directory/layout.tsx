import * as React from "react"
import { Suspense } from "react"

import { directorySite } from "@/config/site"
import { DirectorySideNav } from "@/components/directory-side-nav"
import styles from "@/styles/directory/layout.module.scss"

export default function DirectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["page-container"]}>
        <div className={styles["content-wrapper"]}>
          <div className={styles["content-container"]}>
            <section className={styles["layout-wrapper"]}>
              <DirectorySideNav sites={directorySite.sites} />

              <div className={styles["content"]}>
                <div className={styles["main-content"]}>
                  <Suspense fallback={<div></div>}>{children}</Suspense>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
