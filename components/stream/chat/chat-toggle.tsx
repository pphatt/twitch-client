"use client"

import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Hint } from "@/components/hint"
import { Icons } from "@/components/icons"
import styles from "@/styles/components/stream/chat/chat-toggle.module.scss"

export default function ChatToggle() {
  const { isRightColumnClosedByUserAction, onExpand, onCollapse } =
    useCacheLayout()

  const Icon = isRightColumnClosedByUserAction
    ? Icons.collapse
    : Icons.expandArrowFromLine

  const onToggle = () => {
    if (isRightColumnClosedByUserAction) {
      onExpand()
    } else {
      onCollapse()
    }
  }

  const label = isRightColumnClosedByUserAction ? "Expand" : "Collapse"

  return (
    <div
      className={cn(
        styles["right-column__toggle-visibility"],
        styles["toggle-visibility__right-column"],
        {
          [`${styles["toggle-visibility__right-column--expanded"]}`]:
            !isRightColumnClosedByUserAction,
        },
        {
          [`${styles["toggle-visibility__right-column--collapsed"]}`]:
            isRightColumnClosedByUserAction,
        }
      )}
    >
      <div className={styles["toggle-visibility__right-column-wrapper"]}>
        <Hint
          delayDuration={200}
          skipDelayDuration={0}
          side={"right"}
          label={label}
        >
          <Button
            className={styles["right-column__toggle-collapse-btn"]}
            data-a-target="right-column__toggle-collapse-btn"
            aria-label="Collapse Chat"
            onClick={onToggle}
          >
            <div
              className={styles["right-column__toggle-collapse-btn-wrapper"]}
            >
              <div
                className={
                  styles["right-column__toggle-collapse-btn-container"]
                }
              >
                <div
                  className={
                    styles["right-column__toggle-collapse-btn-overlay"]
                  }
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
        </Hint>
      </div>
    </div>
  )
}
