import { cookies } from "next/headers"
import type { NextRequest } from "next/server"
import {
  handleSelectLatestAccessToken,
  handleSelectLatestRefreshToken,
} from "@/utils/auth.utils"
import { UserRequest } from "@modules/core/presentation/endpoints/user/user.request"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import type { UpdateProfileRequestDto } from "@modules/user/presentation/http/dto/request/user/update-profile.request.dto"

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

  const json = (await request.json()) as UpdateProfileRequestDto

  const { displayName, bio } = json

  try {
    await UserRequest.updateDisplayName(
      { displayName },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    // await UserRequest.updateBio(
    //   { displayName, bio },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   }
    // )

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
        message: "Update user profile successfully",
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
