"use client"

import { io } from "socket.io-client"

export const socketNotification = (accessToken: string) => {
  return io("http://localhost:3300/notifications", {
    auth: {
      token: `Bearer ${accessToken}`,
    },
    // transports: ["websocket"],
  })
}
