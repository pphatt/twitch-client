"use client"

import Link from "next/link"
import { cn } from "@/utils/common"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Message } from "@/components/layouts/social/chat/mock-data"
import styles from "@/components/layouts/social/chat/side-bar/style.module.scss"

interface SidebarProps {
  isCollapsed: boolean
  chats: {
    name: string
    messages: Message[]
    avatar: string
    variant: "secondary" | "ghost"
  }[]
  onClick?: () => void
  isMobile: boolean
}

export function Sidebar({ chats, isCollapsed, isMobile }: SidebarProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className={styles["side-bar-layout-wrapper"]}
    >
      {!isCollapsed && (
        <div className={styles["side-bar-header-wrapper"]}>
          <div className={styles["side-bar-header-text-wrapper"]}>
            <p>Chats</p>
            <span>({chats.length})</span>
          </div>
        </div>
      )}

      <nav className={styles["list-user-wrapper"]}>
        {chats.map((chat, index) =>
          isCollapsed ? (
            <TooltipProvider key={index}>
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className={styles["list-user-item-collapsed-wrapper"]}
                  >
                    <Avatar className={styles["list-user-item-avatar-wrapper"]}>
                      <AvatarImage
                        src={chat.avatar}
                        alt={chat.avatar}
                        width={6}
                        height={6}
                        className={styles["list-user-item-avatar-image"]}
                      />
                    </Avatar>

                    <span className={styles["hidden-text"]}>{chat.name}</span>
                  </Link>
                </TooltipTrigger>

                <TooltipContent
                  side="right"
                  className={styles["tooltip-content"]}
                >
                  {chat.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Link
              key={index}
              href="#"
              className={styles["list-user-item-wrapper"]}
            >
              <Avatar className={styles["list-user-item-avatar-wrapper"]}>
                <AvatarImage
                  src={chat.avatar}
                  alt={chat.avatar}
                  width={6}
                  height={6}
                  className={styles["list-user-item-avatar-image"]}
                />
              </Avatar>

              <div className={styles["list-user-item-info"]}>
                <span>{chat.name}</span>
                {chat.messages.length > 0 && (
                  <span className={styles["list-user-item-text"]}></span>
                )}
              </div>
            </Link>
          )
        )}
      </nav>
    </div>
  )
}
