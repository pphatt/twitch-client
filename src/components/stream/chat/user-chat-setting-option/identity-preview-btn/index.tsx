import * as React from "react"

import { DropdownMenuItemContainer } from "@/components/ui/dropdown-menu-fork"
import { Hint } from "@/components/common/hint"
import { Icons } from "@/components/icons"
import {
  ChatBadgeWrapper,
  EditAppearanceButton,
  EditAppearanceIcon,
  IdentityPreviewButton,
  IdentityTextContainer,
  IdentityTextWrapper,
} from "@/components/stream/chat/user-chat-setting-option/identity-preview-btn/style"
import styles from "@/components/stream/chat/user-chat-setting-option/identity-preview-btn/style.module.scss"

export default function IdentityPreviewBtn() {
  return (
    <IdentityPreviewButton>
      <DropdownMenuItemContainer>
        <IdentityTextWrapper>
          <Hint label={"Broadcaster"} align={"start"}>
            <ChatBadgeWrapper>
              <img
                alt="Broadcaster"
                src={"/badge/broadcaster-badge.png"}
                aria-label="Broadcaster badge"
                className={styles["chat-badge"]}
              />
            </ChatBadgeWrapper>
          </Hint>

          <IdentityTextContainer>
            <span
              data-a-target="edit-display-name"
              style={{
                color: "rgb(218, 165, 32)",
              }}
            >
              tienphat111
            </span>
          </IdentityTextContainer>
        </IdentityTextWrapper>

        <EditAppearanceButton>
          <span>Edit</span>

          <EditAppearanceIcon>
            <Icons.arrowRight />
          </EditAppearanceIcon>
        </EditAppearanceButton>
      </DropdownMenuItemContainer>
    </IdentityPreviewButton>
  )
}
