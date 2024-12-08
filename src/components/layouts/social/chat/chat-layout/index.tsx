"use client"

import * as React from "react"
import { cn } from "@/utils/common"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import styles from "@/components/layouts/social/chat/chat-layout/style.module.scss"
import ChatPanel from "@/components/layouts/social/chat/chat-panel"
import { Sidebar } from "@/components/layouts/social/chat/side-bar"

import { userData } from "../mock-data"

interface ChatLayoutProps {
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize?: number
}

export default function ChatLayout({
  defaultLayout = [280, 520],
  defaultCollapsed = false,
  navCollapsedSize = 5,
}: ChatLayoutProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const [selectedUser, setSelectedUser] = React.useState(userData[0])
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Initial check
    checkScreenWidth()

    // Event listener for screen width changes
    window.addEventListener("resize", checkScreenWidth)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth)
    }
  }, [])

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className={styles["resizable-panel-group"]}
    >
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={navCollapsedSize}
        collapsible={true}
        minSize={20}
        maxSize={20}
        onCollapse={() => {
          setIsCollapsed(true)
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            true
          )}`
        }}
        onExpand={() => {
          setIsCollapsed(false)
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            false
          )}`
        }}
        className={cn(isCollapsed && styles["user-side-collapse"])}
      >
        <Sidebar
          isCollapsed={isCollapsed || isMobile}
          chats={userData.map((user) => ({
            name: user.name,
            messages: user.messages ?? [],
            avatar: user.avatar,
            variant: selectedUser?.name === user.name ? "secondary" : "ghost",
          }))}
          isMobile={isMobile}
        />
      </ResizablePanel>

      <ResizableHandle className={styles["resizable-handle"]} withHandle />

      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <ChatPanel
          messages={selectedUser!.messages}
          selectedUser={selectedUser!}
          isMobile={isMobile}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
