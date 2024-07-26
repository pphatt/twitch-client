import * as React from "react"
import { useChatObserver } from "@/store/state/channel-chat"

import { Button } from "@/components/ui/button"
import styles from "@/styles/components/stream/chat/chat-hide.module.scss"

export default function ChatHide() {
  const { setHide } = useChatObserver()

  const handleHide = React.useCallback(() => {
    setHide(false)
  }, [setHide])

  return (
    <div className={styles["chat-hide-wrapper"]}>
      <div className={styles["chat-hide-text-wrapper"]}>
        <p className={styles["chat-hide-text"]}>Chat is hidden.</p>
      </div>

      <Button className={styles["chat-hide-btn"]} onClick={handleHide}>
        <div className={styles["chat-hide-wrapper"]}>
          <div className={styles["chat-hide-label"]}>Show Chat</div>
        </div>
      </Button>
    </div>
  )
}
