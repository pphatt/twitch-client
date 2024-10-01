import type { NextResponse } from "next/server"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"

export const refreshAccessToken = async (
  response: NextResponse,
  headers: Headers,
  refreshToken: string
) => {
  try {
    const { refreshToken: newRefreshToken, accessToken: newAccessToken } =
      await UserRepository.refreshToken({
        refreshToken,
      })

    console.log("newRefreshToken", newRefreshToken)
    console.log("newAccessToken", newAccessToken)

    response.cookies.set("access-token", newAccessToken)
    response.cookies.set("refresh-token", newRefreshToken)

    console.log(response)

    return response
  } catch (_) {
    response.cookies.delete("access-token")
    response.cookies.delete("refresh-token")

    return response
  }
}
