import * as React from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import SimpleBar from "@/components/simplebar"
import styles from "@/styles/components/stream/chat/user-chat-setting.module.scss"

export default function UserChatSetting() {
  return (
    <DropdownMenuContent
      align={"end"}
      className={styles["chat-settings-balloon"]}
    >
      <div className={styles["chat-settings__popover"]}>
        <div className={styles["chat-settings__header"]}>
          <div className={styles[""]}></div>

          <div className={styles["chat-header-wrapper"]}>
            <p className={styles["chat-header-text"]}>Chat Settings</p>
          </div>

          <div className={styles["close-btn"]}></div>
        </div>

        <SimpleBar
          forceVisible={"y"}
          style={{
            maxHeight: "373px",
          }}
        >
          <div className={styles["chat-settings__content"]}>
            <div>
              <div className={styles["chat-setting-placeholder"]}>
                <p className={styles["chat-setting-placeholder-text"]}>
                  MY PREFERENCES
                </p>
              </div>

              <div className={styles["chat-setting-item-wrapper"]}>
                <Button className={styles["chat-setting-button-wrapper"]}>
                  <div className={styles["chat-setting-button-container"]}>
                    <div className={styles["chat-setting-button-title"]}>
                      Popout Chat
                    </div>

                    <div className={styles["chat-setting-button-icon-wrapper"]}>
                      <div
                        className={styles["chat-setting-button-icon-container"]}
                      >
                        <Icons.popup />
                      </div>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </SimpleBar>
      </div>
    </DropdownMenuContent>
  )
}
