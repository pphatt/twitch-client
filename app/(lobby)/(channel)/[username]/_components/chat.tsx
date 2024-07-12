"use client"

import * as React from "react"
import { useChatSidebar } from "@/store/state/chat"

import { cn } from "@/lib/utils"
import styles from "@/styles/application/channel/_components/chat.module.scss"
import ChatToggle from "@/app/(lobby)/(channel)/[username]/_components/chat-toggle"

export default function Chat() {
  const { collapsed } = useChatSidebar()

  const label = !collapsed
    ? "right-column-chat-bar"
    : "right-column-chat-bar-collapsed"

  return (
    <div
      style={{
        width: "fit-content",
      }}
    >
      <div
        role="complementary"
        aria-label="Right Column"
        data-a-target={label}
        className={cn(
          { [`${styles["right-column--beside"]}`]: !collapsed },
          { [`${styles["right-column--collapsed"]}`]: collapsed }
        )}
      >
        <div className={styles["right-column"]} data-collapsed={collapsed}>
          <aside
            id="live-page-chat"
            aria-label="Stream Chat"
            aria-hidden={!collapsed}
            tabIndex={0}
            style={{
              height: "100%",
            }}
          >
            <div
              className={cn(styles["channel-root__right-column"], {
                [`${styles["channel-root__right-column--expanded"]}`]:
                  !collapsed,
              })}
              style={{
                opacity: 1,
                transition: "transform 500ms ease 0ms",
                transform: !collapsed
                  ? "translateX(-340px) translateZ(0px)"
                  : undefined,
              }}
            >
              <div className={styles["chat-shell-wrapper"]}>
                <div
                  className={cn(styles["chat-shell"], {
                    [`${styles["chat-shell__expanded"]}`]: !collapsed,
                  })}
                >
                  <div className={styles["chat-shell-container"]}>
                    <div className={styles["stream-chat-wrapper"]}>
                      <div
                        className={styles["stream-chat-header"]}
                        role="region"
                      >
                        <div className={styles["stream-chat-header-text"]}>
                          <h4
                            data-test-selector="chat-room-header-label"
                            id="chat-room-header-label"
                            className={styles["chat-room-header-label"]}
                          >
                            Stream Chat
                          </h4>
                        </div>

                        <div></div>
                      </div>

                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <ChatToggle />
      </div>
    </div>
  )
}
