"use client"

import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout"

import { cn } from "@/lib/utils"
import ChatHeader from "@/components/stream/chat/chat-header"
import ChatToggle from "@/components/stream/chat/chat-toggle"
import styles from "@/styles/components/stream/chat/chat-wrapper.module.scss"

interface ChatWrapperProps {
  children: React.ReactNode
}

export default function ChatWrapper({ children }: ChatWrapperProps) {
  const { isRightColumnClosedByUserAction } = useCacheLayout()

  const label = !isRightColumnClosedByUserAction
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
          {
            [`${styles["right-column--beside"]}`]:
              !isRightColumnClosedByUserAction,
          },
          {
            [`${styles["right-column--collapsed"]}`]:
              isRightColumnClosedByUserAction,
          }
        )}
      >
        <div
          className={styles["right-column"]}
          data-collapsed={isRightColumnClosedByUserAction}
        >
          <aside
            id="live-page-chat"
            aria-label="Stream Chat"
            aria-hidden={!isRightColumnClosedByUserAction}
            tabIndex={0}
            style={{
              height: "100%",
            }}
          >
            <div
              className={cn(styles["channel-root__right-column"], {
                [`${styles["channel-root__right-column--expanded"]}`]:
                  !isRightColumnClosedByUserAction,
              })}
              style={{
                opacity: 1,
                transition: "transform 500ms ease 0ms",
                transform: !isRightColumnClosedByUserAction
                  ? "translateX(-340px) translateZ(0px)"
                  : undefined,
              }}
            >
              <div className={styles["chat-shell-wrapper"]}>
                <div
                  className={cn(styles["chat-shell"], {
                    [`${styles["chat-shell__expanded"]}`]:
                      !isRightColumnClosedByUserAction,
                  })}
                >
                  <div className={styles["chat-shell-container"]}>
                    <div className={styles["stream-chat-wrapper"]}>
                      <ChatHeader />

                      <>{children}</>
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
