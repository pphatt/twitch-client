import * as React from "react"
import { AuthContext } from "@/context/auth.context"

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (typeof context === "undefined")
    throw new Error("Auth Provider must wrap in the React Root")
  return context
}
