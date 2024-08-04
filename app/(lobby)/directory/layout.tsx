import * as React from "react"

import { directorySite } from "@/config/site"
import SharedLayout from "@/components/common/shared-layout/shared-layout"
import DirectorySideNav from "@/components/common/directory-side-nav/directory-side-nav"
import styles from "@/styles/application/directory/layout.module.scss"

export default function DirectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SharedLayout>
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
    </SharedLayout>
  )
}
