"use client"

import * as React from "react"
import { getAccessTokenFromCookie, getUserProfile } from "@/utils/auth.utils"
import { create, type StoreApi } from "zustand"
import createContext from "zustand/context"

type IInitialAuthContext = {
  isAuthenticated: boolean

  profile: { userId: string } | null // NOTE: userDto
}

type IAuthStore = IInitialAuthContext & {
  setIsAuthenticated: (isAuthenticated: boolean) => void

  setProfile: (profile: { userId: string } | null) => void
}

const { Provider, useStore } = createContext<StoreApi<IAuthStore>>()

const createAuthStore = () =>
  create<IAuthStore>((set) => ({
    // only use for csr
    profile: null,
    setProfile: (value: { userId: string } | null) => set({ profile: value }),

    // isAuthenticated for client-side checking
    isAuthenticated: false,
    setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  }))

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider createStore={() => createAuthStore()}>{children}</Provider>
}

export { useStore as useAuth }
