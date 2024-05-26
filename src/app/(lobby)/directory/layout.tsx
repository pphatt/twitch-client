import * as React from "react"

import { directorySite } from "@/config/site"
import DirectorySideNav from "@/components/directory-side-nav"
import styles from "@/styles/directory/layout.module.scss"

export default function DirectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className={styles["page-wrapper"]}>
        <div className={styles["page-container"]}>
          <section className={styles["layout-wrapper"]}>
            <DirectorySideNav sites={directorySite.sites} />

            <div className={styles["content"]}>
              <div className={styles["main-content"]}>{children}</div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
