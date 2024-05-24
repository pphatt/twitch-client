import * as React from "react"
import dynamic from "next/dynamic"

import { directorySite } from "@/config/site"
// import { DirectorySideNav } from "@/components/directory-side-nav"
import styles from "@/styles/directory/layout.module.scss"

const DirectorySideNav = dynamic(
  () => import("@/components/directory-side-nav"),
  { ssr: false }
)

export default function DirectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /*
   * trong trang page ko can` phai fetch du lieu
   * co the de fetch o trong 1 server component rieng xong suspense no trong page
   * maybe this is the solution ????
   * */

  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["page-container"]}>
        <div className={styles["content-wrapper"]}>
          <div className={styles["content-container"]}>
            <section className={styles["layout-wrapper"]}>
              <DirectorySideNav sites={directorySite.sites} />

              <div className={styles["content"]}>
                <div className={styles["main-content"]}>{children}</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
