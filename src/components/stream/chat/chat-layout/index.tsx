"use client"

import * as React from "react"
import { useChatObserver } from "@/store/state/channel-chat.state"
import { findIndex } from "@/utils/common"
import {
  useChat,
  useConnectionState,
  useRemoteParticipant,
  type ReceivedChatMessage,
} from "@livekit/components-react"
import { ConnectionState } from "livekit-client"

import ChatDisable from "@/components/stream/chat/chat-disable"
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

  username: string
  hostIdentity: string
  color: string

  accessToken: string | undefined
}

export default function Chat({
  popout = false,
  username,
  hostIdentity,
  isCreator = true,
  color,
  accessToken,
}: ChatProps) {
  const { hide } = useChatObserver()

  const connectionState = useConnectionState()
  const participant = useRemoteParticipant(hostIdentity)

  const isOnline = participant && connectionState === ConnectionState.Connected

  const isHidden = !isOnline

  const [message, setMessage] = React.useState("")

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalOldMessagesCount, setTotalOldMessagesCount] = React.useState(0)
  const [oldMessages, setOldMessages] = React.useState<ReceivedChatMessage[]>(
    []
  )

  const { chatMessages: messages, send } = useChat()

  // originally placed in chat-list but some decisions are made.
  const [isPausedChat, setIsPausedChat] = React.useState<boolean>(false)

  const [firstMessageIdInQueue, setFirstMessageIdInQueue] = React.useState<
    number | null
  >(null)
  const [lastMessageId, setLastMessageId] = React.useState<number | null>(null)

  const findFirstMessageIndex = React.useMemo(() => {
    return findIndex(
      messages,
      ({ timestamp }) => timestamp === firstMessageIdInQueue
    )
  }, [firstMessageIdInQueue, messages])

  const findLastMessageIndex = React.useMemo(() => {
    return findIndex(messages, ({ timestamp }) => timestamp === lastMessageId)
  }, [lastMessageId, messages])

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
      if (!message) return

      if (!send) return

      void send(message)

      computeOldMessages()

      setMessage("")
      setIsPausedChat(false)
    },
    [computeOldMessages, send]
  )

  /* tracking the new messages quantity */
  const newMessagesStack = React.useMemo(() => {
    if (!messages) {
      return null
    }

    if (lastMessageId === null) {
      return null
    }

    const index = findLastMessageIndex

    if (index === -1) {
      return null
    }

    return messages.slice(index + 1)
  }, [findLastMessageIndex, lastMessageId, messages])

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

    // this run initially before anything else with the total messages is less than 100
    if (messages?.length < 100) {
      return messages
    }

    // this is the normal take 150 latest messages when there is no pause (correct behavior)
    if (lastMessageId === null || firstMessageIdInQueue === null) {
      return messages.slice(-150)
    }

    const index = findFirstMessageIndex

    // this will update when there is a paused
    // it will update new messages based on the last stop as scroll up
    if (
      oldMessages?.length === 0 &&
      newMessagesStack &&
      newMessagesStack.length < 50
    ) {
      return messages.slice(index)
    }

    if (
      oldMessages &&
      oldMessages.length === 0 &&
      newMessagesStack &&
      newMessagesStack.length >= 50
    ) {
      return messages.slice(-200)
    }

    // this trigger when the paused happened, and the total messages in queue exceed 150 and the old messages > 0
    // oldMessages && oldMessages.length > 0
    return messages.slice(-(totalOldMessagesCount + 150))
  }, [
    messages,
    lastMessageId,
    firstMessageIdInQueue,
    findFirstMessageIndex,
    oldMessages,
    newMessagesStack,
    totalOldMessagesCount,
  ])

  if (isHidden) {
    return <ChatDisable username={username} />
  }

  if (hide) {
    return <ChatHide />
  }

  return (
    <ChatRoomComponentLayout>
      <div className={styles["chat-room__content"]}>
        <ChatList
          color={color}
          previousMessages={oldMessages}
          messages={limitMessagesQueue}
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
          accessToken={accessToken}
        />
      </div>
    </ChatRoomComponentLayout>
  )
}
