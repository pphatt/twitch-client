import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"
import type { RejectFriendRequestDto } from "@modules/user/presentation/http/dto/request/social/reject-friend.request.dto"

export async function POST(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  const json = (await request.json()) as RejectFriendRequestDto

  const { senderId } = json

  try {
    await Social.rejectFriend(
      { senderId },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    return Response.json(
      { message: "Reject friend request successfully" },
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
