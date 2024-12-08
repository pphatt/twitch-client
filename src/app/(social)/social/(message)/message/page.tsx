import * as React from "react"

import ChatLayout from "@/components/layouts/social/chat/chat-layout"
import styles from "@/styles/application/social/message/page.module.scss"

export default function ChatPage() {
  return (
    <div className={styles["page-layout-wrapper"]}>
      <div className={styles["page-layout-container"]}>
        <div className={styles["page-layout-overlay"]}>
          <ChatLayout defaultLayout={undefined} />
        </div>
      </div>
    </div>
  )
}
