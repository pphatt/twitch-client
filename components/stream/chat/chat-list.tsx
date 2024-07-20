"use client"

import * as React from "react"
import type SimpleBarCore from "simplebar/packages/simplebar-core"

import { chatMessages } from "@/config/data"
import { cn, sleep } from "@/lib/utils"
import SimpleBar from "@/components/simplebar"
import styles from "@/styles/components/stream/chat/chat-list.module.scss"

export default function ChatList() {
  const [messages, setMessages] =
    React.useState<{ message: string; username: string; color: string }[]>()

  const ref = React.useRef<SimpleBarCore | null>(null)

  const [isPending, startTransition] = React.useTransition()

  React.useEffect(() => {
    if (ref.current) {
      const scrollElement = ref.current.contentWrapperEl as HTMLElement
      scrollElement.scrollTop = Infinity
    }
  }, [messages])

  React.useEffect(() => {
    startTransition(async () => {
      await sleep(3000)
      setMessages(chatMessages)
    })
  }, [])

  return (
    <div
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

      <div
        style={{ position: "relative" }}
        className={styles["chat-list-wrapper"]}
      >
        <SimpleBar
          ref={ref}
          forceVisible={"y"}
          simpleContentWrapperStyle={{
            padding: "0",
          }}
        >
          <div className={styles["chat-scrollable-area__message-container"]}>
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
                  <div className={styles["chat-line-wrapper"]}>
                    <div
                      className={styles["chat-line__message-highlight"]}
                    ></div>

                    <div className={styles["chat-line-container"]}>
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
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </SimpleBar>
      </div>

      <div tabIndex={0}></div>
    </div>
  )
}
