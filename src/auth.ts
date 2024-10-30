// server side checking auth

import { cookies } from "next/headers"
import {jwtDecode, type JwtPayload} from "jwt-decode";

export const isAuthenticated = () => {
  return !!cookies().get("access-token")?.value
}

export const whoami = () => {
  const accessToken = cookies().get("access-token")?.value

  if (!accessToken) {
    return null
  }

  const { username } = jwtDecode<JwtPayload & { username: string }>(accessToken)

  return username
}
