import type { NextRequest } from "next/server"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"

export async function POST(request: NextRequest) {
  const refreshToken = request.cookies.get("refresh-token")?.value

  if (!refreshToken) {
    return Response.json(
      {},
      {
        status: 401,
        statusText: "Refresh Token Not Found",
      }
    )
  }

  try {
    console.log("REFRESH TOKEN COME FROM ROUTE HANDLER")
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
      await UserRepository.refreshToken({ refreshToken })

    request.cookies.set("access-token", newAccessToken)
    request.cookies.set("refresh-token", newRefreshToken)
  } catch (_) {
    request.cookies.delete("access-token")
    request.cookies.delete("refresh-token")

    return Response.json(
      {},
      {
        status: 401,
        statusText: "Unable to refresh token. Login Again",
      }
    )
  }

  return Response.json(
    {},
    { status: 200, statusText: "Refresh Token successfully" }
  )
}
