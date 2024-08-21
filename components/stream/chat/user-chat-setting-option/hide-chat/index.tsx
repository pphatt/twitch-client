import * as React from "react"
import { useChatObserver } from "@/store/state/channel-chat"

import {
  DropdownMenuItemContainer,
  DropdownMenuItemTitle,
  DropdownMenuItemWrapper,
} from "@/components/ui/dropdown-menu-fork"
import { ChatSettingButton } from "@/components/stream/chat/user-chat-setting-option/hide-chat/style"

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
      <ChatSettingButton onClick={handleHideChat}>
        <DropdownMenuItemContainer>
          <DropdownMenuItemTitle>Hide Chat</DropdownMenuItemTitle>
        </DropdownMenuItemContainer>
      </ChatSettingButton>
    </DropdownMenuItemWrapper>
  )
}
