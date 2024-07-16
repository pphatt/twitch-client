import * as React from "react"

import { cn } from "@/lib/utils"
import styles from "@/styles/components/stream/chat/chat-list.module.scss"

export default function ChatList() {
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

      </div>

      <div tabIndex={0}></div>
    </div>
  )
}
