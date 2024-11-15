import { cookies } from "next/headers"
import type { NextRequest } from "next/server"
import {
  handleSelectLatestAccessToken,
  handleSelectLatestRefreshToken,
} from "@/utils/auth.utils"
import { Auth } from "@modules/core/presentation/endpoints/auth/auth.request"
import { UserRequest } from "@modules/core/presentation/endpoints/user/user.request"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import type { UpdateUsernameRequestDto } from "@modules/user/presentation/http/dto/request/user/update-username.request.dto"

export async function POST(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  const refreshToken = handleSelectLatestRefreshToken(request)

  if (!refreshToken) {
    return Response.json(
      { message: "Refresh Token Not Found" },
      { status: 401 }
    )
  }

  const json = (await request.json()) as UpdateUsernameRequestDto

  const { username } = json

  try {
    const { data } = await UserRequest.updateUsername(
      { username },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    const {
      refreshToken: newRefreshToken,
      accessToken: newAccessToken,
      profile,
    } = await UserRepository.refreshToken({
      refreshToken,
    })

    if (newAccessToken) {
      cookies().set("access-token", newAccessToken)
    }

    if (newRefreshToken) {
      cookies().set("refresh-token", newRefreshToken)
    }

    if (profile) {
      cookies().set("profile", JSON.stringify(profile))
    }

    return Response.json(
      {
        profile,
        message: data.message,
      },
      {
        status: 201,
      }
    )
  } catch (err) {
    return Response.json(
      {
        message: err,
      },
      {
        status: 400,
      }
    )
  }
}
