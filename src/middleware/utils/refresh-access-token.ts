import type { NextResponse } from "next/server"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"

export const refreshAccessToken = async (
  response: NextResponse,
  refreshToken: string
) => {
  try {
    console.log("REFRESH TOKEN COME FROM MIDDLEWARE")
    const {
      refreshToken: newRefreshToken,
      accessToken: newAccessToken,
      profile,
    } = await UserRepository.refreshToken({
      refreshToken,
    })

    response.cookies.set("access-token", newAccessToken)
    response.cookies.set("refresh-token", newRefreshToken)
    response.cookies.set("profile", JSON.stringify(profile))

    return response
  } catch (error) {
    console.log("why is this throw???")
    console.log(error)
    response.cookies.delete("access-token")
    response.cookies.delete("refresh-token")

    return response
  }
}
