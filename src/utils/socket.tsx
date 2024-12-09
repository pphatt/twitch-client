"use client"

import * as React from "react"
import { env } from "@/utils/common/env"
import { io, type Socket } from "socket.io-client"

export const socket = io(env.NEXT_PUBLIC_BACK_END_API_URL, {
  withCredentials: true,
  transports: ["websocket"],
})

export const SocketContext = React.createContext(socket)

export interface SocketProviderProps {
  children: React.ReactNode
}

export const SocketStoreProvider = ({ children }: SocketProviderProps) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}

export const useSocket = (): Socket => {
  const context = React.useContext(SocketContext)
  if (!context) {
    throw new Error("useSocket must be used within an SocketProvider")
  }
  return context
}
