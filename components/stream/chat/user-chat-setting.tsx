import * as React from "react"

import {
  DropdownMenuContent,
  DropdownMenuHeader,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu-fork"
import SimpleBar from "@/components/simplebar"
import HideChat from "@/components/stream/chat/user-chat-setting-option/hide-chat"
import PopOutChat from "@/components/stream/chat/user-chat-setting-option/pop-out-chat"
import styles from "@/styles/components/stream/chat/user-chat-setting.module.scss"

export default function UserChatSetting() {
  const [maxHeight, setMaxHeight] = React.useState(700)

  React.useEffect(() => {
    const windowHeight = window.innerHeight

    const headerHeight = 40
    const height = Math.floor((windowHeight - headerHeight) / 2) - 7

    setMaxHeight(height > 0 ? height : 0)
  }, [])

  React.useEffect(() => {
    const rectWidth = () => {
      const windowHeight = window.innerHeight

      const headerHeight = 40
      const height = Math.floor((windowHeight - headerHeight) / 2) - 7

      setMaxHeight(height > 0 ? height : 0)
    }

    window.addEventListener("resize", rectWidth)
    return () => window.removeEventListener("resize", rectWidth)
  }, [])

  return (
    <DropdownMenuContent
      align={"end"}
      className={styles["chat-settings-balloon"]}
    >
      <div className={styles["chat-settings__popover"]}>
        <DropdownMenuHeader>Chat Settings</DropdownMenuHeader>

        <SimpleBar
          forceVisible={"y"}
          style={{
            maxHeight,
          }}
        >
          <div className={styles["chat-settings__content"]}>
            <div>
              <DropdownMenuLabel>MY PREFERENCES</DropdownMenuLabel>

              <HideChat />
              <PopOutChat />
              <PopOutChat />
              <PopOutChat />
              <PopOutChat />
              <PopOutChat />
              <PopOutChat />
            </div>
          </div>
        </SimpleBar>
      </div>
    </DropdownMenuContent>
  )
}