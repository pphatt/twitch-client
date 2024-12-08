"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
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
  const router = useRouter()

  const [isConnected, setIsConnected] = React.useState(false)
  const [transport, setTransport] = React.useState("N/A")

  const [listNotification, setListNotification] = React.useState([])

  React.useEffect(() => {
    console.log(accessToken)

    socket = io("http://localhost:3300/notifications", {
      auth: {
        token: `Bearer ${accessToken}`,
      },
      transports: ["websocket"],
    })

    // if (socket.connected) {
    //   onConnect()
    // }

    function onConnect(data) {
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

    function onNotify(data) {
      console.log("Follow notification")
      console.log(data)
    }

    function setListNotifications(data) {}

    socket.emit("list-notification", setListNotifications)

    socket.on("connect", onConnect)
    socket.on("notification", onNotify)
    socket.on("disconnect", onDisconnect)

    return () => {
      socket.off("connect", onConnect)
      socket.off("notification", onNotify)
      socket.off("disconnect", onDisconnect)
    }
  }, [accessToken])

  console.log(isConnected)

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

          <Button onClick={() => router.refresh()}>Test refresh route</Button>

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
