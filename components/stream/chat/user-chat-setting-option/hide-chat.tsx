import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenuItemContainer,
  DropdownMenuItemTitle,
  DropdownMenuItemWrapper,
} from "@/components/ui/dropdown-menu-fork"
import styles from "@/styles/components/stream/chat/user-chat-setting-option/hide-chat.module.scss"

export default function HideChat() {
  return (
    <DropdownMenuItemWrapper>
      <Button className={styles["chat-setting-button"]}>
        <DropdownMenuItemContainer>
          <DropdownMenuItemTitle>Hide Chat</DropdownMenuItemTitle>
        </DropdownMenuItemContainer>
      </Button>
    </DropdownMenuItemWrapper>
  )
}
