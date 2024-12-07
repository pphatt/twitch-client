"use client"

import * as React from "react"
import type { WhoamiResponseDto } from "@modules/user/presentation/http/dto/response/user/whoami.reponse.dto"

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
  setAuthenticated: (authenticated: boolean) => void
}

// Combine AuthState and AuthActions into a single type
export type AuthContextType = AuthState & AuthActions

// Initialize AuthContext with default values
const AuthContext = React.createContext<AuthContextType | undefined>(undefined)

export interface AuthProviderProps {
  profileFromCookie: string | undefined
  children: React.ReactNode
}

export const AuthStoreProvider = ({
  profileFromCookie,
  children,
}: AuthProviderProps) => {
  // Initialize state using React's useState and useLocalStorage for persistence
  const [authenticated, setAuthenticated] =
    React.useState<boolean>(!!profileFromCookie)
  const [profile, setProfile] = useLocalStorage<WhoamiResponseDto | null>({
    key: "profile",
    defaultValue: profileFromCookie
      ? (JSON.parse(profileFromCookie) as WhoamiResponseDto)
      : null,
  })

  // Sync state with profileFromCookie when it changes
  React.useEffect(() => {
    const stringProfile = JSON.stringify(profile)

    if (profileFromCookie && profileFromCookie !== stringProfile) {
      setProfile(JSON.parse(profileFromCookie) as WhoamiResponseDto)
      setAuthenticated(true)
    } else if (!profileFromCookie && profile) {
      setProfile(null)
      setAuthenticated(false)
    }
  }, [profile, profileFromCookie, setProfile])

  // Define context value with state and action functions
  const value = {
    profile,
    authenticated,
    setProfile,
    setAuthenticated,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to access the AuthContext
export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
