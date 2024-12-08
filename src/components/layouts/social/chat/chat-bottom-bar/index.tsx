import * as React from "react"
import { SendHorizontal, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import styles from "@/components/layouts/social/chat/chat-bottom-bar/style.module.scss"
import ChatInput from "@/components/layouts/social/chat/chat-input"

export default function ChatBottomBar() {
  const [message, setMessage] = React.useState("")

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  console.log(message)

  return (
    <div className={styles["chat-bottom-wrapper"]}>
      <ChatInput message={message} onChange={handleInputChange} />

      {message.trim() ? (
        <Button
          onClick={() => {}}
          disabled={false}
          $variant="ghost"
          $size="icon"
          className={styles["send-btn"]}
        >
          <SendHorizontal size={22} className="text-muted-foreground" />
        </Button>
      ) : (
        <Button
          onClick={() => {}}
          disabled={false}
          $variant="ghost"
          $size="icon"
          className={styles["send-btn"]}
        >
          <ThumbsUp size={22} className="text-muted-foreground" />
        </Button>
      )}
    </div>
  )
}
