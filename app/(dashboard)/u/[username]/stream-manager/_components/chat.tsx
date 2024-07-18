import * as React from "react"

import { chatMessages } from "@/config/data"
import ChatInputForm from "@/components/forms/chat-input-form"
import SimpleBar from "@/components/simplebar"
import styles from "@/styles/application/dashboard/stream-manager/_components/chat.module.scss"

export default function Chat() {
  return (
    <section className={styles["layout-wrapper"]}>
      <div className={styles["chat-block-wrapper"]}>
        <SimpleBar
          forceVisible={"y"}
          className={styles["chat-block-container"]}
          simpleContentWrapperStyle={{
            padding: "0",
          }}
        >
          <div className={styles["chat-block-overlay"]}>
            <div className={styles["chat__wrapper"]}>
              <div
                className={styles["chat-line__status"]}
                data-a-target={"chat-welcome-message"}
              >
                <span>Welcome to the chat room!</span>
              </div>

              {chatMessages.map(({ message, username, color }, index) => (
                <div
                  key={index}
                  className={styles["chat-line__message"]}
                  data-a-target={"chat-line-message"}
                  data-a-user={username}
                  tabIndex={0}
                >
                  <div className={styles["chat-line-wrapper"]}>
                    <div
                      className={styles["chat-line__message-highlight"]}
                    ></div>

                    <div className={styles["chat-line-container"]}>
                      <div className={styles["chat-line__username-wrapper"]}>
                        <span
                          className={styles["chat-line__username-container"]}
                        >
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
                        <span data-a-target={"chat-message-text"}>
                          {message}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SimpleBar>
      </div>

      <ChatInputForm />
    </section>
  )
}
