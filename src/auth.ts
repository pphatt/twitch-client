// server side checking auth

import { cookies } from "next/headers"
import type { User } from "@modules/core/domain-base/entity/identity/user.entity"
import { BackendURL } from "@modules/core/presentation/endpoints/default.endpoints"
import type { TokenPayload } from "@modules/user/application/command/auth/jwt/token.payload"
import axios from "axios"
import { jwtDecode } from "jwt-decode"

export const isAuthenticated = () => {
  return !!cookies().get("access-token")?.value
}

export const whoami = async (): Promise<User | null> => {
  const accessToken = cookies().get("access-token")?.value

  if (!accessToken) {
    return null
  }

  try {
    const { sub } = jwtDecode<TokenPayload>(accessToken)

    // const res = await fetch(`${BackendURL}/users/specific-user/${sub}`)
    // const data = (await res.json()) as User

    const { data } = await axios.get<{ data: User }>(
      `${BackendURL}/users/specific-user/${sub}`,
      {
        data: {
          id: sub,
        },
      }
    )

    return data.data
  } catch (error) {
    console.log(error)
    return null
  }
}
