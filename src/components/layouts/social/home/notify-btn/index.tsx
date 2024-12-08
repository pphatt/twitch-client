"use client"

import * as React from "react"
import { env } from "@/utils/common/env"
import type { NotificationResponseDto } from "@modules/user/presentation/http/dto/response/socket/notification.response.dto"
import { io, type Socket } from "socket.io-client"

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

let socket: Socket

export default function NotifyBtn({ accessToken }: NotifyBtnProps) {
  const [listNotifications, setListNotifications] = React.useState<
    NotificationResponseDto[]
  >([])

  React.useEffect(() => {
    socket = io(`${env.NEXT_PUBLIC_BACK_END_API_URL}/notifications`, {
      auth: {
        token: `Bearer ${accessToken}`,
      },
      transports: ["websocket"],
    })

    function onNotify(payload: NotificationResponseDto) {
      console.log("Follow notification")
      setListNotifications((prevListNotifications) => [
        payload,
        ...prevListNotifications,
      ])
    }

    function innitListNotifications(payload: NotificationResponseDto[]) {
      setListNotifications(payload)
    }

    socket.on("getNotifications", innitListNotifications)
    socket.on("notification", onNotify)

    return () => {
      socket.off("notification", onNotify)
    }
  }, [])

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
            <NotifyContent notifications={listNotifications} />
          </HoverCardContent>
        </HoverCard>
      </HeaderItemContentDropdown>
    </HeaderItemWrapper>
  )
}
