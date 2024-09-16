"use client"

import * as React from "react"
import { useChatObserver } from "@/store/state/channel-chat"
import { faker } from "@faker-js/faker"

import { chatMessages } from "@/config/data"
import { getRandomRgb, sleep } from "@/lib/utils"
import ChatHide from "@/components/stream/chat/chat-hide"
import ChatInputForm from "@/components/stream/chat/chat-input-form"
import { ChatRoomComponentLayout } from "@/components/stream/chat/chat-layout/style"
import styles from "@/components/stream/chat/chat-layout/style.module.scss"
import ChatList from "@/components/stream/chat/chat-list"

interface ChatProps {
  /*
   * popout is for chat setting when popout.
   * Default is false when the state is not popout.
   * When the chat gets popout, it will receive a true that prevents getting more popout
   *  */
  popout?: boolean

  /*
   * Check if current chat is the channel owner (or mod) or not.
   * If it is the channel owner (or mod), show channel owner chat else shows normal user chat instead
   * Maybe would replace this with isAuth or something like that
   * */
  isCreator?: boolean
}

export default function Chat({ popout = false, isCreator = true }: ChatProps) {
  const { hide } = useChatObserver()

  const [message, setMessage] = React.useState("")

  // this would be replaced with fetching messages from server
  const [messages, setMessages] =
    React.useState<{ message: string; username: string; color: string }[]>()

  const [isPending, startTransition] = React.useTransition()

  // originally placed in chat-list but some decisions are made.
  const [isPausedChat, setIsPausedChat] = React.useState<boolean>(false)

  const onSubmit = React.useCallback((message: string) => {
    // if (!send) return;

    // void send(message);

    if (!message) {
      return
    }

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

    setMessage("")
    setIsPausedChat(false)
  }, [])

  const limitMessagesQueue = React.useMemo(() => {
    if (!messages) {
      return
    }

    if (messages?.length > 100) {
      return messages.slice(messages.length - 100, messages?.length)
    }

    return messages
  }, [messages])

  // NOTE: use for chat dummy-data
  // React.useEffect(() => {
  //   const simpleSimulationMessageFlow = setInterval(() => {
  //     onSubmit()
  //   }, 1000)
  //
  //   return () => clearInterval(simpleSimulationMessageFlow)
  // }, [onSubmit])

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
    <ChatRoomComponentLayout>
      <div className={styles["chat-room__content"]}>
        <ChatList
          messages={limitMessagesQueue}
          isPending={isPending}
          isPausedChat={isPausedChat}
          setIsPausedChat={setIsPausedChat}
        />

        <ChatInputForm
          message={message}
          setMessage={setMessage}
          onSubmit={onSubmit}
          popout={popout}
          isCreator={isCreator}
        />
      </div>
    </ChatRoomComponentLayout>
  )
}
