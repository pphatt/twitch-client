import type { NextRequest } from "next/server"
import type { User } from "@modules/core/domain-base/entity/identity/user.entity"
import { BackendURL } from "@modules/core/presentation/endpoints/default.endpoints"
import type { TokenPayload } from "@modules/user/application/command/auth/jwt/token.payload"
import axios from "axios"
import { jwtDecode } from "jwt-decode"

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get("access-token")?.value

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

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

  const resData = data.data

  return Response.json(
    {
      data: resData,
    },
    {
      status: 200,
    }
  )
}
