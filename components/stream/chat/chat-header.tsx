import * as React from "react"

import styles from "@/styles/components/stream/chat/chat-header.module.scss"

export default function ChatHeader() {
  return (
    <div className={styles["stream-chat-header"]} role="region">
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
  )
}
