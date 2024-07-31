import * as React from "react"

import { Button } from "@/components/ui/button/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu/dropdown-menu"
import { Icons } from "@/components/icons"
import ChatInput from "@/components/stream/chat/chat-input"
import UserChatSetting from "@/components/stream/chat/user-chat-setting"
import styles from "@/styles/components/stream/chat/chat-input-form.module.scss"

interface ChatInputProps {
  message: string
  setMessage: (message: string) => void
  onSubmit: () => void

  popout: boolean

  isCreator: boolean
}

export default function ChatInputForm({
  message,
  setMessage,
  onSubmit,
  popout,
  isCreator,
}: ChatInputProps) {
  const handleSubmit = () => {
    if (!message) return

    onSubmit()
  }

  return (
    <div className={styles["chat-input-wrapper"]}>
      <div></div>

      <div>
        <div className={styles["chat-input-container"]}>
          <div className={styles["chat-input-layout-wrapper"]}>
            <div className={styles["chat-input-layout-container"]}>
              <div className={styles["chat-input-layout"]}>
                <div className={styles["chat-input__wrapper"]}>
                  <div className={styles["chat-input__container"]}>
                    <ChatInput
                      message={message}
                      setMessage={setMessage}
                      submit={handleSubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["chat-input__buttons-wrapper"]}>
          <div className={styles["chat-input__buttons-container"]}>
            <div className={styles["chat-setting-wrapper"]}>
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button className={styles["chat-setting-button"]}>
                    <div
                      className={styles["inner-chat-setting-button-wrapper"]}
                    >
                      <div
                        className={
                          styles["inner-chat-setting-button-container"]
                        }
                      >
                        <Icons.settings />
                      </div>
                    </div>
                  </Button>
                </DropdownMenuTrigger>

                <UserChatSetting popout={popout} isCreator={isCreator} />
              </DropdownMenu>
            </div>

            <div className={styles["chat-button-wrapper"]}>
              <div className={styles["chat-button-container"]}>
                <Button
                  className={styles["chat-button"]}
                  onClick={handleSubmit}
                >
                  <div className={styles["inner-chat-button-wrapper"]}>
                    Chat
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
