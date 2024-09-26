// server side checking auth

import { cookies } from "next/headers"

export const isAuthenticated = () => {
  return !!cookies().get("access-token")
}
