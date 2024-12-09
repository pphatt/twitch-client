import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"
import type { AddFriendRequestDto } from "@modules/user/presentation/http/dto/request/social/add-friend.request.dto"
import {AcceptFriendRequestDto} from "@modules/user/presentation/http/dto/request/social/accept-friend.request.dto";

export async function POST(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  const json = (await request.json()) as AcceptFriendRequestDto

  const { senderId } = json

  try {
    await Social.acceptFriend(
      { senderId },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    return Response.json(
      { message: "Accept friend request successfully" },
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
