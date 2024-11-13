import type { NextRequest } from "next/server"
import { Auth } from "@modules/core/presentation/endpoints/auth/auth.request"
import type { RefreshTokenRequestDto } from "@modules/user/presentation/http/dto/request/auth/refresh-token.request.dto"

export async function POST(request: NextRequest) {
  const { refreshToken } = (await request.json()) as RefreshTokenRequestDto

  if (!refreshToken) {
    return Response.json(
      { message: "Refresh token not found" },
      { status: 401 }
    )
  }

  const response = await Auth.refreshToken({ refreshToken })

  const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
    response.data

  return Response.json(
    { accessToken: newAccessToken, refreshToken: newRefreshToken },
    { status: 200, statusText: "Refresh Token successfully" }
  )
}
