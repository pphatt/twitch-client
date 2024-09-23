"use client"

import * as React from "react"
import { create, type StoreApi } from "zustand"
import createContext from "zustand/context"

type IInitialAuthContext = {
  isAuthenticated: boolean

  profile: object // NOTE: userDto
}

type IAuthStore = IInitialAuthContext & {
  setIsAuthenticated: () => void

  setProfile: (profile: object) => void
}

const { Provider, useStore } = createContext<StoreApi<IAuthStore>>()

const createAuthStore = (initialAuthContext: IInitialAuthContext) =>
  create<IAuthStore>((set) => ({
    isAuthenticated: initialAuthContext.isAuthenticated,
    setIsAuthenticated: () => set({}),

    profile: {},
    setProfile: () => set({}),
  }))

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = true // this should have some cookie retrieve
  const profile = {} // this should be get from local storage

  return (
    <Provider
      createStore={() =>
        createAuthStore({
          isAuthenticated,
          profile,
        })
      }
    >
      {children}
    </Provider>
  )
}

export { useStore as useAuth }
