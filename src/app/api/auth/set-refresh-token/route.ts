import type { NextRequest } from "next/server"
import type { RefreshTokenResponseDto } from "@modules/user/presentation/http/dto/response/auth/refresh-token.response.dto"
import {cookies} from "next/headers";

export async function POST(request: NextRequest) {
  const { accessToken, refreshToken } =
    (await request.json()) as RefreshTokenResponseDto

  if (!accessToken || !refreshToken) {
    return Response.json({ message: "Access token not found" }, { status: 401 })
  }

  cookies().set("access-token", accessToken)
  cookies().set("refresh-token", refreshToken)

  return Response.json(
    {},
    { status: 200, statusText: "Refresh Token successfully" }
  )
}
