import * as React from "react"

import ChatList from "@/components/layouts/social/chat/chat-list"
import styles from "@/components/layouts/social/chat/chat-panel/style.module.scss"
import ChatTopbar from "@/components/layouts/social/chat/chat-topbar"
import {
  type Message,
  type UserData,
} from "@/components/layouts/social/chat/mock-data"

interface ChatProps {
  messages?: Message[]
  selectedUser: UserData
  isMobile: boolean
}

export default function ChatPanel({
  messages,
  selectedUser,
  isMobile,
}: ChatProps) {
  return (
    <div className={styles["chat-panel-wrapper"]}>
      <ChatTopbar selectedUser={selectedUser} />

      <ChatList
        messages={messages!}
        selectedUser={selectedUser}
        sendMessage={() => {}}
      />
    </div>
  )
}
