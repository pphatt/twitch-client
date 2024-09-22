"use client"

import * as React from "react"

type IInitialAuthContext = {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>

  profile: object // NOTE: userDto
  setProfile: React.Dispatch<React.SetStateAction<object>>
}

const initialAuthContext: IInitialAuthContext = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},

  profile: {},
  setProfile: () => {},
}

export const AuthContext = React.createContext(initialAuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated: initialAuth, profile: initialProfile } =
    initialAuthContext

  const [isAuthenticated, setIsAuthenticated] = React.useState(initialAuth)
  const [profile, setProfile] = React.useState(initialProfile)

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
