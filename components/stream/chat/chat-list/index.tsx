import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout"
import type SimpleBarCore from "@tienphat0809/simplebar/packages/simplebar-core"
import { format } from "date-fns"

import { cn } from "@/lib"
import { useEventListener } from "@/hooks/useEventListener"
import SimpleBar from "@/components/simplebar"
import {
  ChatLineContainer,
  ChatLineNew,
  ChatLineNewText,
  ChatLineNewTextWrapper,
  ChatLineWrapper,
  ChatListComp,
  ChatListWrapper,
  SeparatorLine,
} from "@/components/stream/chat/chat-list/style"
import styles from "@/components/stream/chat/chat-list/style.module.scss"
import ChatPausedFooter from "@/components/stream/chat/chat-paused-footer"

interface ChatListProps {
  previousMessages?: {
    id: string
    message: string
    username: string
    color: string
    timestamp: number
  }[]
  messages?: {
    id: string
    message: string
    username: string
    color: string
    timestamp: number
  }[]
  isPending: boolean

  isPausedChat: boolean
  setIsPausedChat: React.Dispatch<React.SetStateAction<boolean>>

  lastMessageId: string | null
  setLastMessageId: React.Dispatch<React.SetStateAction<string | null>>

  newMessagesStack:
    | {
        id: string
        message: string
        username: string
        color: string
        timestamp: number
      }[]
    | null

  setFirstMessageIdInQueue: React.Dispatch<React.SetStateAction<string | null>>
}

export default function ChatList({
  previousMessages,
  messages,
  isPending,
  isPausedChat,
  setIsPausedChat,
  lastMessageId,
  setLastMessageId,
  newMessagesStack,
  setFirstMessageIdInQueue,
}: ChatListProps) {
  const ref = React.useRef<SimpleBarCore | null>(null)
  const listRef = React.useRef<HTMLDivElement>(null)

  const { isRightColumnClosedByUserAction } = useCacheLayout()

  const scrollToLastMessage = () => {
    if (!listRef.current) {
      return
    }

    const lastChild = listRef.current.lastElementChild

    if (!lastChild) {
      return
    }

    lastChild.scrollIntoView({
      block: "end",
      inline: "nearest",
      behavior: "instant",
    })

    if (!ref.current) {
      return
    }

    const scrollElement = ref.current.contentWrapperEl as HTMLElement

    requestAnimationFrame(() => {
      scrollElement.scrollTop = 9999
    })
  }

  React.useEffect(() => {
    if (!isPausedChat) {
      scrollToLastMessage()
    }
  }, [isPausedChat, isRightColumnClosedByUserAction, messages])

  useEventListener("resize", scrollToLastMessage)

  React.useEffect(() => {
    const handleScroll = () => {
      const element = ref.current?.getScrollElement() as HTMLElement

      const isScrolledToBottom =
        element.scrollHeight - element.scrollTop - element.clientHeight

      if (isScrolledToBottom <= 0) {
        setIsPausedChat(false)
        setLastMessageId(null)
        return
      }

      if (isScrolledToBottom > 200) {
        setIsPausedChat(true)

        if (!messages || lastMessageId) {
          return
        }

        const firstMessage = messages[0]
        const lastMessage = messages[messages.length - 1]

        if (!lastMessage || !firstMessage) {
          return
        }

        setLastMessageId(lastMessage.id)
        setFirstMessageIdInQueue(firstMessage.id)
        return
      }
    }

    ref.current?.getScrollElement()?.addEventListener("scroll", handleScroll)

    return () =>
      ref.current
        ?.getScrollElement()
        ?.removeEventListener("scroll", handleScroll)
  }, [lastMessageId, messages])

  const handleClickToLatestMessage = () => {
    scrollToLastMessage()

    setIsPausedChat(false)
    setLastMessageId(null)
    setFirstMessageIdInQueue(null)
  }

  return (
    <ChatListComp
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

      <ChatListWrapper style={{ position: "relative" }}>
        <SimpleBar
          ref={ref}
          forceVisible={"y"}
          placeHolderHidden={false}
          simpleContentWrapperStyle={{
            padding: "0",
          }}
        >
          <div
            className={cn(styles["chat-scrollable-area__message-container"], {
              [`${styles["chat-scrollable-area__message-container--paused"]}`]:
                isPausedChat,
            })}
            ref={listRef}
          >
            <DisplayPreviousMessages
              previousMessages={previousMessages ?? []}
              isPending={isPending}
            />

            <WelcomeMessage
              newMessagesLength={messages?.length ?? 0}
              isPending={isPending}
            />

            <DisplayLatestMessages
              messages={messages ?? []}
              isPending={isPending}
            />
          </div>
        </SimpleBar>

        {isPausedChat && (
          <ChatPausedFooter
            clickToLatestMessage={handleClickToLatestMessage}
            newMessagesStackLength={newMessagesStack?.length ?? 0}
          />
        )}
      </ChatListWrapper>

      <div tabIndex={0}></div>
    </ChatListComp>
  )
}

/*
 *
 * old-message: related
 * -> exist old-message -> not related
 *
 * is-paused: not related
 *
 * new-message: related
 * -> if new-messages.length > 150 -> hidden
 *
 * is-pending: related
 * -> not render out until DOM mounted
 *
 * */
interface WelcomeMessageProps {
  newMessagesLength: number
  isPending: boolean
}

function WelcomeMessage({ newMessagesLength, isPending }: WelcomeMessageProps) {
  // have to sync when the first messages get removed
  if (newMessagesLength >= 150) {
    return
  }

  return (
    <>
      {!isPending && (
        <div
          className={styles["chat-line__status"]}
          data-a-target={"chat-welcome-message"}
        >
          <span>Welcome to the chat room!</span>
        </div>
      )}

      {newMessagesLength > 0 && !isPending && (
        <ChatLineNew className={styles["chat-line__message"]}>
          <SeparatorLine
            className={styles["live-message-separator-line__hr"]}
          />

          <ChatLineNewTextWrapper>
            <ChatLineNewText>New</ChatLineNewText>
          </ChatLineNewTextWrapper>
        </ChatLineNew>
      )}
    </>
  )
}

interface DisplayPreviousMessagesProps {
  previousMessages: {
    id: string
    message: string
    username: string
    color: string
    timestamp: number
  }[]
  isPending: boolean
}

function DisplayPreviousMessages({
  previousMessages,
  isPending,
}: DisplayPreviousMessagesProps) {
  return (
    <>
      {previousMessages &&
        !isPending &&
        previousMessages.map(
          ({ message, username, color, timestamp }, index) => (
            <div
              key={index}
              className={styles["chat-line__message"]}
              data-a-target={"chat-line-message"}
              data-a-user={username}
              tabIndex={0}
            >
              <ChatLineWrapper>
                <div className={styles["chat-line__message-highlight"]}></div>

                <ChatLineContainer className="chat-line__message-container">
                  <span
                    className={styles["chat-line__timestamp"]}
                    data-a-target="chat-timestamp"
                  >
                    {format(new Date(timestamp * 1000), "h:mm")}
                  </span>

                  <div className={styles["chat-line__username-wrapper"]}>
                    <span className={styles["chat-line__username-container"]}>
                      <span>
                        <span
                          className={styles["chat-author__display-name"]}
                          data-a-target={"chat-message-username"}
                          data-a-username={username}
                          data-test-selector={"message-username"}
                          style={{ color }}
                        >
                          {username}
                        </span>
                      </span>
                    </span>
                  </div>

                  <span aria-hidden={true}>: </span>

                  <span data-a-target={"chat-line-message-body"}>
                    <span data-a-target={"chat-message-text"}>{message}</span>
                  </span>
                </ChatLineContainer>
              </ChatLineWrapper>
            </div>
          )
        )}
    </>
  )
}

interface DisplayLatestMessagesProps {
  messages: {
    id: string
    message: string
    username: string
    color: string
    timestamp: number
  }[]
  isPending: boolean
}

function DisplayLatestMessages({
  messages,
  isPending,
}: DisplayLatestMessagesProps) {
  return (
    <>
      {messages &&
        !isPending &&
        messages.map(({ message, username, color }, index) => (
          <div
            key={index}
            className={styles["chat-line__message"]}
            data-a-target={"chat-line-message"}
            data-a-user={username}
            tabIndex={0}
            data-index={index + 1}
          >
            <ChatLineWrapper>
              <div className={styles["chat-line__message-highlight"]}></div>

              <ChatLineContainer>
                <div className={styles["chat-line__username-wrapper"]}>
                  <span className={styles["chat-line__username-container"]}>
                    <span>
                      <span
                        className={styles["chat-author__display-name"]}
                        data-a-target={"chat-message-username"}
                        data-a-username={username}
                        data-test-selector={"message-username"}
                        style={{ color }}
                      >
                        {username}
                      </span>
                    </span>
                  </span>
                </div>

                <span aria-hidden={true}>: </span>

                <span data-a-target={"chat-line-message-body"}>
                  <span data-a-target={"chat-message-text"}>{message}</span>
                </span>
              </ChatLineContainer>
            </ChatLineWrapper>
          </div>
        ))}
    </>
  )
}
