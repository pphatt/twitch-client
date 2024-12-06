import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"
import type { ReactToPostRequestDto } from "@modules/user/presentation/http/dto/request/social/react-to-post.request.dto"

export async function POST(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  const json = (await request.json()) as ReactToPostRequestDto

  const { postId, reactionType } = json

  try {
    await Social.reactToPost(
      { postId, reactionType },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    return Response.json(
      {
        message: "React to post successfully",
      },
      {
        status: 200,
      }
    )
  } catch (err) {
    console.log(err)
    return Response.json(
      {
        message: "Something went wrong",
      },
      {
        status: 400,
      }
    )
  }
}
