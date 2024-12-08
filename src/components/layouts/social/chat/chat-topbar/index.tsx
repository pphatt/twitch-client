import * as React from "react"
import { Info } from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import styles from "@/components/layouts/social/chat/chat-topbar/style.module.scss"

import type { UserData } from "../mock-data"

interface ChatTopbarProps {
  selectedUser: UserData
}

export const TopbarIcons = [{ icon: Info }]

export default function ChatTopbar({ selectedUser }: ChatTopbarProps) {
  return (
    <div className={styles["chat-topbar-wrapper"]}>
      <div className={styles["chat-topbar-user-info-wrapper"]}>
        <Avatar className={styles["chat-topbar-user-info-avatar-wrapper"]}>
          <AvatarImage
            src={selectedUser.avatar}
            alt={selectedUser.name}
            width={6}
            height={6}
            className={styles["chat-topbar-user-info-avatar-image"]}
          />
        </Avatar>

        <div className={styles["user-info-username-wrapper"]}>
          <span className={styles["user-info-username-text"]}>
            {selectedUser.name}
          </span>

          <span className={styles["user-info-last-active-text"]}>
            Active 2 mins ago
          </span>
        </div>
      </div>

      <div className={styles["user-info-action-wrapper"]}>
        {TopbarIcons.map((icon, index) => (
          <Button key={index} className={styles["user-info-btn"]}>
            <icon.icon size={20} className="text-muted-foreground" />
          </Button>
        ))}
      </div>
    </div>
  )
}
