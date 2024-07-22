"use client"

import * as React from "react"
import { faker } from "@faker-js/faker"

import { chatMessages } from "@/config/data"
import { getRandomRgb, sleep } from "@/lib/utils"
import ChatInputForm from "@/components/stream/chat/chat-input-form"
import ChatList from "@/components/stream/chat/chat-list"
import styles from "@/styles/components/stream/chat/chat.module.scss"

export default function Chat() {
  const [message, setMessage] = React.useState("")

  // this would be replaced with fetching messages from server
  const [messages, setMessages] =
    React.useState<{ message: string; username: string; color: string }[]>()

  const [isPending, startTransition] = React.useTransition()

  const onSubmit = () => {
    // if (!send) return;

    // void send(message);

    if (messages) {
      setMessages((prevMessages) => {
        const username = faker.internet.userName()
        const color = getRandomRgb()

        const messageInfo = {
          username,
          color,
          message,
        }

        if (prevMessages) {
          return [...prevMessages, messageInfo]
        }

        return [messageInfo]
      })
    }

    setMessage("")
  }

  React.useEffect(() => {
    startTransition(async () => {
      await sleep(3000)
      setMessages(chatMessages)
    })
  }, [])

  return (
    <section className={styles["chat-room-component-layout"]}>
      <div className={styles["chat-room__content"]}>
        <ChatList messages={messages} isPending={isPending} />

        <ChatInputForm
          message={message}
          setMessage={setMessage}
          onSubmit={onSubmit}
        />
      </div>
    </section>
  )
}
