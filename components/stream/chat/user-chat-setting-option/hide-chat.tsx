import * as React from "react"
import { useChatObserver } from "@/store/state/channel-chat"

import { Button } from "@/components/ui/button"
import {
  DropdownMenuItemContainer,
  DropdownMenuItemTitle,
  DropdownMenuItemWrapper,
} from "@/components/ui/dropdown-menu-fork"
import styles from "@/styles/components/stream/chat/user-chat-setting-option/hide-chat.module.scss"

export default function HideChat() {
  const { hide, setHide } = useChatObserver()

  const handleHideChat = React.useCallback(() => {
    if (hide) {
      setHide(false)
      return
    }

    setHide(true)
  }, [hide, setHide])

  return (
    <DropdownMenuItemWrapper>
      <Button
        className={styles["chat-setting-button"]}
        onClick={handleHideChat}
      >
        <DropdownMenuItemContainer>
          <DropdownMenuItemTitle>Hide Chat</DropdownMenuItemTitle>
        </DropdownMenuItemContainer>
      </Button>
    </DropdownMenuItemWrapper>
  )
}
