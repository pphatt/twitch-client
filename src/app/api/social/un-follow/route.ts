import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"
import type {UnFollowUserRequestDto} from "@modules/user/presentation/http/dto/request/social/unfollow-user.request.dto";

export async function POST(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  const json = (await request.json()) as UnFollowUserRequestDto

  const { destinationUserId } = json

  try {
    await Social.unFollowUser(
      { destinationUserId },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    return Response.json(
      { message: "unfollow user successfully" },
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