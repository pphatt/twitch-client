import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"
import type { FollowUserRequestDto } from "@modules/user/presentation/http/dto/request/social/follow-user.request.dto"

export async function POST(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  const json = (await request.json()) as FollowUserRequestDto

  const { destinationUserId } = json

  try {
    await Social.followUser(
      { destinationUserId },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    return Response.json(
      { message: "Follow user successfully" },
      {
        status: 200,
      }
    )
  } catch (err) {
    return Response.json(
      {
        message: "UNAUTHORIZED",
      },
      {
        status: 400,
      }
    )
  }
}
