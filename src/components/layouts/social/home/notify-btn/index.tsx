"use client"

import * as React from "react"
import { socketNotification } from "@/socket/socket"
import { io, Socket } from "socket.io-client"

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Icons } from "@/components/icons"
import styles from "@/components/layouts/social/home/notify-btn/style.module.scss"
import NotifyContent from "@/components/layouts/social/home/notify-content"
import {
  HeaderItemContentDropdown,
  HeaderItemTrigger,
  HeaderItemWrapper,
  SVGContainer,
  SVGWrapper,
} from "@/components/layouts/social/site-header/style"

interface NotifyBtnProps {
  accessToken: string
}

let socket: Socket | null = null

export default function NotifyBtn({ accessToken }: NotifyBtnProps) {
  const [isConnected, setIsConnected] = React.useState(false)
  const [transport, setTransport] = React.useState("N/A")

  React.useEffect(() => {
    socket = io("http://localhost:3300/notifications", {
      auth: {
        token: `Bearer ${accessToken}`,
      },
      transports: ["websocket"],
    })

    // if (socket.connected) {
    //   onConnect()
    // }

    function onConnect() {
      console.log("data")
      setIsConnected(true)
      setTransport(socket.io.engine.transport.name)

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name)
      })
    }

    function onDisconnect(reason) {
      console.log(reason)
      // if (reason === 'io server disconnect') {
      //   socket.connect();
      // }

      setIsConnected(false)
      setTransport("N/A")
    }

    socket.on("connect", onConnect)
    socket.on("disconnect", onDisconnect)

    return () => {
      socket.off("connect", onConnect)
      socket.off("disconnect", onDisconnect)
    }
  }, [])

  console.log(isConnected)
  console.log(transport)

  return (
    <HeaderItemWrapper>
      <HeaderItemContentDropdown>
        <HoverCard openDelay={100} closeDelay={200}>
          <HoverCardTrigger asChild>
            <HeaderItemTrigger as={Button}>
              <SVGWrapper>
                <SVGContainer>
                  <Icons.notify />
                </SVGContainer>
              </SVGWrapper>
            </HeaderItemTrigger>
          </HoverCardTrigger>

          <HoverCardContent
            className={styles["notify-content-wrapper"]}
            align={"end"}
            side={"bottom"}
            sideOffset={15}
          >
            <NotifyContent />
          </HoverCardContent>
        </HoverCard>
      </HeaderItemContentDropdown>
    </HeaderItemWrapper>
  )
}
