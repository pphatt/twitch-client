import type { NextRequest } from "next/server"
import { jwtDecode, type JwtPayload } from "jwt-decode"

export function GET(request: NextRequest) {
  const accessToken = request.cookies.get("access-token")?.value

  if (!accessToken) {
    return Response.json(
      {},
      {
        status: 401,
        statusText: "Access Token Not Found",
      }
    )
  }

  const { username } = jwtDecode<JwtPayload & { username: string }>(accessToken)

  return Response.json(
    {
      username,
    },
    {
      status: 200,
    }
  )
}
