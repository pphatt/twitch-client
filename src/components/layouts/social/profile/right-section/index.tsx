import * as React from "react"
import Link from "next/link"

import { Icons } from "@/components/icons"
import styles from "@/components/layouts/social/profile/right-section/style.module.scss"

interface RightSectionProps {
  userId: string
}

export default function RightSection({ userId }: RightSectionProps) {
  return (
    <div className={styles["page-content-right-wrapper"]}>
      <div className={styles["page-content-right-container"]}>
        <div className={styles["page-content-right-card-wrapper"]}>
          <div className={styles["page-content-right-card-header-wrapper"]}>
            <h2 className={styles["page-content-right-card-header-container"]}>
              <div className={styles["page-content-right-card-header-overlay"]}>
                <span>Creator LAB</span>

                <Icons.circleHelp />
              </div>
            </h2>
          </div>

          <div className={styles["page-content-right-card-body-wrapper"]}>
            <div className={styles["right-card-body-content-wrapper"]}>
              <div className={styles["data-1-wrapper"]}>
                <div className={styles["data-1-icon-wrapper"]}>
                  <img
                    className={styles["data-1-icon"]}
                    src={"/icon/view.webp"}
                    alt={""}
                  />
                </div>

                <div className={styles["data-1-num"]}>0</div>

                <div className={styles["data-1-text"]}>Post Views</div>
              </div>

              <div className={styles["data-1-wrapper"]}>
                <div className={styles["data-1-icon-wrapper"]}>
                  <img
                    className={styles["data-1-icon"]}
                    src={"/icon/like.webp"}
                    alt={""}
                  />
                </div>

                <div className={styles["data-1-num"]}>0</div>

                <div className={styles["data-1-text"]}>Post Likes</div>
              </div>
            </div>

            <Link href={"/"} className={styles["view-dashboard"]}>
              Dashboard
            </Link>
          </div>
        </div>

        <div className={styles["page-content-right-card-wrapper"]}>
          <div className={styles["page-content-right-card-header-wrapper"]}>
            <h2 className={styles["page-content-right-card-header-container"]}>
              <div className={styles["page-content-right-card-header-overlay"]}>
                <span>Profile Information</span>
              </div>
            </h2>
          </div>

          <div className={styles["page-content-right-card-body-wrapper"]}>
            <div className={styles["profile-information-wrapper"]}>
              <Icons.idCard />
              <p>Account ID: {userId}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
