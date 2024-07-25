import * as React from "react"

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
  return (
    <DropdownMenuItemWrapper>
      <Button className={styles["chat-setting-button"]}>
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
