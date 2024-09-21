"use client"

import * as React from "react"
import { cn } from "@/lib"
import { useCacheLayout } from "@/store/persistent/layout"

import ChatHeader from "@/components/stream/chat/chat-header"
import ChatToggle from "@/components/stream/chat/chat-toggle"
import {
  ChatShell,
  ChatShellContainer,
  ChatShellWrapper,
  RightColumn,
  RightColumnWrapper,
} from "@/components/stream/chat/chat-wrapper/style"
import styles from "@/components/stream/chat/chat-wrapper/style.module.scss"

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
      <RightColumn
        role="complementary"
        aria-label="Right Column"
        data-a-target={label}
        $isClosed={isRightColumnClosedByUserAction}
      >
        <RightColumnWrapper
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
              <ChatShellWrapper>
                <ChatShell
                  className={cn(styles["chat-shell"], {
                    [`${styles["chat-shell__expanded"]}`]:
                      !isRightColumnClosedByUserAction,
                  })}
                >
                  <ChatShellContainer>
                    <div className={styles["stream-chat"]}>
                      <ChatHeader />

                      <>{children}</>
                    </div>
                  </ChatShellContainer>
                </ChatShell>
              </ChatShellWrapper>
            </div>
          </aside>
        </RightColumnWrapper>

        <ChatToggle />
      </RightColumn>
    </div>
  )
}
