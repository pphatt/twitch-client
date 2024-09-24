"use client"

import * as React from "react"
import { getUserProfile } from "@/utils/auth.utils"
import { create, type StoreApi } from "zustand"
import createContext from "zustand/context"

import { useMounted } from "@/hooks/useMounted.hooks"

type IInitialAuthContext = {
  profile: { userId: string } | null // NOTE: userDto
}

type IAuthStore = IInitialAuthContext & {
  setProfile: (profile: { userId: string }) => void
}

const { Provider, useStore } = createContext<StoreApi<IAuthStore>>()

const createAuthStore = ({ profile }: IInitialAuthContext) =>
  create<IAuthStore>((set) => ({
    profile,
    setProfile: (value: { userId: string }) => set({ profile: value }),
  }))

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const isMounted = useMounted()
  const profile = isMounted ? getUserProfile() : null

  return (
    <Provider
      createStore={() =>
        createAuthStore({
          profile,
        })
      }
    >
      {children}
    </Provider>
  )
}

export { useStore as useAuth }
