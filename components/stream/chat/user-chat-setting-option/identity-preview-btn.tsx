import * as React from "react"

import { Button } from "@/components/ui/button/button"
import { DropdownMenuItemContainer } from "@/components/ui/dropdown-menu-fork/dropdown-menu-fork"
import { Hint } from "@/components/common/hint/hint"
import { Icons } from "@/components/icons"
import styles from "@/styles/components/stream/chat/user-chat-setting-option/identity-preview-btn.module.scss"

export default function IdentityPreviewBtn() {
  return (
    <Button className={styles["identity-preview-btn"]}>
      <DropdownMenuItemContainer>
        <div className={styles["identity-text-wrapper"]}>
          <Hint label={"Broadcaster"} align={"start"}>
            <div className={styles["chat-badge-wrapper"]}>
              <img
                alt="Broadcaster"
                src={"/badge/broadcaster-badge.png"}
                aria-label="Broadcaster badge"
                className={styles["chat-badge"]}
              />
            </div>
          </Hint>

          <span className={styles["identity-text-container"]}>
            <span
              data-a-target="edit-display-name"
              style={{
                color: "rgb(218, 165, 32)",
              }}
            >
              tienphat111
            </span>
          </span>
        </div>

        <div className={styles["edit-appearance-button"]}>
          <span>Edit</span>

          <div className={styles["edit-appearance-icon"]}>
            <Icons.arrowRight />
          </div>
        </div>
      </DropdownMenuItemContainer>
    </Button>
  )
}
