"use client"

import * as React from "react"
import { useChatSidebar } from "@/store/state/chat"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import styles from "@/styles/application/channel/_components/chat-toggle.module.scss"

export default function ChatToggle() {
  const { collapsed, onExpand, onCollapse } = useChatSidebar()

  const Icon = collapsed ? Icons.collapse : Icons.expandArrowFromLine

  const onToggle = () => {
    if (collapsed) {
      onExpand()
    } else {
      onCollapse()
    }
  }

  const label = collapsed ? "Expand" : "Collapse"

  return (
    <div
      className={cn(
        styles["right-column__toggle-visibility"],
        styles["toggle-visibility__right-column"],
        {
          [`${styles["toggle-visibility__right-column--expanded"]}`]:
            !collapsed,
        },
        {
          [`${styles["toggle-visibility__right-column--collapsed"]}`]:
            collapsed,
        }
      )}
    >
      <div className={styles["toggle-visibility__right-column-wrapper"]}>
        <Button
          className={styles["right-column__toggle-collapse-btn"]}
          data-a-target="right-column__toggle-collapse-btn"
          aria-label="Collapse Chat"
          onClick={onToggle}
        >
          <div className={styles["right-column__toggle-collapse-btn-wrapper"]}>
            <div
              className={styles["right-column__toggle-collapse-btn-container"]}
            >
              <div
                className={styles["right-column__toggle-collapse-btn-overlay"]}
              >
                <div
                  style={{
                    paddingBottom: "100%",
                  }}
                ></div>

                <Icon />
              </div>
            </div>
          </div>
        </Button>
      </div>
    </div>
  )
}
