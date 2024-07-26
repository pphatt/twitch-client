"use client"

import * as React from "react"
import { useChatObserver } from "@/store/state/channel-chat"
import { faker } from "@faker-js/faker"

import { chatMessages } from "@/config/data"
import { getRandomRgb, sleep } from "@/lib/utils"
import ChatHide from "@/components/stream/chat/chat-hide"
import ChatInputForm from "@/components/stream/chat/chat-input-form"
import ChatList from "@/components/stream/chat/chat-list"
import styles from "@/styles/components/stream/chat/chat.module.scss"

interface ChatProps {
  /*
  * popout is for chat setting when popout.
  * Default is false when the state is not popout.
  * When the chat gets popout, it will receive a true that prevents getting more popout
  *  */
  popout?: boolean
}

export default function Chat({ popout = false }: ChatProps) {
  const { hide } = useChatObserver()

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
    if (hide) {
      return
    }

    startTransition(async () => {
      await sleep(3000)
      setMessages(chatMessages)
    })
  }, [hide])

  if (hide) {
    return <ChatHide />
  }

  return (
    <section className={styles["chat-room-component-layout"]}>
      <div className={styles["chat-room__content"]}>
        <ChatList messages={messages} isPending={isPending} />

        <ChatInputForm
          message={message}
          setMessage={setMessage}
          onSubmit={onSubmit}
          popout={popout}
        />
      </div>
    </section>
  )
}
