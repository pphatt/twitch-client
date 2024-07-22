import * as React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import ChatInput from "@/components/stream/chat/chat-input"
import styles from "@/styles/components/stream/chat/chat-input-form.module.scss"

interface ChatInputProps {
  message: string
  setMessage: (message: string) => void
  onSubmit: () => void
}

export default function ChatInputForm({
  message,
  setMessage,
  onSubmit,
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
              <Button className={styles["chat-setting-button"]}>
                <div className={styles["inner-chat-setting-button-wrapper"]}>
                  <div
                    className={styles["inner-chat-setting-button-container"]}
                  >
                    <Icons.settings />
                  </div>
                </div>
              </Button>
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
