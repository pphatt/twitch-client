import * as React from "react"
import { useChatObserver } from "@/store/state/channel-chat"

import { Button } from "@/components/ui/button"
import {
  DropdownMenuItemContainer,
  DropdownMenuItemTitle,
  DropdownMenuItemWrapper,
} from "@/components/ui/dropdown-menu-fork"
import { Icons } from "@/components/icons"
import IconsWrapper from "@/components/icons-wrapper"
import styles from "@/styles/components/stream/chat/user-chat-setting-option/pop-out-chat.module.scss"

export default function PopOutChat() {
  const { setHide } = useChatObserver()

  const handlePopOut = React.useCallback(() => {
    const win = window.open(
      "/popout/tienphat/chat",
      "_blank",
      "top=0,left=0,width=400,height=650,popup=true"
    ) as Window

    const timer = setInterval(function () {
      if (win.closed) {
        setHide(false)
        clearInterval(timer)
      }
    }, 1)

    setHide(true)
  }, [setHide])

  return (
    <DropdownMenuItemWrapper>
      <Button className={styles["chat-setting-button"]} onClick={handlePopOut}>
        <DropdownMenuItemContainer>
          <DropdownMenuItemTitle>Popout Chat</DropdownMenuItemTitle>

          <IconsWrapper side={"right"}>
            <Icons.popup />
          </IconsWrapper>
        </DropdownMenuItemContainer>
      </Button>
    </DropdownMenuItemWrapper>
  )
}
