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

  const [totalOldMessagesCount, setTotalOldMessagesCount] = React.useState(0)
  const [oldMessages, setOldMessages] = React.useState<
    {
      id: string
      message: string
      username: string
      color: string
      timestamp: number
    }[]
  >()

  // this would be replaced with fetching messages from server
  // (this represent a messages queue on the server)
  const [messages, setMessages] = React.useState<
    {
      id: string
      message: string
      username: string
      color: string
      timestamp: number
    }[]
  >()

  const [isPending, startTransition] = React.useTransition()

  // originally placed in chat-list but some decisions are made.
  const [isPausedChat, setIsPausedChat] = React.useState<boolean>(false)

  const [firstMessageIdInQueue, setFirstMessageIdInQueue] = React.useState<
    string | null
  >(null)
  const [lastMessageId, setLastMessageId] = React.useState<string | null>(null)

  const computeOldMessages = React.useCallback(() => {
    if (!messages || !oldMessages) {
      return
    }

    if (messages.length >= 150) {
      setOldMessages(oldMessages.slice(1))
    }
  }, [messages, oldMessages])

  const onSubmit = React.useCallback(
    (message: string) => {
      // if (!send) return;

      // void send(message);

      if (!message) {
        return
      }

      setMessages((prevMessages) => {
        const id = faker.database.mongodbObjectId()
        const username = faker.internet.userName()
        const color = getRandomRgb()

        const messageInfo = {
          id,
          username,
          color,
          message,
          timestamp: Date.now(),
        }

        if (prevMessages) {
          return [...prevMessages, messageInfo]
        }

        return [messageInfo]
      })

      computeOldMessages()

      setMessage("")
      setIsPausedChat(false)
    },
    [computeOldMessages]
  )

  const limitMessagesQueue = React.useMemo(() => {
    if (!messages) {
      return
    }

    // NOTE: the sort message is based on timestamp
    /*
     * initial load -> take messages that 20s old
     *
     * count if the message exceed 150 messages -> remove old messages
     *
     * maybe have a state tracking the first render message.
     * if it scroll render from the first message id to the last
     * else take last 150
     *
     * */

    // this check when new messages hit more than 100 messages
    if (messages?.length < 100) {
      return messages
    }

    // this check for the chat-paused
    // it will update new messages based on the last stop as scroll up
    if (lastMessageId === null || firstMessageIdInQueue === null) {
      return messages.slice(-(totalOldMessagesCount + 150))
    }

    const messageIndex = messages.findIndex(
      ({ id }) => id === firstMessageIdInQueue
    )

    const newMessagesQueue = messages.slice(messageIndex)

    // 15 + 150
    if (newMessagesQueue.length >= totalOldMessagesCount + 150) {
      return messages.slice(-(totalOldMessagesCount + 150))
    }

    return messages.slice(messageIndex)
  }, [firstMessageIdInQueue, lastMessageId, messages, totalOldMessagesCount])

  const newMessagesStack = React.useMemo(() => {
    if (!messages) {
      return null
    }

    if (lastMessageId === null) {
      return null
    }

    const elementIndex = messages.findIndex((item) => item.id === lastMessageId)

    if (elementIndex === -1) {
      return null
    }

    return messages.slice(elementIndex + 1)
  }, [lastMessageId, messages])

  // NOTE: use for chat dummy-data
  // React.useEffect(() => {
  //   const simpleSimulationMessageFlow = setInterval(() => {
  //     if (isPending) {
  //       return
  //     }
  //
  //     setMessages((prevMessages) => {
  //       const id = faker.database.mongodbObjectId()
  //       const username = faker.internet.userName()
  //       const color = getRandomRgb()
  //
  //       const messageInfo = {
  //         id,
  //         username,
  //         color,
  //         message: getRandomStuffRelatedToFood(),
  //         timestamp: Date.now(),
  //       }
  //
  //       if (prevMessages) {
  //         return [...prevMessages, messageInfo]
  //       }
  //
  //       return [messageInfo]
  //     })
  //
  //     computeOldMessages()
  //   }, 1000)
  //
  //   return () => clearInterval(simpleSimulationMessageFlow)
  // }, [computeOldMessages, isPending, onSubmit])

  React.useEffect(() => {
    startTransition(async () => {
      await sleep(2000)
      setOldMessages(chatMessages)
      setTotalOldMessagesCount(chatMessages.length)
    })
  }, [])

  if (hide) {
    return <ChatHide />
  }

  return (
    <ChatRoomComponentLayout>
      <div className={styles["chat-room__content"]}>
        <ChatList
          previousMessages={oldMessages}
          messages={limitMessagesQueue}
          isPending={isPending}
          isPausedChat={isPausedChat}
          lastMessageId={lastMessageId}
          setIsPausedChat={setIsPausedChat}
          newMessagesStack={newMessagesStack}
          setLastMessageId={setLastMessageId}
          setFirstMessageIdInQueue={setFirstMessageIdInQueue}
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
