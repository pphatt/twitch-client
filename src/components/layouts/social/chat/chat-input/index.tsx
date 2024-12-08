import * as React from "react"
import TextareaAutosize from "react-textarea-autosize"

import styles from "@/components/layouts/social/chat/chat-input/style.module.scss"

interface ChatInputProps {
  message: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function ChatInput({ message, onChange }: ChatInputProps) {
  return (
    <TextareaAutosize
      value={message}
      onChange={onChange}
      autoComplete="off"
      placeholder="Type a message..."
      className={styles["textarea"]}
      minRows={1}
    />
  )
}
