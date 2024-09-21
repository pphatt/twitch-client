"use client"

import * as React from "react"
import { cn } from "@/lib"
import { useCacheLayout } from "@/store/persistent/layout"

import { Hint } from "@/components/common/hint"
import { Icons } from "@/components/icons"
import {
  RightColumnToggleCollapseButton,
  RightColumnToggleCollapseButtonContainer,
  RightColumnToggleCollapseButtonOverlay,
  RightColumnToggleCollapseButtonWrapper,
  ToggleVisibilityRightColumn,
  ToggleVisibilityRightColumnWrapper,
} from "@/components/stream/chat/chat-toggle/style"
import styles from "@/components/stream/chat/chat-toggle/style.module.scss"

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
    <ToggleVisibilityRightColumn
      className={cn(
        "toggle-visibility__right-column",
        styles["right-column__toggle-visibility"],
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
      <ToggleVisibilityRightColumnWrapper>
        <Hint
          delayDuration={200}
          skipDelayDuration={0}
          side={"right"}
          label={label}
        >
          <RightColumnToggleCollapseButton
            data-a-target="right-column__toggle-collapse-btn"
            aria-label="Collapse Chat"
            onClick={onToggle}
          >
            <RightColumnToggleCollapseButtonWrapper>
              <RightColumnToggleCollapseButtonContainer>
                <RightColumnToggleCollapseButtonOverlay>
                  <div
                    style={{
                      paddingBottom: "100%",
                    }}
                  ></div>

                  <Icon />
                </RightColumnToggleCollapseButtonOverlay>
              </RightColumnToggleCollapseButtonContainer>
            </RightColumnToggleCollapseButtonWrapper>
          </RightColumnToggleCollapseButton>
        </Hint>
      </ToggleVisibilityRightColumnWrapper>
    </ToggleVisibilityRightColumn>
  )
}
