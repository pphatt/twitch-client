// server side checking auth

import { cache } from "react"
import { cookies } from "next/headers"

export const isAuthenticated = cache(() => {
  return !!cookies().get("access-token")?.value
})
