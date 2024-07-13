"use client"

import * as React from "react"
import { useChatSidebar } from "@/store/state/chat"

import { cn } from "@/lib/utils"
import ChatToggle from "@/components/stream/chat/chat-toggle"
import styles from "@/styles/components/stream/chat/chat.module.scss"
import ChatHeader from "@/components/stream/chat/chat-header";

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
                      <ChatHeader />

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
