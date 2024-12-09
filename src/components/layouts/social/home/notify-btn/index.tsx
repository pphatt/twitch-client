"use client"

import * as React from "react"
import { env } from "@/utils/common/env"
import {
  FriendNotificationItemResponseDto,
  FriendNotificationResponseDto,
  NotificationItemResponseDto,
  NotificationResponseDto,
} from "@modules/user/presentation/http/dto/response/socket/notification.response.dto"
import { io, type Socket } from "socket.io-client"
import { toast } from "sonner"

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
  const [listFriendsNotifications, setListFriendsNotifications] =
    React.useState<FriendNotificationResponseDto>({ friends: [] })

  const [listNotifications, setListNotifications] =
    React.useState<NotificationResponseDto>({ notifications: [] })

  React.useEffect(() => {
    socket = io(env.NEXT_PUBLIC_BACK_END_API_URL, {
      auth: {
        token: `Bearer ${accessToken}`,
      },
      transports: ["websocket"],
    })

    function onNotify(payload: NotificationItemResponseDto) {
      console.log("Notification")
      toast.success(payload.message)
      setListNotifications((prevListNotifications) => {
        return {
          notifications: [payload, ...prevListNotifications.notifications],
        }
      })
    }

    function onFriendRequestReceived(
      payload: FriendNotificationItemResponseDto
    ) {
      console.log("Friend Request")
      console.log(payload)
      toast.success(`${payload.name} send friend request`)
    }

    function innitListNotifications(payload: NotificationResponseDto) {
      console.log(payload)
      setListNotifications(payload)
    }

    function innitListFriendNotifications(
      payload: FriendNotificationResponseDto
    ) {
      console.log(payload)
      setListFriendsNotifications(payload)
    }

    socket.on("getNotifications", innitListNotifications)
    socket.on("friendRequestsList", innitListFriendNotifications)

    socket.on("friendRequestReceived", onFriendRequestReceived)
    socket.on("notification", onNotify)

    return () => {
      socket.off("notification", onNotify)
      socket.off("friendRequestReceived", onFriendRequestReceived)

      socket.off("getNotifications", innitListNotifications)
      socket.off("friendRequestsList", innitListFriendNotifications)
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
            <NotifyContent
              friendNotifications={listFriendsNotifications}
              notifications={listNotifications}
            />
          </HoverCardContent>
        </HoverCard>
      </HeaderItemContentDropdown>
    </HeaderItemWrapper>
  )
}
