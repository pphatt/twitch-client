"use client"

import * as React from "react"
import type { WhoamiResponseDto } from "@modules/user/presentation/http/dto/response/user/whoami.reponse.dto"
import { useStore } from "zustand"
import { createStore } from "zustand/vanilla"

import { useLocalStorage } from "@/hooks/useLocalStorage.hooks"

export type AuthState = {
  profile: WhoamiResponseDto | null

  authenticated: boolean
}

export type AuthActions = {
  setProfile: (
    val:
      | WhoamiResponseDto
      | ((prevState: WhoamiResponseDto | null) => WhoamiResponseDto | null)
      | null
  ) => void

  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

export type AuthStore = AuthState & AuthActions

const createAuthStore = ({
  profile,
  setProfile,
  authenticated,
  setAuthenticated,
}: AuthStore) => {
  return createStore<AuthStore>()(() => ({
    profile,
    setProfile,
    authenticated,
    setAuthenticated,
  }))
}

export type AuthStoreApi = ReturnType<typeof createAuthStore>

export const AuthStoreContext = React.createContext<AuthStoreApi | undefined>(
  undefined
)

export interface AuthStoreProviderProps {
  profileFromCookie: string | undefined
  children: React.ReactNode
}

export const AuthStoreProvider = ({
  profileFromCookie,
  children,
}: AuthStoreProviderProps) => {
  const storeRef = React.useRef<AuthStoreApi>()

  const [authenticated, setAuthenticated] = React.useState(!!profileFromCookie)

  const [profile, setProfile] = useLocalStorage<WhoamiResponseDto | null>({
    key: "profile",
    defaultValue: profileFromCookie
      ? (JSON.parse(profileFromCookie) as WhoamiResponseDto)
      : null,
  })

  if (!storeRef.current) {
    storeRef.current = createAuthStore({
      profile,
      setProfile,
      authenticated,
      setAuthenticated,
    })
  }

  React.useEffect(() => {
    if (profileFromCookie && !profile) {
      setProfile(JSON.parse(profileFromCookie) as WhoamiResponseDto)
    } else if (!profileFromCookie && profile) {
      setProfile(null)
    }
  }, [profile, profileFromCookie, setProfile])

  return (
    <AuthStoreContext.Provider value={storeRef.current}>
      {children}
    </AuthStoreContext.Provider>
  )
}

export const useAuthStore = <T,>(selector: (store: AuthStore) => T): T => {
  const authStoreContext = React.useContext(AuthStoreContext)

  if (!authStoreContext) {
    throw new Error(`useAuthStore must be used within AuthStoreProvider`)
  }

  return useStore(authStoreContext, selector)
}

export { useAuthStore as useAuth }
