"use client"

import * as React from "react"
import { getAccessToken, getUserProfile } from "@/utils/auth.utils"
import { create, type StoreApi } from "zustand"
import createContext from "zustand/context"

type IInitialAuthContext = {
  isAuthenticated: boolean | null

  profile: { userId: string } | null // NOTE: userDto
}

type IAuthStore = IInitialAuthContext & {
  setIsAuthenticated: (isAuthenticated: boolean) => void

  setProfile: (profile: { userId: string } | null) => void
}

const initialValue: IInitialAuthContext = {
  profile: getUserProfile(),
  isAuthenticated: !!getAccessToken(),
}

const { Provider, useStore } = createContext<StoreApi<IAuthStore>>()

const createAuthStore = () =>
  create<IAuthStore>((set) => ({
    profile: initialValue.profile,
    setProfile: (value: { userId: string } | null) => set({ profile: value }),

    // isAuthenticated for client-side checking
    isAuthenticated: initialValue.isAuthenticated,
    setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  }))

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  console.log(initialValue)
  return <Provider createStore={() => createAuthStore()}>{children}</Provider>
}

export { useStore as useAuth }
