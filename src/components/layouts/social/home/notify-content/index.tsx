import * as React from "react"
import Link from "next/link"
import { formatTimeToNow } from "@/utils/common"
import type { NotificationResponseDto } from "@modules/user/presentation/http/dto/response/socket/notification.response.dto"

import styles from "@/components/layouts/social/home/notify-content/style.module.scss"

interface NotifyContentProps {
  notifications: NotificationResponseDto[]
}

export default function NotifyContent({ notifications }: NotifyContentProps) {
  return (
    <div>
      <div className={styles["header-wrapper"]}>
        <span className={styles["header-text"]}>Notifications</span>
      </div>

      <div className={styles["content-wrapper"]}>
        <div className={styles["content-container"]}>
          <div>
            {notifications.map(
              ({ message, senderName, avatar, type, createdAt }, index) => (
                <div
                  key={index}
                  className={styles["notification-item-wrapper"]}
                >
                  <div className={styles["notification-item-avatar-wrapper"]}>
                    <img
                      className={styles["notification-item-avatar"]}
                      src={avatar ?? "/avatar/user-default-picture.png"}
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
                        href={`/social/profile/${senderName}`}
                        className={
                          styles["notification-item-content-username-container"]
                        }
                      >
                        <span
                          className={
                            styles["notification-item-content-username-text"]
                          }
                        >
                          {senderName}
                        </span>
                      </Link>
                    </div>

                    <div className={styles["notification-type"]}>{message}</div>
                  </div>

                  <div className={styles["notification-time-wrapper"]}>
                    <p className={styles["notification-time-text"]}>
                      {formatTimeToNow(createdAt)}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  )
}
