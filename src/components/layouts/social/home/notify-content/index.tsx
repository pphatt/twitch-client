import * as React from "react"
import Link from "next/link"

import styles from "@/components/layouts/social/home/notify-content/style.module.scss"

interface NotifyContentProps {}

export default function NotifyContent() {
  return (
    <div>
      <div className={styles["header-wrapper"]}>
        <span className={styles["header-text"]}>Notifications</span>
      </div>

      <div className={styles["content-wrapper"]}>
        <div className={styles["content-container"]}>
          <div>
            <div className={styles["notification-item-wrapper"]}>
              <div className={styles["notification-item-avatar-wrapper"]}>
                <img
                  className={styles["notification-item-avatar"]}
                  src={"/avatar/user-default-picture.png"}
                  alt={""}
                />
              </div>

              <div className={styles["notification-item-content-wrapper"]}>
                <div
                  className={
                    styles["notification-item-content-username-wrapper"]
                  }
                >
                  <Link
                    href={"/"}
                    className={
                      styles["notification-item-content-username-container"]
                    }
                  >
                    <span
                      className={
                        styles["notification-item-content-username-text"]
                      }
                    >
                      admin1
                    </span>
                  </Link>
                </div>

                <div className={styles["notification-type"]}>Followed you</div>
              </div>

              <div className={styles["notification-time-wrapper"]}>
                <p className={styles["notification-time-text"]}>1m ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  )
}
