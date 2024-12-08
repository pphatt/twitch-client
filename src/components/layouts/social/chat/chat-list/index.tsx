import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

import ChatBottomBar from "@/components/layouts/social/chat/chat-bottom-bar"
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/layouts/social/chat/chat-bubble"
import styles from "@/components/layouts/social/chat/chat-list/style.module.scss"
import type {
  Message,
  UserData,
} from "@/components/layouts/social/chat/mock-data"

interface ChatListProps {
  messages: Message[]
  selectedUser: UserData
  sendMessage: (newMessage: Message) => void
}

const getMessageVariant = (messageName: string, selectedUserName: string) =>
  messageName !== selectedUserName ? "sent" : "received"

export default function ChatList({
  messages,
  selectedUser,
  sendMessage,
}: ChatListProps) {
  const messagesContainerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className={styles["chat-list-layout-wrapper"]}>
      <div
        ref={messagesContainerRef}
        className={styles["chat-list-layout-container"]}
      >
        <AnimatePresence>
          {messages.map((message, index) => {
            const variant = getMessageVariant(message.name, selectedUser.name)
            const nextVariant = getMessageVariant(
              messages[index === messages.length - 1 ? index : index + 1]!.name,
              selectedUser.name
            )

            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 1, y: 0, x: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                style={{ originX: 0.5, originY: 0.5 }}
                className={styles["chat-list-item-wrapper"]}
              >
                {/* Usage of ChatBubble component */}
                <ChatBubble variant={variant}>
                  {((variant === "received" && nextVariant !== variant) ||
                    message.isLoading) && (
                    <ChatBubbleAvatar src={message.avatar} />
                  )}

                  <ChatBubbleMessage
                    data-render={
                      variant === "received" &&
                      nextVariant === variant &&
                      index !== messages.length - 1
                    }
                    isLoading={message.isLoading}
                  >
                    {message.message}
                  </ChatBubbleMessage>
                </ChatBubble>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      <ChatBottomBar />
    </div>
  )
}
