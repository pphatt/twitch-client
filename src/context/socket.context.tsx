import { createContext } from "react"
import { env } from "@/utils/common/env"
import { io } from "socket.io-client"

export const socket = (accessToken: string) => {
  return io(env.NEXT_PUBLIC_BACK_END_API_URL, {
    auth: {
      token: `Bearer ${accessToken}`,
    },
    transports: ["websocket"],
  })
}

export const SocketContext = (accessToken: string) => {
  return createContext(socket(accessToken))
}
