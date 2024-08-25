"use client"

import * as React from "react"
import type SimpleBarCore from "@tienphat0809/simplebar/packages/simplebar-core"

import { cn } from "@/lib/utils"
import SimpleBar from "@/components/simplebar"
import {
  ChatLineContainer,
  ChatLineWrapper,
  ChatListComp,
  ChatListWrapper,
} from "@/components/stream/chat/chat-list/style"
import styles from "@/components/stream/chat/chat-list/style.module.scss"

interface ChatListProps {
  messages?: { message: string; username: string; color: string }[]
  isPending: boolean
}

export default function ChatList({ messages, isPending }: ChatListProps) {
  const ref = React.useRef<SimpleBarCore | null>(null)

  React.useEffect(() => {
    if (ref.current) {
      const scrollElement = ref.current.contentWrapperEl as HTMLElement

      requestAnimationFrame(() => {
        scrollElement.scrollTop = 9999
      })
    }
  })

  return (
    <ChatListComp
      tabIndex={0}
      aria-label="Chat messages"
      aria-describedby="Exit-chat-container"
      style={{ opacity: 1 }}
      className={cn(
        styles["chat-list--default"],
        styles["font-scale--default"]
      )}
    >
      <div id="Exit-chat-container" hidden>
        Press Escape or Shift + Tab at any point within chat messages to exit.
      </div>

      <ChatListWrapper style={{ position: "relative" }}>
        <SimpleBar
          ref={ref}
          forceVisible={"y"}
          placeHolderHidden={false}
          simpleContentWrapperStyle={{
            padding: "0",
          }}
        >
          <div className={styles["chat-scrollable-area__message-container"]}>
            {(!messages || messages.length < 50 || isPending) && (
              <div
                className={styles["chat-line__status"]}
                data-a-target={"chat-welcome-message"}
              >
                <span>Welcome to the chat room!</span>
              </div>
            )}

            {messages &&
              !isPending &&
              messages.map(({ message, username, color }, index) => (
                <div
                  key={index}
                  className={styles["chat-line__message"]}
                  data-a-target={"chat-line-message"}
                  data-a-user={username}
                  tabIndex={0}
                >
                  <ChatLineWrapper>
                    <div
                      className={styles["chat-line__message-highlight"]}
                    ></div>

                    <ChatLineContainer>
                      <div className={styles["chat-line__username-wrapper"]}>
                        <span
                          className={styles["chat-line__username-container"]}
                        >
                          <span>
                            <span
                              className={styles["chat-author__display-name"]}
                              data-a-target={"chat-message-username"}
                              data-a-username={username}
                              data-test-selector={"message-username"}
                              style={{ color }}
                            >
                              {username}
                            </span>
                          </span>
                        </span>
                      </div>

                      <span aria-hidden={true}>: </span>

                      <span data-a-target={"chat-line-message-body"}>
                        <span data-a-target={"chat-message-text"}>
                          {message}
                        </span>
                      </span>
                    </ChatLineContainer>
                  </ChatLineWrapper>
                </div>
              ))}
          </div>
        </SimpleBar>
      </ChatListWrapper>

      <div tabIndex={0}></div>
    </ChatListComp>
  )
}
